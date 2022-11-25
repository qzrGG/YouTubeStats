private takeUntilSubject: Subject<void> = new Subject<void>();
    public ngOnInit() {
        this.aService.events.pipe(
            tap(e => console.info(e)),
            takeUntil(this.takeUntilSubject))
        .subscribe(x => console.info(x));       
    }
    public ngOnDestroy(): void {
    }