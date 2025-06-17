using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class CohereChatController : ControllerBase
{
    private readonly CohereChatService _chatService;

    public CohereChatController(CohereChatService chatService)
    {
        _chatService = chatService;
    }

    [HttpPost("ask")]
    public async Task<IActionResult> Ask([FromBody] ChatRequest req)
    {
        var result = await _chatService.ChatWithCohere(req.Message);
        return Ok(new { response = result });
    }
}

public class ChatRequest
{
    public string Message { get; set; } = string.Empty;
}
