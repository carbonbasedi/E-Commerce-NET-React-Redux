using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities.OrderAggregate;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class OrderExtensions
    {
        public static IQueryable<OrderDTO> ProjectOrderToOrderDTO(this IQueryable<Order> query)
        {
            return query
                .Select(Order => new OrderDTO
                {
                    Id = Order.Id,
                    UserId = Order.UserId,
                    OrderDate = Order.OrderDate,
                    ShippingAddress = Order.ShippingAddress,
                    DeliveryFee = Order.DeliveryFee,
                    Subtotal = Order.Subtotal,
                    OrderStatus = Order.OrderStatus.ToString(),
                    Total = Order.GetTotal(),
                    OrderItems = Order.OrderItems.Select(item => new OrderItemDTO
                    {
                        ProductId = item.ItemOrdered.ProductId,
                        Name = item.ItemOrdered.Name,
                        PictureUrl = item.ItemOrdered.PictureUrl,
                        Price = item.Price,
                        Quantity = item.Quantity
                    }).ToList()
                }).AsNoTracking();
        }
    }
}