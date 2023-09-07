using API.DTOs;
using API.Entities;

namespace API.Extensions
{
    public static class BasketExtentions
    {
        public static BasketDTO MapBasketToDTO(this Basket basket)
        {
            return new BasketDTO
            {
                Id = basket.Id,
                UserId = basket.UserId,
                Items = basket.Items.Select(item => new BasketItemDTO
                {
                    ProductId = item.ProductId,
                    Name = item.Product.Name,
                    Price = item.Product.Price,
                    PictureUrl = item.Product.PictureUrl,
                    Type = item.Product.Type,
                    Brand = item.Product.Brand,
                    Quantity = item.Quantity
                }).ToList()
            };
        }
    }
}