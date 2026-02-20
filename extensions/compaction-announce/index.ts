import type { OpenClawPluginApi } from "openclaw/plugin-sdk";

/**
 * Compaction Announce Plugin
 *
 * Posts a message to a configured Discord channel when compaction
 * starts and ends. Useful for multi-user setups where participants
 * need to know why the agent is temporarily unresponsive.
 *
 * Config:
 *   plugins.entries.compaction-announce.config.channelId = "123456789"
 */
export default function register(api: OpenClawPluginApi) {
  const channelId = (api.pluginConfig as Record<string, unknown> | undefined)?.channelId;

  if (!channelId || typeof channelId !== "string") {
    api.logger.warn("compaction-announce: no channelId configured, plugin disabled");
    return;
  }

  api.logger.info(`compaction-announce: will announce to channel ${channelId}`);

  const send = api.runtime.channel.discord.sendMessageDiscord;

  api.on("before_compaction", async (_event, _ctx) => {
    try {
      await send(channelId, "🧹 Compacting memory — back in a moment…");
    } catch (err) {
      api.logger.warn(`compaction-announce: failed to send start message: ${err}`);
    }
  });

  api.on("after_compaction", async (_event, _ctx) => {
    try {
      await send(channelId, "✅ Compaction complete — I'm back online.");
    } catch (err) {
      api.logger.warn(`compaction-announce: failed to send end message: ${err}`);
    }
  });
}
