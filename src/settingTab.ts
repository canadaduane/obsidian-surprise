import SurpriseNotePlugin from './main';
import { PluginSettingTab, Setting } from 'obsidian';

export class SurpriseNoteSettingTab extends PluginSettingTab {
    plugin: SurpriseNotePlugin;

    constructor(plugin: SurpriseNotePlugin) {
        super(plugin.app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const { containerEl } = this;

        containerEl.empty();

        containerEl.createEl('h2', { text: 'Surprise Note Settings ' });

        new Setting(containerEl)
            .setName('Open in New Leaf')
            .setDesc('Default setting for opening random notes')
            .addToggle((toggle) => {
                toggle.setValue(this.plugin.settings.openInNewLeaf);
                toggle.onChange(this.plugin.setOpenInNewLeaf);
            });

        new Setting(containerEl)
            .setName('Enable Ribbon Icon')
            .setDesc('Place an icon on the ribbon to open a random note from search')
            .addToggle((toggle) => {
                toggle.setValue(this.plugin.settings.enableRibbonIcon);
                toggle.onChange(this.plugin.setEnableRibbonIcon);
            });
    }
}
