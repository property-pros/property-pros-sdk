BUF_VERSION:=1.1.0
init:
	npm install
	docker compose down && docker compose up --build
generate:
	make preGenerate
	docker compose run buf generate
	make postGenerate
preGenerate:
postGenerate:
	rsync -va ./api/api/* ./api
	rm -rf ./api/api
	make lint
	make generateTypeDeclarationFile
generateTypeDeclarationFile:
	tsc --project tsconfig.json
renameDependencies:
	mv ./proto/protoc-gen-openapiv2/options/openapiv2.js ./proto/protoc-gen-openapiv2/options/annotations_pb.js
	mv ./proto/protoc-gen-openapiv2/options/openapiv2.d.ts ./proto/protoc-gen-openapiv2/options/annotations_pb.d.ts
	mv ./proto/google/api/http.js ./proto/google/api/annotations_pb.js
	mv ./proto/google/api/http.d.ts ./proto/google/api/annotations_pb.d.ts
update:
	docker compose run buf mod update
lint:
	- docker compose run buf lint
	- go vet ./...
	- go fmt ./...

update-version:
	tag=$$(git describe --tags $$(git rev-list --tags --max-count=1) 2>/dev/null | sed 's/^v//') && \
	if [ -z "$$tag" ]; then \
		tag="0.0.0"; \
	fi && \
	IFS=. read major minor patch <<< "$$tag"

update-major: update-version
	new_major=$$((major + 1))
	new_tag="v$$new_major.0.0"
	git tag -a $$new_tag -m "new release"
	git push origin $$new_tag

update-minor: update-version
	new_minor=$$((minor + 1))
	new_tag="v$$major.$$new_minor.0"
	git tag -a $$new_tag -m "new release"
	git push origin $$new_tag

update-patch: 
	tag=$$(git describe --tags --abbrev=0) && \
	echo "tag: $$tag" && \
	if [ -z "$$tag" ]; then \
		tag="v0.0.0"; \
	fi && \
	IFS=. read major minor patch <<< "$$tag" && \
	echo "patch: $$patch" && \
	new_patch=$$((patch + 1)) && \
	echo "new patch: $$new_patch" && \
	new_tag="$$major.$$minor.$$new_patch" && \
	eval git tag -a $$new_tag -m "$$new_tag"

deploy:
	make update-patch
	git push origin --tags

# update-major: update-version
# 	new_major=$$((major + 1))
# 	$(MAKE) update-version-helper new_major=$$new_major minor=0 patch=0

# update-minor: update-version
# 	new_minor=$$((minor + 1))
# 	$(MAKE) update-version-helper new_major=$$major new_minor=$$new_minor patch=0

# update-version:
# 	tag=$$(git describe --tags $$(git rev-list --tags --max-count=1 --abbrev=0) 2>/dev/null | sed 's/^v//') && \
# 	if [ -z "$$tag" ]; then \
# 		tag="0.0.0"; \
# 	fi && \
# 	IFS=. read major minor patch <<< "$$tag" && \
# 	echo "$$minor, $$patch"

# update-patch: update-version
# 	new_patch=$$((patch + 1))
# 	echo "$$new_patch"
# 	$(MAKE) update-version-helper new_major=$$major new_minor=$$minor new_patch=$$new_patch

# update-version-helper:
# 	new_tag="v$$new_major.$$new_minor.$$new_patch"
# 	echo "$$new_tag"
# 	tag_name := $$(echo $$new_tag)
# 	eval git tag -a $$tag_name