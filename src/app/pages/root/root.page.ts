import { Page, PreparePage, Router } from '@nimble-ts/core';
import { LangService } from 'src/app/services/lang.service';
import { NimbleDataService } from 'src/app/services/nimble-data.service';

@PreparePage({
    template: require('./root.page.html'),
    style: require('./root.page.scss')
})
export class RootPage extends Page {

    public loadingDictionary: boolean = true;
    public loadingRoute: boolean = true;
    private cancelListeners: (() => void)[] = [];

    constructor(
		private nimbleService: NimbleDataService,
        private lang: LangService,
    ) {
        super();
    }

    onEnter() {
        this.cancelListeners = [
            Router.addListener('STARTED_CHANGE', () => {
                this.render(() => {
                    this.loadingRoute = true;
                });
            }),
            Router.addListener(['FINISHED_CHANGE', 'CHANGE_REJECTED', 'CHANGE_ERROR'], () => {
                this.render(() => {
                    this.loadingRoute = false;
                });
            })
        ];
        this.lang.loadingLanguage().then(() => {
            this.render(() => {
                this.loadingDictionary = false;
            });
        });
	}
	
	onInit() {
		this.nimbleService.prapreMenu();
	}

    onExit() {
        this.cancelListeners.forEach(x => x());
    }
}