namespace API.DTOs
{
    public class BasketDTO
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public List<BasketItemDTO> Items { get; set; }
        public string PaymentIntentId { get; set; }
        public string ClientSecret { get; set; }
    }
}