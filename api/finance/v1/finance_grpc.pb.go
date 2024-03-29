// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package finance

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

// FinanceServiceClient is the client API for FinanceService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type FinanceServiceClient interface {
	// Returns a list of financial data points for a given company.
	SaveFinancialItem(ctx context.Context, in *SaveFinancialItemRequest, opts ...grpc.CallOption) (*SaveFinancialItemResponse, error)
	GetFinancialItems(ctx context.Context, in *GetFinancialItemsRequest, opts ...grpc.CallOption) (*GetFinancialItemsResponse, error)
}

type financeServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewFinanceServiceClient(cc grpc.ClientConnInterface) FinanceServiceClient {
	return &financeServiceClient{cc}
}

func (c *financeServiceClient) SaveFinancialItem(ctx context.Context, in *SaveFinancialItemRequest, opts ...grpc.CallOption) (*SaveFinancialItemResponse, error) {
	out := new(SaveFinancialItemResponse)
	err := c.cc.Invoke(ctx, "/api.finance.v1.FinanceService/SaveFinancialItem", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *financeServiceClient) GetFinancialItems(ctx context.Context, in *GetFinancialItemsRequest, opts ...grpc.CallOption) (*GetFinancialItemsResponse, error) {
	out := new(GetFinancialItemsResponse)
	err := c.cc.Invoke(ctx, "/api.finance.v1.FinanceService/GetFinancialItems", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// FinanceServiceServer is the server API for FinanceService service.
// All implementations must embed UnimplementedFinanceServiceServer
// for forward compatibility
type FinanceServiceServer interface {
	// Returns a list of financial data points for a given company.
	SaveFinancialItem(context.Context, *SaveFinancialItemRequest) (*SaveFinancialItemResponse, error)
	GetFinancialItems(context.Context, *GetFinancialItemsRequest) (*GetFinancialItemsResponse, error)
	mustEmbedUnimplementedFinanceServiceServer()
}

// UnimplementedFinanceServiceServer must be embedded to have forward compatible implementations.
type UnimplementedFinanceServiceServer struct {
}

func (UnimplementedFinanceServiceServer) SaveFinancialItem(context.Context, *SaveFinancialItemRequest) (*SaveFinancialItemResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SaveFinancialItem not implemented")
}
func (UnimplementedFinanceServiceServer) GetFinancialItems(context.Context, *GetFinancialItemsRequest) (*GetFinancialItemsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetFinancialItems not implemented")
}
func (UnimplementedFinanceServiceServer) mustEmbedUnimplementedFinanceServiceServer() {}

// UnsafeFinanceServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to FinanceServiceServer will
// result in compilation errors.
type UnsafeFinanceServiceServer interface {
	mustEmbedUnimplementedFinanceServiceServer()
}

func RegisterFinanceServiceServer(s grpc.ServiceRegistrar, srv FinanceServiceServer) {
	s.RegisterService(&FinanceService_ServiceDesc, srv)
}

func _FinanceService_SaveFinancialItem_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SaveFinancialItemRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FinanceServiceServer).SaveFinancialItem(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/api.finance.v1.FinanceService/SaveFinancialItem",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FinanceServiceServer).SaveFinancialItem(ctx, req.(*SaveFinancialItemRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FinanceService_GetFinancialItems_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetFinancialItemsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FinanceServiceServer).GetFinancialItems(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/api.finance.v1.FinanceService/GetFinancialItems",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FinanceServiceServer).GetFinancialItems(ctx, req.(*GetFinancialItemsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// FinanceService_ServiceDesc is the grpc.ServiceDesc for FinanceService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var FinanceService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "api.finance.v1.FinanceService",
	HandlerType: (*FinanceServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "SaveFinancialItem",
			Handler:    _FinanceService_SaveFinancialItem_Handler,
		},
		{
			MethodName: "GetFinancialItems",
			Handler:    _FinanceService_GetFinancialItems_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "api/finance/v1/finance.proto",
}