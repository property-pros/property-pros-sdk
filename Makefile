BUF_VERSION:=1.1.0
init:
	npm install
	docker compose down && docker compose up --build
generate:
	make preGenerate
	docker compose run buf generate
	make postGenerate
preGenerate:
	rm -rf generated/*
	make generateTypeDeclarationFile
postGenerate:
	mv -f ./generated/proto/* ./generated
generateTypeDeclarationFile:
	tsc generated/**/*.ts --declaration --emitDeclarationOnly --outFile types.d.ts
renameDependencies:
	mv ./proto/protoc-gen-openapiv2/options/openapiv2.js ./proto/protoc-gen-openapiv2/options/annotations_pb.js
	mv ./proto/protoc-gen-openapiv2/options/openapiv2.d.ts ./proto/protoc-gen-openapiv2/options/annotations_pb.d.ts
	mv ./proto/google/api/http.js ./proto/google/api/annotations_pb.js
	mv ./proto/google/api/http.d.ts ./proto/google/api/annotations_pb.d.ts
update:
	docker compose run buf mod update
lint:
	docker compose run buf lint
	docker compose run buf breaking --against 'https://github.com/johanbrandhorst/grpc-gateway-boilerplate.git#branch=master'
