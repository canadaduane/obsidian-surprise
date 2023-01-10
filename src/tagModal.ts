import { App, Modal } from 'obsidian';
import TagModal from './TagModal.svelte';

export class OpenRandomTaggedNoteModal extends Modal {
    view: TagModal;
    tags: string[];
    submitCallback: ((selectedTag: string) => Promise<void>) | undefined = undefined;

    constructor(app: App, tags: string[]) {
        super(app);
        this.tags = tags;
        this.view = new TagModal({
            target: this.contentEl,
            props: { tags, handleSubmit: this.handleSubmit },
        });
    }

    handleSubmit = (tag: string): void => {
        if (this.submitCallback) {
            this.submitCallback(tag);
        }
        this.close();
    };
}
