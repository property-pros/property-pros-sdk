// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package notepurchaseagreement

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// NotePurchaseAgreementServiceClient is the client API for NotePurchaseAgreementService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type NotePurchaseAgreementServiceClient interface {
	GetNotePurchaseAgreementDoc(ctx context.Context, in *GetNotePurchaseAgreementDocRequest, opts ...grpc.CallOption) (*GetNotePurchaseAgreementDocResponse, error)
	SaveNotePurchaseAgreement(ctx context.Context, in *SaveNotePurchaseAgreementRequest, opts ...grpc.CallOption) (*SaveNotePurchaseAgreementResponse, error)
}

type notePurchaseAgreementServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewNotePurchaseAgreementServiceClient(cc grpc.ClientConnInterface) NotePurchaseAgreementServiceClient {
	return &notePurchaseAgreementServiceClient{cc}
}

func (c *notePurchaseAgreementServiceClient) GetNotePurchaseAgreementDoc(ctx context.Context, in *GetNotePurchaseAgreementDocRequest, opts ...grpc.CallOption) (*GetNotePurchaseAgreementDocResponse, error) {
	out := new(GetNotePurchaseAgreementDocResponse)
	err := c.cc.Invoke(ctx, "/notepurchaseagreement.NotePurchaseAgreementService/GetNotePurchaseAgreementDoc", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *notePurchaseAgreementServiceClient) SaveNotePurchaseAgreement(ctx context.Context, in *SaveNotePurchaseAgreementRequest, opts ...grpc.CallOption) (*SaveNotePurchaseAgreementResponse, error) {
	out := new(SaveNotePurchaseAgreementResponse)
	err := c.cc.Invoke(ctx, "/notepurchaseagreement.NotePurchaseAgreementService/SaveNotePurchaseAgreement", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// NotePurchaseAgreementServiceServer is the server API for NotePurchaseAgreementService service.
// All implementations must embed UnimplementedNotePurchaseAgreementServiceServer
// for forward compatibility
type NotePurchaseAgreementServiceServer interface {
	GetNotePurchaseAgreementDoc(context.Context, *GetNotePurchaseAgreementDocRequest) (*GetNotePurchaseAgreementDocResponse, error)
	SaveNotePurchaseAgreement(context.Context, *SaveNotePurchaseAgreementRequest) (*SaveNotePurchaseAgreementResponse, error)
	mustEmbedUnimplementedNotePurchaseAgreementServiceServer()
}

// UnimplementedNotePurchaseAgreementServiceServer must be embedded to have forward compatible implementations.
type UnimplementedNotePurchaseAgreementServiceServer struct {
}

func (UnimplementedNotePurchaseAgreementServiceServer) GetNotePurchaseAgreementDoc(context.Context, *GetNotePurchaseAgreementDocRequest) (*GetNotePurchaseAgreementDocResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetNotePurchaseAgreementDoc not implemented")
}
func (UnimplementedNotePurchaseAgreementServiceServer) SaveNotePurchaseAgreement(context.Context, *SaveNotePurchaseAgreementRequest) (*SaveNotePurchaseAgreementResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SaveNotePurchaseAgreement not implemented")
}
func (UnimplementedNotePurchaseAgreementServiceServer) mustEmbedUnimplementedNotePurchaseAgreementServiceServer() {
}

// UnsafeNotePurchaseAgreementServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to NotePurchaseAgreementServiceServer will
// result in compilation errors.
type UnsafeNotePurchaseAgreementServiceServer interface {
	mustEmbedUnimplementedNotePurchaseAgreementServiceServer()
}

func RegisterNotePurchaseAgreementServiceServer(s grpc.ServiceRegistrar, srv NotePurchaseAgreementServiceServer) {
	s.RegisterService(&NotePurchaseAgreementService_ServiceDesc, srv)
}

func _NotePurchaseAgreementService_GetNotePurchaseAgreementDoc_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetNotePurchaseAgreementDocRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotePurchaseAgreementServiceServer).GetNotePurchaseAgreementDoc(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/notepurchaseagreement.NotePurchaseAgreementService/GetNotePurchaseAgreementDoc",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotePurchaseAgreementServiceServer).GetNotePurchaseAgreementDoc(ctx, req.(*GetNotePurchaseAgreementDocRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _NotePurchaseAgreementService_SaveNotePurchaseAgreement_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SaveNotePurchaseAgreementRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotePurchaseAgreementServiceServer).SaveNotePurchaseAgreement(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/notepurchaseagreement.NotePurchaseAgreementService/SaveNotePurchaseAgreement",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotePurchaseAgreementServiceServer).SaveNotePurchaseAgreement(ctx, req.(*SaveNotePurchaseAgreementRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// NotePurchaseAgreementService_ServiceDesc is the grpc.ServiceDesc for NotePurchaseAgreementService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var NotePurchaseAgreementService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "notepurchaseagreement.NotePurchaseAgreementService",
	HandlerType: (*NotePurchaseAgreementServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetNotePurchaseAgreementDoc",
			Handler:    _NotePurchaseAgreementService_GetNotePurchaseAgreementDoc_Handler,
		},
		{
			MethodName: "SaveNotePurchaseAgreement",
			Handler:    _NotePurchaseAgreementService_SaveNotePurchaseAgreement_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/notepurchaseagreement/notePurchaseAgreement.proto",
}
