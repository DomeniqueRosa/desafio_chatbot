using System.Text;
using System.Text.Json;

public class CohereChatService
{
    private readonly HttpClient _httpClient;
    private readonly string _apiKey;

    private const string ChatEndpoint = "https://api.cohere.ai/v1/chat";

    public CohereChatService(HttpClient httpClient, IConfiguration configuration)
    {
        _httpClient = httpClient;
        _apiKey = configuration["Cohere:ApiKey"] ?? throw new ArgumentNullException("Cohere:ApiKey");
    }

    public async Task<string> ChatWithCohere(string message)
    {
        var requestBody = new
        {
            message = message,
            model = "command",
            temperature = 0.3
        };

        var requestJson = JsonSerializer.Serialize(requestBody);
        var request = new HttpRequestMessage(HttpMethod.Post, ChatEndpoint);
        request.Headers.Add("Authorization", $"Bearer {_apiKey}");
        request.Content = new StringContent(requestJson, Encoding.UTF8, "application/json");

        var response = await _httpClient.SendAsync(request);
        response.EnsureSuccessStatusCode();

        var responseJson = await response.Content.ReadAsStringAsync();
        var jsonDoc = JsonDocument.Parse(responseJson);

        // Extraindo o texto retornado
        var answer = jsonDoc.RootElement.GetProperty("text").GetString();

        return answer ?? "";
    }
}
