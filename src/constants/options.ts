

export interface QuickPickOptions<T> {
    label: string
    detail: string
    action: T,
}


export interface TemplateOptions {

}




 const quickPicks: QuickPickOptions<TemplateOptions>[]  = [
    {'label': 'TheCleanCLI: Gen Flutter Clean Articture Project', detail: 'Generate Clean Articture based Flutter Project', action: {}},
    {'label': 'TheCleanCLI: Genrate Feature', detail: 'Generate Feature named login with data, domain and presentation layers', action: {}},
    {'label': 'TheCleanCLI: Genrate Cubit', detail: 'Generate Cubit within ', action: {}},
]

export default quickPicks;