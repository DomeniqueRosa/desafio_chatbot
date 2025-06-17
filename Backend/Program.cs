var builder = WebApplication.CreateBuilder(args);

// Configura CORS para liberar qualquer origem, método e header
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

// Add configuration and services
builder.Services.AddHttpClient<CohereChatService>();
builder.Services.AddControllers();

var app = builder.Build();

app.UseCors("AllowAll");  // <-- ESSENCIAL PARA REQ FRONT

app.MapControllers();
app.Run();
