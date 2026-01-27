# How to Interact with Moltbot

Now that Moltbot is installed (and sandboxed!), here are the ways you can talk to it.

## 1. Quick Verification (CLI)
You can talk to the agent directly from your terminal to test if it's working.

```bash
# Basic check (Hello)
moltbot agent --agent main --message "Hello"

# Sandbox Coding Test (Safe way)
# Note: Keep commands in the root directory to avoid sandbox breakout errors.
moltbot agent --agent main --message "Write a python script named 'fib.py' that calculates the 10th Fibonacci number and run it with python3."
```

## 2. Web UI (Gateway)
The Moltbot Gateway provides a web interface and API.

1.  **Start the Gateway**:
    ```bash
    moltbot gateway
    ```
    *(If you installed the service, use `moltbot gateway start` instead)*

2.  **Open in Browser**:
    [http://localhost:18789](http://localhost:18789)

3.  **Stop the Gateway**:
    Press `Ctrl+C` in the terminal (or `moltbot gateway stop` if running as a service).

## 3. Persistent Channels
To connect real messaging apps:

```bash
moltbot onboard
```

Follow the prompts to connect WhatsApp, Telegram, Discord, etc.

## 4. Troubleshooting
If `moltbot agent` fails:
- Check logs: `tail -f /tmp/moltbot/moltbot-$(date +%Y-%m-%d).log`
- Check status: `moltbot doctor`
