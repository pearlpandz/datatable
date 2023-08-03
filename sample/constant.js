export const COLUMNS = [
    {
        field: 'platform_name',
        header: 'Platform Name',
        visible: true,
        filterType: 'text',
        filterComponent: 'input',
        order: 1,
        width: 250,
    },
    {
        field: 'application_name',
        header: 'Application Name',
        visible: true,
        filterType: 'text',
        filterComponent: 'input',
        order: 2,
        width: 250,
    },
    {
        field: 'entity_label',
        header: 'ID',
        visible: true,
        filterType: 'text',
        filterComponent: 'input',
        order: 3,
        width: 250,
    },
    {
        field: 'entity_name',
        header: 'Entity Name',
        visible: true,
        filterType: 'text',
        filterComponent: 'input',
        order: 4,
        width: 250,
    },
    {
        field: 'project number',
        header: 'Project Number',
        visible: true,
        filterType: 'text',
        filterComponent: 'input',
        order: 5,
        width: 250,
    },
    {
        field: 'project name',
        header: 'Project Name',
        visible: true,
        filterType: 'text',
        filterComponent: 'input',
        order: 6,
        width: 250,
    },
    {
        field: 'material',
        header: 'Material',
        visible: true,
        filterType: 'text',
        filterComponent: 'input',
        order: 7,
        width: 250,
    },
    {
        field: 'domain',
        header: 'Domain',
        visible: true,
        filterType: 'text',
        filterComponent: 'input',
        order: 8,
        width: 250,
    },
    {
        field: 'species',
        header: 'Species',
        visible: true,
        filterType: 'text',
        filterComponent: 'input',
        order: 9,
        width: 250,
    },
    {
        field: 'strain',
        header: 'Strain',
        visible: true,
        filterType: 'text',
        filterComponent: 'input',
        order: 10,
        width: 250,
    },
    {
        field: 'isotype',
        header: 'Isotype',
        visible: true,
        filterType: 'text',
        filterComponent: 'input',
        order: 11,
        width: 250,
    },
    {
        field: 'source',
        header: 'Source',
        visible: true,
        filterType: 'text',
        filterComponent: 'input',
        order: 12,
        width: 250,
    },
    {
        field: 'fusion',
        header: 'Fusion',
        visible: true,
        filterType: 'text',
        filterComponent: 'input',
        order: 13,
        width: 250,
    },
    {
        field: 'published date',
        header: 'Published Date',
        visible: true,
        filterType: 'date',
        filterComponent: 'calendar',
        order: 14,
        width: 250,
    },
    {
        field: 'request type',
        header: 'Request Type',
        visible: true,
        filterType: 'text',
        filterComponent: 'input',
        order: 15,
        width: 250,
    },
    {
        field: 'v gene',
        header: 'V Gene',
        visible: true,
        filterType: 'text',
        filterComponent: 'input',
        order: 16,
        width: 250,
    },
    {
        field: 'd gene',
        header: 'D Gene',
        visible: true,
        filterType: 'text',
        filterComponent: 'input',
        order: 17,
        width: 250,
    },
    {
        field: 'j gene',
        header: 'J Gene',
        visible: true,
        filterType: 'text',
        filterComponent: 'input',
        order: 18,
        width: 250,
    },
    {
        field: 'mi sequence file name',
        header: 'Mi Sequence File Name',
        visible: true,
        filterType: 'text',
        filterComponent: 'input',
        order: 19,
        width: 250,
    },
    {
        field: 'clone',
        header: 'Clone',
        visible: true,
        filterType: 'text',
        filterComponent: 'input',
        order: 20,
        width: 250,
    },
];

export const FilterMatchMode = {
    STARTS_WITH : 'startsWith',
    CONTAINS : 'contains',
    NOT_CONTAINS : 'notContains',
    ENDS_WITH : 'endsWith',
    EQUALS : 'equals',
    NOT_EQUALS : 'notEquals',
    IN : 'in',
    LESS_THAN : 'lt',
    LESS_THAN_OR_EQUAL_TO : 'lte',
    GREATER_THAN : 'gt',
    GREATER_THAN_OR_EQUAL_TO : 'gte',
    BETWEEN : 'between', 
    DATE_IS : 'dateIs',
    DATE_IS_NOT : 'dateIsNot',
    DATE_BEFORE : 'dateBefore',
    DATE_AFTER : 'dateAfter',
    CUSTOM : 'custom'
}

export const FilterOperator = {
    AND : 'and',
    OR : 'or'
}

export const FILTERS = {
    platform_name: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    application_name: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    entity_label: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    author: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    cell_line: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    cell_line_strain: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    cell_species: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    cell_type: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    class: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    class_name: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    class_type: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    construct_type: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    expression_host: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    entity_name: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    program: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    vendor: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    characterization: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    characterization_subtype: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    updated_date: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
    },
    registration_date: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
    },
    run_date: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
    },
    'published date': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
    },
    purpose: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    'project number': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    'project name': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    material: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    domain: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    species: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    strain: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    isotype: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    source: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    fusion: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    'request type': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    'v gene': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    'd gene': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    'j gene': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    'mi sequence file name': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    category: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    site_code: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    'requested date': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
    },
    'is legacy data': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
    },
    clone: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    'published by': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    requestor: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    'related report': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    'lot entered date': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
    },
    'lot last modified date': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
    },
    'lot entered user': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    'lot id': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    'lot last modified user': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    'lot scientist': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    'lot source': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    'lot user group': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    'reagent catalog number': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    'reagent id': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    'reagent notebook': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    'reagent program name': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    'reagent scientist': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    'reagent source': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    'reagent type': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    'reagent user group': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
};

export const DATA = [
    {
        "platform_name": "ADI",
        "application_name": "Sequence",
        "entity_id": "adi-6edd9112a54d7e20a600af11835e71e8",
        "entity_label": "1896.FPR2.1896.8227.16F1-hIgG1.3_RAS_Ab_01",
        "entity_name": "30343-K",
        "project number": "1896",
        "project name": "FPR2-IO",
        "fusion": null,
        "published date": null,
        "domain": "KappaLight",
        "species": "Human",
        "request type": null,
        "v gene": null,
        "d gene": null,
        "j gene": null,
        "mi sequence file name": null,
        "strain": null,
        "source": "Recombinant Ab",
        "isotype": null,
        "properties": [
            {
                "value": "ADI",
                "order": 0,
                "type": "text",
                "key": "Platform Name"
            },
            {
                "value": "Sequence",
                "order": 1,
                "type": "text",
                "key": "Application Name"
            },
            {
                "value": "1896.FPR2.1896.8227.16F1-hIgG1.3_RAS_Ab_01",
                "id": "adi-6edd9112a54d7e20a600af11835e71e8",
                "order": 2,
                "type": "identifier",
                "rule": "md5(platformName, applicationName, FusionId, Project Number, Material_Id, Chain_id, Sequence_idAA)",
                "key": "ID"
            },
            {
                "order": 3,
                "type": "text",
                "value": "30343-K",
                "key": "Name"
            },
            {
                "order": 9,
                "type": "text",
                "value": "1896",
                "key": "Project Number"
            },
            {
                "order": 10,
                "type": "text",
                "value": "FPR2-IO",
                "key": "Project Name"
            },
            {
                "order": 11,
                "type": "text",
                "value": "FPR2.1896.8227.16F1-hIgG1.3_RAS_Ab_01",
                "key": "Material Name"
            },
            {
                "order": 12,
                "type": "text",
                "key": "Fusion"
            },
            {
                "order": 13,
                "type": "numeric",
                "value": "1896.374905",
                "key": "Full Clone Name"
            },
            {
                "order": 14,
                "type": "date",
                "key": "Published Date"
            },
            {
                "order": 16,
                "type": "text",
                "value": "KappaLight",
                "key": "Domain"
            },
            {
                "order": 17,
                "type": "text",
                "value": "Human",
                "key": "Species"
            },
            {
                "order": 18,
                "type": "numeric",
                "value": 30343,
                "key": "Sequence Id AA"
            },
            {
                "order": 19,
                "type": "numeric",
                "key": "Sequence Id NT"
            },
            {
                "order": 20,
                "type": "sequence",
                "value": "DIVMTQSPSSLSASVGDRVTITCRASQSISRFLNWYQQKPGKAPKLLIYSASSLPSGVPSRFSGSGSGTDFTLTISSLQPEDFATYCCQQSSNTPYTFGQGTKLEIKRTVAAPSVFIFPPSDEQLKSGTASVVCLLNNFYPREAKVQWKVDNALQSGNSQESVTEQDSKDSTYSLSSTLTLSKADYEKHKVYACEVTHQGLSSPVTKSFNRGEC",
                "key": "Sequence"
            },
            {
                "order": 21,
                "type": "sequence",
                "key": "DNA"
            },
            {
                "order": 22,
                "type": "numeric",
                "key": "Master Sequence Request Id"
            },
            {
                "order": 23,
                "type": "numeric",
                "key": "Sequence Request Id"
            },
            {
                "order": 24,
                "type": "text",
                "key": "Request Type"
            },
            {
                "order": 25,
                "type": "text",
                "value": null,
                "key": "V Gene"
            },
            {
                "order": 26,
                "type": "text",
                "value": null,
                "key": "D Gene"
            },
            {
                "order": 27,
                "type": "text",
                "value": null,
                "key": "J Gene"
            },
            {
                "order": 28,
                "type": "text",
                "key": "Mi Sequence File Name"
            },
            {
                "order": 29,
                "type": "numeric",
                "key": "Cluster Size"
            },
            {
                "order": 30,
                "type": "text",
                "value": null,
                "key": "Strain"
            },
            {
                "order": 31,
                "type": "text",
                "value": null,
                "key": "Mouse Ids"
            },
            {
                "order": 32,
                "type": "text",
                "value": "Recombinant Ab",
                "key": "Source"
            },
            {
                "order": 33,
                "type": "text",
                "key": "Isotype"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 1,
                        "type": "sequence",
                        "key": "Mature AA Sequence"
                    },
                    {
                        "order": 10,
                        "type": "text",
                        "key": "FR1 AA"
                    },
                    {
                        "order": 11,
                        "type": "sequence",
                        "key": "FR1 AA Sequence"
                    },
                    {
                        "order": 12,
                        "type": "text",
                        "key": "CDR1 AA"
                    },
                    {
                        "order": 13,
                        "type": "sequence",
                        "key": "CDR1 AA Sequence"
                    },
                    {
                        "order": 20,
                        "type": "text",
                        "key": "FR2 AA"
                    },
                    {
                        "order": 21,
                        "type": "sequence",
                        "key": "FR2 AA Sequence"
                    },
                    {
                        "order": 22,
                        "type": "text",
                        "key": "CDR2 AA"
                    },
                    {
                        "order": 23,
                        "type": "sequence",
                        "key": "CDR2 AA Sequence"
                    },
                    {
                        "order": 30,
                        "type": "text",
                        "key": "FR3 AA"
                    },
                    {
                        "order": 31,
                        "type": "sequence",
                        "key": "FR3 AA Sequence"
                    },
                    {
                        "order": 32,
                        "type": "text",
                        "key": "CDR3 AA"
                    },
                    {
                        "order": 33,
                        "type": "sequence",
                        "key": "CDR3 AA Sequence"
                    },
                    {
                        "order": 40,
                        "type": "text",
                        "key": "FR4 AA"
                    },
                    {
                        "order": 41,
                        "type": "sequence",
                        "key": "FR4 AA Sequence"
                    }
                ],
                "value": [
                    [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ],
                "key": "Sequence Details"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 2,
                        "type": "sequence",
                        "key": "Mature DNA Sequence"
                    },
                    {
                        "order": 50,
                        "type": "text",
                        "key": "DNA FR1"
                    },
                    {
                        "order": 51,
                        "type": "sequence",
                        "key": "DNA FR1 Sequence"
                    },
                    {
                        "order": 52,
                        "type": "text",
                        "key": "DNA CDR1"
                    },
                    {
                        "order": 53,
                        "type": "sequence",
                        "key": "DNA CDR1 Sequence"
                    },
                    {
                        "order": 60,
                        "type": "text",
                        "key": "DNA FR2"
                    },
                    {
                        "order": 61,
                        "type": "sequence",
                        "key": "DNA FR2 Sequence"
                    },
                    {
                        "order": 62,
                        "type": "text",
                        "key": "DNA CDR2"
                    },
                    {
                        "order": 63,
                        "type": "sequence",
                        "key": "DNA CDR2 Sequence"
                    },
                    {
                        "order": 70,
                        "type": "text",
                        "key": "DNA FR3"
                    },
                    {
                        "order": 71,
                        "type": "sequence",
                        "key": "DNA FR3 Sequence"
                    },
                    {
                        "order": 72,
                        "type": "text",
                        "key": "DNA CDR3"
                    },
                    {
                        "order": 73,
                        "type": "sequence",
                        "key": "DNA CDR3 Sequence"
                    },
                    {
                        "order": 80,
                        "type": "text",
                        "key": "DNA FR4"
                    },
                    {
                        "order": 81,
                        "type": "sequence",
                        "key": "DNA FR4 Sequence"
                    }
                ],
                "value": [
                    [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ],
                "key": "DNA Details"
            }
        ],
        "@timestamp": "2023-07-27T20:32:31.495402",
        "id": 0
    },
    {
        "platform_name": "ADI",
        "application_name": "Sequence",
        "entity_id": "adi-8a9f813319deedd5ca502ca4b205d69b",
        "entity_label": "1886.PSGL1.1886.7402.24B1.hIgG1.3_RAS_Ab_01",
        "entity_name": "30362-H",
        "project number": "1886",
        "project name": "PSGL-1",
        "fusion": null,
        "published date": null,
        "domain": "Heavy",
        "species": "Human",
        "request type": null,
        "v gene": null,
        "d gene": null,
        "j gene": null,
        "mi sequence file name": null,
        "strain": null,
        "source": "Recombinant Ab",
        "isotype": null,
        "properties": [
            {
                "value": "ADI",
                "order": 0,
                "type": "text",
                "key": "Platform Name"
            },
            {
                "value": "Sequence",
                "order": 1,
                "type": "text",
                "key": "Application Name"
            },
            {
                "value": "1886.PSGL1.1886.7402.24B1.hIgG1.3_RAS_Ab_01",
                "id": "adi-8a9f813319deedd5ca502ca4b205d69b",
                "order": 2,
                "type": "identifier",
                "rule": "md5(platformName, applicationName, FusionId, Project Number, Material_Id, Chain_id, Sequence_idAA)",
                "key": "ID"
            },
            {
                "order": 3,
                "type": "text",
                "value": "30362-H",
                "key": "Name"
            },
            {
                "order": 9,
                "type": "text",
                "value": "1886",
                "key": "Project Number"
            },
            {
                "order": 10,
                "type": "text",
                "value": "PSGL-1",
                "key": "Project Name"
            },
            {
                "order": 11,
                "type": "text",
                "value": "PSGL1.1886.7402.24B1.hIgG1.3_RAS_Ab_01",
                "key": "Material Name"
            },
            {
                "order": 12,
                "type": "text",
                "key": "Fusion"
            },
            {
                "order": 13,
                "type": "numeric",
                "value": "1886.373055",
                "key": "Full Clone Name"
            },
            {
                "order": 14,
                "type": "date",
                "key": "Published Date"
            },
            {
                "order": 16,
                "type": "text",
                "value": "Heavy",
                "key": "Domain"
            },
            {
                "order": 17,
                "type": "text",
                "value": "Human",
                "key": "Species"
            },
            {
                "order": 18,
                "type": "numeric",
                "value": 30362,
                "key": "Sequence Id AA"
            },
            {
                "order": 19,
                "type": "numeric",
                "key": "Sequence Id NT"
            },
            {
                "order": 20,
                "type": "sequence",
                "value": "EVQLVESGGGLVQPGGSLRLSCAASGFTFSASAMHWVRQASGKGLEWVGRIRSKANSYATVYAASVKGRFTISRDDSKITAYLQMNSLKTEDTAVYYCTRLNWGEGFDYWGPGTLVTVSSASTKGPSVFPLAPSSKSTSGGTAALGCLVKDYFPEPVTVSWNSGALTSGVHTFPAVLQSSGLYSLSSVVTVPSSSLGTQTYICNVNHKPSNTKVDKRVEPKSCDKTHTCPPCPAPEAEGAPSVFLFPPKPKDTLMISRTPEVTCVVVDVSHEDPEVKFNWYVDGVEVHNAKTKPREEQYNSTYRVVSVLTVLHQDWLNGKEYKCKVSNKALPAPIEKTISKAKGQPREPQVYTLPPSREEMTKNQVSLTCLVKGFYPSDIAVEWESNGQPENNYKTTPPVLDSDGSFFLYSKLTVDKSRWQQGNVFSCSVMHEALHNHYTQKSLSLSPG",
                "key": "Sequence"
            },
            {
                "order": 21,
                "type": "sequence",
                "key": "DNA"
            },
            {
                "order": 22,
                "type": "numeric",
                "key": "Master Sequence Request Id"
            },
            {
                "order": 23,
                "type": "numeric",
                "key": "Sequence Request Id"
            },
            {
                "order": 24,
                "type": "text",
                "key": "Request Type"
            },
            {
                "order": 25,
                "type": "text",
                "value": null,
                "key": "V Gene"
            },
            {
                "order": 26,
                "type": "text",
                "value": null,
                "key": "D Gene"
            },
            {
                "order": 27,
                "type": "text",
                "value": null,
                "key": "J Gene"
            },
            {
                "order": 28,
                "type": "text",
                "key": "Mi Sequence File Name"
            },
            {
                "order": 29,
                "type": "numeric",
                "key": "Cluster Size"
            },
            {
                "order": 30,
                "type": "text",
                "value": null,
                "key": "Strain"
            },
            {
                "order": 31,
                "type": "text",
                "value": null,
                "key": "Mouse Ids"
            },
            {
                "order": 32,
                "type": "text",
                "value": "Recombinant Ab",
                "key": "Source"
            },
            {
                "order": 33,
                "type": "text",
                "key": "Isotype"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 1,
                        "type": "sequence",
                        "key": "Mature AA Sequence"
                    },
                    {
                        "order": 10,
                        "type": "text",
                        "key": "FR1 AA"
                    },
                    {
                        "order": 11,
                        "type": "sequence",
                        "key": "FR1 AA Sequence"
                    },
                    {
                        "order": 12,
                        "type": "text",
                        "key": "CDR1 AA"
                    },
                    {
                        "order": 13,
                        "type": "sequence",
                        "key": "CDR1 AA Sequence"
                    },
                    {
                        "order": 20,
                        "type": "text",
                        "key": "FR2 AA"
                    },
                    {
                        "order": 21,
                        "type": "sequence",
                        "key": "FR2 AA Sequence"
                    },
                    {
                        "order": 22,
                        "type": "text",
                        "key": "CDR2 AA"
                    },
                    {
                        "order": 23,
                        "type": "sequence",
                        "key": "CDR2 AA Sequence"
                    },
                    {
                        "order": 30,
                        "type": "text",
                        "key": "FR3 AA"
                    },
                    {
                        "order": 31,
                        "type": "sequence",
                        "key": "FR3 AA Sequence"
                    },
                    {
                        "order": 32,
                        "type": "text",
                        "key": "CDR3 AA"
                    },
                    {
                        "order": 33,
                        "type": "sequence",
                        "key": "CDR3 AA Sequence"
                    },
                    {
                        "order": 40,
                        "type": "text",
                        "key": "FR4 AA"
                    },
                    {
                        "order": 41,
                        "type": "sequence",
                        "key": "FR4 AA Sequence"
                    }
                ],
                "value": [
                    [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ],
                "key": "Sequence Details"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 2,
                        "type": "sequence",
                        "key": "Mature DNA Sequence"
                    },
                    {
                        "order": 50,
                        "type": "text",
                        "key": "DNA FR1"
                    },
                    {
                        "order": 51,
                        "type": "sequence",
                        "key": "DNA FR1 Sequence"
                    },
                    {
                        "order": 52,
                        "type": "text",
                        "key": "DNA CDR1"
                    },
                    {
                        "order": 53,
                        "type": "sequence",
                        "key": "DNA CDR1 Sequence"
                    },
                    {
                        "order": 60,
                        "type": "text",
                        "key": "DNA FR2"
                    },
                    {
                        "order": 61,
                        "type": "sequence",
                        "key": "DNA FR2 Sequence"
                    },
                    {
                        "order": 62,
                        "type": "text",
                        "key": "DNA CDR2"
                    },
                    {
                        "order": 63,
                        "type": "sequence",
                        "key": "DNA CDR2 Sequence"
                    },
                    {
                        "order": 70,
                        "type": "text",
                        "key": "DNA FR3"
                    },
                    {
                        "order": 71,
                        "type": "sequence",
                        "key": "DNA FR3 Sequence"
                    },
                    {
                        "order": 72,
                        "type": "text",
                        "key": "DNA CDR3"
                    },
                    {
                        "order": 73,
                        "type": "sequence",
                        "key": "DNA CDR3 Sequence"
                    },
                    {
                        "order": 80,
                        "type": "text",
                        "key": "DNA FR4"
                    },
                    {
                        "order": 81,
                        "type": "sequence",
                        "key": "DNA FR4 Sequence"
                    }
                ],
                "value": [
                    [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ],
                "key": "DNA Details"
            }
        ],
        "@timestamp": "2023-07-27T20:32:31.648402",
        "id": 1
    },
    {
        "platform_name": "ADI",
        "application_name": "Sequence",
        "entity_id": "adi-17049d4da950a77f5a08eea83d398a20",
        "entity_label": "1887.8430.7A2",
        "entity_name": "5342.VH1",
        "project number": "1887",
        "project name": "SPARC (therapeutic)",
        "fusion": "8430",
        "published date": "2019-09-04T16:20:04.283000+00:00",
        "domain": "Heavy",
        "species": "Chimeric",
        "request type": "NGS",
        "v gene": [
            "IGHV3",
            "3-30-5",
            "IGHV3-30-5*01",
            ""
        ],
        "d gene": null,
        "j gene": [
            "IGHJ6",
            "6",
            "IGHJ6*02",
            ""
        ],
        "mi sequence file name": "1228_Box1228_CHM_LCReport.csv",
        "strain": "[hVDJ2:03/hKAPPA1:01] [J/K]",
        "source": "Hybridoma Ab",
        "isotype": null,
        "properties": [
            {
                "value": "ADI",
                "order": 0,
                "type": "text",
                "key": "Platform Name"
            },
            {
                "value": "Sequence",
                "order": 1,
                "type": "text",
                "key": "Application Name"
            },
            {
                "value": "1887.8430.7A2",
                "id": "adi-17049d4da950a77f5a08eea83d398a20",
                "order": 2,
                "type": "identifier",
                "rule": "md5(platformName, applicationName, FusionId, Project Number, Material_Id, Chain_id, Sequence_idAA)",
                "key": "ID"
            },
            {
                "order": 3,
                "type": "text",
                "value": "5342.VH1",
                "key": "Name"
            },
            {
                "order": 9,
                "type": "text",
                "value": "1887",
                "key": "Project Number"
            },
            {
                "order": 10,
                "type": "text",
                "value": "SPARC (therapeutic)",
                "key": "Project Name"
            },
            {
                "order": 11,
                "type": "text",
                "value": "7A2",
                "key": "Material Name"
            },
            {
                "order": 12,
                "type": "text",
                "value": "8430",
                "key": "Fusion"
            },
            {
                "order": 13,
                "type": "numeric",
                "value": "1887.8430.369658",
                "key": "Full Clone Name"
            },
            {
                "order": 14,
                "type": "date",
                "value": "2019-09-04T16:20:04.283Z",
                "key": "Published Date"
            },
            {
                "order": 16,
                "type": "text",
                "value": "Heavy",
                "key": "Domain"
            },
            {
                "order": 17,
                "type": "text",
                "value": "Chimeric",
                "key": "Species"
            },
            {
                "order": 18,
                "type": "numeric",
                "value": 42923,
                "key": "Sequence Id AA"
            },
            {
                "order": 19,
                "type": "numeric",
                "value": 42922,
                "key": "Sequence Id NT"
            },
            {
                "order": 20,
                "type": "sequence",
                "value": "EVQLVESGGGVVQPGRSLRLSCAASGFTFSSYGMHWVRQAPGKGLEWVAVISYDGSNKYYTDSVKGRFTISRDNSKNTLYLQMNSLRAEDTAVYYCAKEGEAARPGYYGMDVWGQGTTVTVSS",
                "key": "Sequence"
            },
            {
                "order": 21,
                "type": "sequence",
                "value": "GAGGTGCAGCTGGTGGAGTCTGGGGGAGGCGTGGTCCAGCCTGGGAGGTCCCTGAGACTCTCCTGTGCAGCCTCTGGATTCACCTTCAGTAGCTATGGCATGCACTGGGTCCGCCAGGCTCCAGGCAAGGGGCTGGAGTGGGTGGCAGTTATATCATATGATGGAAGTAATAAATACTATACAGACTCCGTGAAGGGCCGATTCACCATCTCCAGAGACAATTCCAAGAACACGCTGTATCTGCAAATGAACAGCCTGAGAGCTGAGGACACGGCTGTGTATTACTGTGCGAAAGAGGGAGAAGCAGCTCGTCCGGGCTACTACGGCATGGACGTCTGGGGCCAAGGGACCACGGTCACCGTCTCCTCA",
                "key": "DNA"
            },
            {
                "order": 22,
                "type": "numeric",
                "value": 1228,
                "key": "Master Sequence Request Id"
            },
            {
                "order": 23,
                "type": "numeric",
                "value": 5342,
                "key": "Sequence Request Id"
            },
            {
                "order": 24,
                "type": "text",
                "value": "NGS",
                "key": "Request Type"
            },
            {
                "order": 25,
                "type": "text",
                "value": [
                    "IGHV3",
                    "3-30-5",
                    "IGHV3-30-5*01",
                    ""
                ],
                "key": "V Gene"
            },
            {
                "order": 26,
                "type": "text",
                "value": null,
                "key": "D Gene"
            },
            {
                "order": 27,
                "type": "text",
                "value": [
                    "IGHJ6",
                    "6",
                    "IGHJ6*02",
                    ""
                ],
                "key": "J Gene"
            },
            {
                "order": 28,
                "type": "text",
                "value": "1228_Box1228_CHM_LCReport.csv",
                "key": "Mi Sequence File Name"
            },
            {
                "order": 29,
                "type": "numeric",
                "value": "2449 ",
                "key": "Cluster Size"
            },
            {
                "order": 30,
                "type": "text",
                "value": "[hVDJ2:03/hKAPPA1:01] [J/K]",
                "key": "Strain"
            },
            {
                "order": 31,
                "type": "text",
                "value": "518990,518991,519090",
                "key": "Mouse Ids"
            },
            {
                "order": 32,
                "type": "text",
                "value": "Hybridoma Ab",
                "key": "Source"
            },
            {
                "order": 33,
                "type": "text",
                "key": "Isotype"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 1,
                        "type": "sequence",
                        "key": "Mature AA Sequence"
                    },
                    {
                        "order": 10,
                        "type": "text",
                        "key": "FR1 AA"
                    },
                    {
                        "order": 11,
                        "type": "sequence",
                        "key": "FR1 AA Sequence"
                    },
                    {
                        "order": 12,
                        "type": "text",
                        "key": "CDR1 AA"
                    },
                    {
                        "order": 13,
                        "type": "sequence",
                        "key": "CDR1 AA Sequence"
                    },
                    {
                        "order": 20,
                        "type": "text",
                        "key": "FR2 AA"
                    },
                    {
                        "order": 21,
                        "type": "sequence",
                        "key": "FR2 AA Sequence"
                    },
                    {
                        "order": 22,
                        "type": "text",
                        "key": "CDR2 AA"
                    },
                    {
                        "order": 23,
                        "type": "sequence",
                        "key": "CDR2 AA Sequence"
                    },
                    {
                        "order": 30,
                        "type": "text",
                        "key": "FR3 AA"
                    },
                    {
                        "order": 31,
                        "type": "sequence",
                        "key": "FR3 AA Sequence"
                    },
                    {
                        "order": 32,
                        "type": "text",
                        "key": "CDR3 AA"
                    },
                    {
                        "order": 33,
                        "type": "sequence",
                        "key": "CDR3 AA Sequence"
                    },
                    {
                        "order": 40,
                        "type": "text",
                        "key": "FR4 AA"
                    },
                    {
                        "order": 41,
                        "type": "sequence",
                        "key": "FR4 AA Sequence"
                    }
                ],
                "value": [
                    [
                        "EVQLVESGGGVVQPGRSLRLSCAASGFTFSSYGMHWVRQAPGKGLEWVAVISYDGSNKYYTDSVKGRFTISRDNSKNTLYLQMNSLRAEDTAVYYCAKEGEAARPGYYGMDVWGQGTTVTVSS",
                        "1-30",
                        "EVQLVESGGGVVQPGRSLRLSCAASGFTFS",
                        "31-35",
                        "SYGMH",
                        "36-49",
                        "WVRQAPGKGLEWVA",
                        "50-66",
                        "VISYDGSNKYYTDSVKG",
                        "67-98",
                        "RFTISRDNSKNTLYLQMNSLRAEDTAVYYCAK",
                        "99-112",
                        "EGEAARPGYYGMDV",
                        "113-123",
                        "WGQGTTVTVSS"
                    ]
                ],
                "key": "Sequence Details"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 2,
                        "type": "sequence",
                        "key": "Mature DNA Sequence"
                    },
                    {
                        "order": 50,
                        "type": "text",
                        "key": "DNA FR1"
                    },
                    {
                        "order": 51,
                        "type": "sequence",
                        "key": "DNA FR1 Sequence"
                    },
                    {
                        "order": 52,
                        "type": "text",
                        "key": "DNA CDR1"
                    },
                    {
                        "order": 53,
                        "type": "sequence",
                        "key": "DNA CDR1 Sequence"
                    },
                    {
                        "order": 60,
                        "type": "text",
                        "key": "DNA FR2"
                    },
                    {
                        "order": 61,
                        "type": "sequence",
                        "key": "DNA FR2 Sequence"
                    },
                    {
                        "order": 62,
                        "type": "text",
                        "key": "DNA CDR2"
                    },
                    {
                        "order": 63,
                        "type": "sequence",
                        "key": "DNA CDR2 Sequence"
                    },
                    {
                        "order": 70,
                        "type": "text",
                        "key": "DNA FR3"
                    },
                    {
                        "order": 71,
                        "type": "sequence",
                        "key": "DNA FR3 Sequence"
                    },
                    {
                        "order": 72,
                        "type": "text",
                        "key": "DNA CDR3"
                    },
                    {
                        "order": 73,
                        "type": "sequence",
                        "key": "DNA CDR3 Sequence"
                    },
                    {
                        "order": 80,
                        "type": "text",
                        "key": "DNA FR4"
                    },
                    {
                        "order": 81,
                        "type": "sequence",
                        "key": "DNA FR4 Sequence"
                    }
                ],
                "value": [
                    [
                        "GAGGTGCAGCTGGTGGAGTCTGGGGGAGGCGTGGTCCAGCCTGGGAGGTCCCTGAGACTCTCCTGTGCAGCCTCTGGATTCACCTTCAGTAGCTATGGCATGCACTGGGTCCGCCAGGCTCCAGGCAAGGGGCTGGAGTGGGTGGCAGTTATATCATATGATGGAAGTAATAAATACTATACAGACTCCGTGAAGGGCCGATTCACCATCTCCAGAGACAATTCCAAGAACACGCTGTATCTGCAAATGAACAGCCTGAGAGCTGAGGACACGGCTGTGTATTACTGTGCGAAAGAGGGAGAAGCAGCTCGTCCGGGCTACTACGGCATGGACGTCTGGGGCCAAGGGACCACGGTCACCGTCTCCTCA",
                        "1-90",
                        "GAGGTGCAGCTGGTGGAGTCTGGGGGAGGCGTGGTCCAGCCTGGGAGGTCCCTGAGACTCTCCTGTGCAGCCTCTGGATTCACCTTCAGT",
                        "91-105",
                        "AGCTATGGCATGCAC",
                        "106-147",
                        "TGGGTCCGCCAGGCTCCAGGCAAGGGGCTGGAGTGGGTGGCA",
                        "148-198",
                        "GTTATATCATATGATGGAAGTAATAAATACTATACAGACTCCGTGAAGGGC",
                        "199-294",
                        "CGATTCACCATCTCCAGAGACAATTCCAAGAACACGCTGTATCTGCAAATGAACAGCCTGAGAGCTGAGGACACGGCTGTGTATTACTGTGCGAAA",
                        "295-336",
                        "GAGGGAGAAGCAGCTCGTCCGGGCTACTACGGCATGGACGTC",
                        "337-369",
                        "TGGGGCCAAGGGACCACGGTCACCGTCTCCTCA"
                    ]
                ],
                "key": "DNA Details"
            }
        ],
        "@timestamp": "2023-07-27T20:32:32.706406",
        "id": 2
    },
    {
        "platform_name": "ADI",
        "application_name": "Sequence",
        "entity_id": "adi-72caff766894ac71c4f0e90904e31c70",
        "entity_label": "1890.CD226.18-g1.3f.E345R_RAS_Ab_01",
        "entity_name": "30385-K",
        "project number": "1890",
        "project name": "DNAM (CD226)",
        "fusion": null,
        "published date": null,
        "domain": "KappaLight",
        "species": "Human",
        "request type": null,
        "v gene": null,
        "d gene": null,
        "j gene": null,
        "mi sequence file name": null,
        "strain": null,
        "source": "Recombinant Ab",
        "isotype": null,
        "properties": [
            {
                "value": "ADI",
                "order": 0,
                "type": "text",
                "key": "Platform Name"
            },
            {
                "value": "Sequence",
                "order": 1,
                "type": "text",
                "key": "Application Name"
            },
            {
                "value": "1890.CD226.18-g1.3f.E345R_RAS_Ab_01",
                "id": "adi-72caff766894ac71c4f0e90904e31c70",
                "order": 2,
                "type": "identifier",
                "rule": "md5(platformName, applicationName, FusionId, Project Number, Material_Id, Chain_id, Sequence_idAA)",
                "key": "ID"
            },
            {
                "order": 3,
                "type": "text",
                "value": "30385-K",
                "key": "Name"
            },
            {
                "order": 9,
                "type": "text",
                "value": "1890",
                "key": "Project Number"
            },
            {
                "order": 10,
                "type": "text",
                "value": "DNAM (CD226)",
                "key": "Project Name"
            },
            {
                "order": 11,
                "type": "text",
                "value": "CD226.18-g1.3f.E345R_RAS_Ab_01",
                "key": "Material Name"
            },
            {
                "order": 12,
                "type": "text",
                "key": "Fusion"
            },
            {
                "order": 13,
                "type": "numeric",
                "value": "1890.373493",
                "key": "Full Clone Name"
            },
            {
                "order": 14,
                "type": "date",
                "key": "Published Date"
            },
            {
                "order": 16,
                "type": "text",
                "value": "KappaLight",
                "key": "Domain"
            },
            {
                "order": 17,
                "type": "text",
                "value": "Human",
                "key": "Species"
            },
            {
                "order": 18,
                "type": "numeric",
                "value": 30385,
                "key": "Sequence Id AA"
            },
            {
                "order": 19,
                "type": "numeric",
                "key": "Sequence Id NT"
            },
            {
                "order": 20,
                "type": "sequence",
                "value": "DILLTQSPAILSVSPGERVSFSCRASQSIGTSIHWFQQRTNGSPRLLIKYASESISGIPSRFSGSGSGTDFTLSINSVESEDTADYYCQQSNRWPLTFGTGTKLELKRTVAAPSVFIFPPSDEQLKSGTASVVCLLNNFYPREAKVQWKVDNALQSGNSQESVTEQDSKDSTYSLSSTLTLSKADYEKHKVYACEVTHQGLSSPVTKSFNRGEC",
                "key": "Sequence"
            },
            {
                "order": 21,
                "type": "sequence",
                "key": "DNA"
            },
            {
                "order": 22,
                "type": "numeric",
                "key": "Master Sequence Request Id"
            },
            {
                "order": 23,
                "type": "numeric",
                "key": "Sequence Request Id"
            },
            {
                "order": 24,
                "type": "text",
                "key": "Request Type"
            },
            {
                "order": 25,
                "type": "text",
                "value": null,
                "key": "V Gene"
            },
            {
                "order": 26,
                "type": "text",
                "value": null,
                "key": "D Gene"
            },
            {
                "order": 27,
                "type": "text",
                "value": null,
                "key": "J Gene"
            },
            {
                "order": 28,
                "type": "text",
                "key": "Mi Sequence File Name"
            },
            {
                "order": 29,
                "type": "numeric",
                "key": "Cluster Size"
            },
            {
                "order": 30,
                "type": "text",
                "value": null,
                "key": "Strain"
            },
            {
                "order": 31,
                "type": "text",
                "value": null,
                "key": "Mouse Ids"
            },
            {
                "order": 32,
                "type": "text",
                "value": "Recombinant Ab",
                "key": "Source"
            },
            {
                "order": 33,
                "type": "text",
                "key": "Isotype"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 1,
                        "type": "sequence",
                        "key": "Mature AA Sequence"
                    },
                    {
                        "order": 10,
                        "type": "text",
                        "key": "FR1 AA"
                    },
                    {
                        "order": 11,
                        "type": "sequence",
                        "key": "FR1 AA Sequence"
                    },
                    {
                        "order": 12,
                        "type": "text",
                        "key": "CDR1 AA"
                    },
                    {
                        "order": 13,
                        "type": "sequence",
                        "key": "CDR1 AA Sequence"
                    },
                    {
                        "order": 20,
                        "type": "text",
                        "key": "FR2 AA"
                    },
                    {
                        "order": 21,
                        "type": "sequence",
                        "key": "FR2 AA Sequence"
                    },
                    {
                        "order": 22,
                        "type": "text",
                        "key": "CDR2 AA"
                    },
                    {
                        "order": 23,
                        "type": "sequence",
                        "key": "CDR2 AA Sequence"
                    },
                    {
                        "order": 30,
                        "type": "text",
                        "key": "FR3 AA"
                    },
                    {
                        "order": 31,
                        "type": "sequence",
                        "key": "FR3 AA Sequence"
                    },
                    {
                        "order": 32,
                        "type": "text",
                        "key": "CDR3 AA"
                    },
                    {
                        "order": 33,
                        "type": "sequence",
                        "key": "CDR3 AA Sequence"
                    },
                    {
                        "order": 40,
                        "type": "text",
                        "key": "FR4 AA"
                    },
                    {
                        "order": 41,
                        "type": "sequence",
                        "key": "FR4 AA Sequence"
                    }
                ],
                "value": [
                    [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ],
                "key": "Sequence Details"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 2,
                        "type": "sequence",
                        "key": "Mature DNA Sequence"
                    },
                    {
                        "order": 50,
                        "type": "text",
                        "key": "DNA FR1"
                    },
                    {
                        "order": 51,
                        "type": "sequence",
                        "key": "DNA FR1 Sequence"
                    },
                    {
                        "order": 52,
                        "type": "text",
                        "key": "DNA CDR1"
                    },
                    {
                        "order": 53,
                        "type": "sequence",
                        "key": "DNA CDR1 Sequence"
                    },
                    {
                        "order": 60,
                        "type": "text",
                        "key": "DNA FR2"
                    },
                    {
                        "order": 61,
                        "type": "sequence",
                        "key": "DNA FR2 Sequence"
                    },
                    {
                        "order": 62,
                        "type": "text",
                        "key": "DNA CDR2"
                    },
                    {
                        "order": 63,
                        "type": "sequence",
                        "key": "DNA CDR2 Sequence"
                    },
                    {
                        "order": 70,
                        "type": "text",
                        "key": "DNA FR3"
                    },
                    {
                        "order": 71,
                        "type": "sequence",
                        "key": "DNA FR3 Sequence"
                    },
                    {
                        "order": 72,
                        "type": "text",
                        "key": "DNA CDR3"
                    },
                    {
                        "order": 73,
                        "type": "sequence",
                        "key": "DNA CDR3 Sequence"
                    },
                    {
                        "order": 80,
                        "type": "text",
                        "key": "DNA FR4"
                    },
                    {
                        "order": 81,
                        "type": "sequence",
                        "key": "DNA FR4 Sequence"
                    }
                ],
                "value": [
                    [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ],
                "key": "DNA Details"
            }
        ],
        "@timestamp": "2023-07-27T20:32:32.910405",
        "id": 3
    },
    {
        "platform_name": "ADI",
        "application_name": "Sequence",
        "entity_id": "adi-311ae3758d3e5b37577df2f6ffd73cd7",
        "entity_label": "1481.CD155.1-g1.3f_RAS_Ab_01",
        "entity_name": "30386-H",
        "project number": "1481",
        "project name": "CD155/PVR",
        "fusion": null,
        "published date": null,
        "domain": "Heavy",
        "species": "Human",
        "request type": null,
        "v gene": null,
        "d gene": null,
        "j gene": null,
        "mi sequence file name": null,
        "strain": null,
        "source": "Recombinant Ab",
        "isotype": null,
        "properties": [
            {
                "value": "ADI",
                "order": 0,
                "type": "text",
                "key": "Platform Name"
            },
            {
                "value": "Sequence",
                "order": 1,
                "type": "text",
                "key": "Application Name"
            },
            {
                "value": "1481.CD155.1-g1.3f_RAS_Ab_01",
                "id": "adi-311ae3758d3e5b37577df2f6ffd73cd7",
                "order": 2,
                "type": "identifier",
                "rule": "md5(platformName, applicationName, FusionId, Project Number, Material_Id, Chain_id, Sequence_idAA)",
                "key": "ID"
            },
            {
                "order": 3,
                "type": "text",
                "value": "30386-H",
                "key": "Name"
            },
            {
                "order": 9,
                "type": "text",
                "value": "1481",
                "key": "Project Number"
            },
            {
                "order": 10,
                "type": "text",
                "value": "CD155/PVR",
                "key": "Project Name"
            },
            {
                "order": 11,
                "type": "text",
                "value": "CD155.1-g1.3f_RAS_Ab_01",
                "key": "Material Name"
            },
            {
                "order": 12,
                "type": "text",
                "key": "Fusion"
            },
            {
                "order": 13,
                "type": "numeric",
                "value": "1481.373494",
                "key": "Full Clone Name"
            },
            {
                "order": 14,
                "type": "date",
                "key": "Published Date"
            },
            {
                "order": 16,
                "type": "text",
                "value": "Heavy",
                "key": "Domain"
            },
            {
                "order": 17,
                "type": "text",
                "value": "Human",
                "key": "Species"
            },
            {
                "order": 18,
                "type": "numeric",
                "value": 30386,
                "key": "Sequence Id AA"
            },
            {
                "order": 19,
                "type": "numeric",
                "key": "Sequence Id NT"
            },
            {
                "order": 20,
                "type": "sequence",
                "value": "QVQLQQSGADLVRPGTSVKISCKASGYTFTNYWLGWVKQRPGHGLEWIGDIYPGGGYTNYNEKFKGKATLTADTSSSTAYMQLISLTSEDSAVYFCARYDYGGVLDYWGQGTTLTVSSASTKGPSVFPLAPSSKSTSGGTAALGCLVKDYFPEPVTVSWNSGALTSGVHTFPAVLQSSGLYSLSSVVTVPSSSLGTQTYICNVNHKPSNTKVDKRVEPKSCDKTHTCPPCPAPEAEGAPSVFLFPPKPKDTLMISRTPEVTCVVVDVSHEDPEVKFNWYVDGVEVHNAKTKPREEQYNSTYRVVSVLTVLHQDWLNGKEYKCKVSNKALPAPIEKTISKAKGQPREPQVYTLPPSREEMTKNQVSLTCLVKGFYPSDIAVEWESNGQPENNYKTTPPVLDSDGSFFLYSKLTVDKSRWQQGNVFSCSVMHEALHNHYTQKSLSLSPG",
                "key": "Sequence"
            },
            {
                "order": 21,
                "type": "sequence",
                "key": "DNA"
            },
            {
                "order": 22,
                "type": "numeric",
                "key": "Master Sequence Request Id"
            },
            {
                "order": 23,
                "type": "numeric",
                "key": "Sequence Request Id"
            },
            {
                "order": 24,
                "type": "text",
                "key": "Request Type"
            },
            {
                "order": 25,
                "type": "text",
                "value": null,
                "key": "V Gene"
            },
            {
                "order": 26,
                "type": "text",
                "value": null,
                "key": "D Gene"
            },
            {
                "order": 27,
                "type": "text",
                "value": null,
                "key": "J Gene"
            },
            {
                "order": 28,
                "type": "text",
                "key": "Mi Sequence File Name"
            },
            {
                "order": 29,
                "type": "numeric",
                "key": "Cluster Size"
            },
            {
                "order": 30,
                "type": "text",
                "value": null,
                "key": "Strain"
            },
            {
                "order": 31,
                "type": "text",
                "value": null,
                "key": "Mouse Ids"
            },
            {
                "order": 32,
                "type": "text",
                "value": "Recombinant Ab",
                "key": "Source"
            },
            {
                "order": 33,
                "type": "text",
                "key": "Isotype"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 1,
                        "type": "sequence",
                        "key": "Mature AA Sequence"
                    },
                    {
                        "order": 10,
                        "type": "text",
                        "key": "FR1 AA"
                    },
                    {
                        "order": 11,
                        "type": "sequence",
                        "key": "FR1 AA Sequence"
                    },
                    {
                        "order": 12,
                        "type": "text",
                        "key": "CDR1 AA"
                    },
                    {
                        "order": 13,
                        "type": "sequence",
                        "key": "CDR1 AA Sequence"
                    },
                    {
                        "order": 20,
                        "type": "text",
                        "key": "FR2 AA"
                    },
                    {
                        "order": 21,
                        "type": "sequence",
                        "key": "FR2 AA Sequence"
                    },
                    {
                        "order": 22,
                        "type": "text",
                        "key": "CDR2 AA"
                    },
                    {
                        "order": 23,
                        "type": "sequence",
                        "key": "CDR2 AA Sequence"
                    },
                    {
                        "order": 30,
                        "type": "text",
                        "key": "FR3 AA"
                    },
                    {
                        "order": 31,
                        "type": "sequence",
                        "key": "FR3 AA Sequence"
                    },
                    {
                        "order": 32,
                        "type": "text",
                        "key": "CDR3 AA"
                    },
                    {
                        "order": 33,
                        "type": "sequence",
                        "key": "CDR3 AA Sequence"
                    },
                    {
                        "order": 40,
                        "type": "text",
                        "key": "FR4 AA"
                    },
                    {
                        "order": 41,
                        "type": "sequence",
                        "key": "FR4 AA Sequence"
                    }
                ],
                "value": [
                    [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ],
                "key": "Sequence Details"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 2,
                        "type": "sequence",
                        "key": "Mature DNA Sequence"
                    },
                    {
                        "order": 50,
                        "type": "text",
                        "key": "DNA FR1"
                    },
                    {
                        "order": 51,
                        "type": "sequence",
                        "key": "DNA FR1 Sequence"
                    },
                    {
                        "order": 52,
                        "type": "text",
                        "key": "DNA CDR1"
                    },
                    {
                        "order": 53,
                        "type": "sequence",
                        "key": "DNA CDR1 Sequence"
                    },
                    {
                        "order": 60,
                        "type": "text",
                        "key": "DNA FR2"
                    },
                    {
                        "order": 61,
                        "type": "sequence",
                        "key": "DNA FR2 Sequence"
                    },
                    {
                        "order": 62,
                        "type": "text",
                        "key": "DNA CDR2"
                    },
                    {
                        "order": 63,
                        "type": "sequence",
                        "key": "DNA CDR2 Sequence"
                    },
                    {
                        "order": 70,
                        "type": "text",
                        "key": "DNA FR3"
                    },
                    {
                        "order": 71,
                        "type": "sequence",
                        "key": "DNA FR3 Sequence"
                    },
                    {
                        "order": 72,
                        "type": "text",
                        "key": "DNA CDR3"
                    },
                    {
                        "order": 73,
                        "type": "sequence",
                        "key": "DNA CDR3 Sequence"
                    },
                    {
                        "order": 80,
                        "type": "text",
                        "key": "DNA FR4"
                    },
                    {
                        "order": 81,
                        "type": "sequence",
                        "key": "DNA FR4 Sequence"
                    }
                ],
                "value": [
                    [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ],
                "key": "DNA Details"
            }
        ],
        "@timestamp": "2023-07-27T20:32:32.917445",
        "id": 4
    },
    {
        "platform_name": "ADI",
        "application_name": "Sequence",
        "entity_id": "adi-5f5a9406b81c2c40ffb7f54d5643232a",
        "entity_label": "1495.Tim3.18 hG1.3_Ab",
        "entity_name": "30412-H",
        "project number": "1495",
        "project name": "TIM-3 (BMS)",
        "fusion": null,
        "published date": null,
        "domain": "Heavy",
        "species": "Human",
        "request type": null,
        "v gene": null,
        "d gene": null,
        "j gene": null,
        "mi sequence file name": null,
        "strain": null,
        "source": "Recombinant Ab",
        "isotype": null,
        "properties": [
            {
                "value": "ADI",
                "order": 0,
                "type": "text",
                "key": "Platform Name"
            },
            {
                "value": "Sequence",
                "order": 1,
                "type": "text",
                "key": "Application Name"
            },
            {
                "value": "1495.Tim3.18 hG1.3_Ab",
                "id": "adi-5f5a9406b81c2c40ffb7f54d5643232a",
                "order": 2,
                "type": "identifier",
                "rule": "md5(platformName, applicationName, FusionId, Project Number, Material_Id, Chain_id, Sequence_idAA)",
                "key": "ID"
            },
            {
                "order": 3,
                "type": "text",
                "value": "30412-H",
                "key": "Name"
            },
            {
                "order": 9,
                "type": "text",
                "value": "1495",
                "key": "Project Number"
            },
            {
                "order": 10,
                "type": "text",
                "value": "TIM-3 (BMS)",
                "key": "Project Name"
            },
            {
                "order": 11,
                "type": "text",
                "value": "Tim3.18 hG1.3_Ab",
                "key": "Material Name"
            },
            {
                "order": 12,
                "type": "text",
                "key": "Fusion"
            },
            {
                "order": 13,
                "type": "numeric",
                "value": "1495.372156",
                "key": "Full Clone Name"
            },
            {
                "order": 14,
                "type": "date",
                "key": "Published Date"
            },
            {
                "order": 16,
                "type": "text",
                "value": "Heavy",
                "key": "Domain"
            },
            {
                "order": 17,
                "type": "text",
                "value": "Human",
                "key": "Species"
            },
            {
                "order": 18,
                "type": "numeric",
                "value": 30412,
                "key": "Sequence Id AA"
            },
            {
                "order": 19,
                "type": "numeric",
                "key": "Sequence Id NT"
            },
            {
                "order": 20,
                "type": "sequence",
                "value": "QLQLQESGPGLVKPSETLSLTCTVSGGSISSRSYYWGWIRQPPGKGLEWIGSIYYSGFTYYQPSLKSRVTISVDTSKNQFSLKLSSVTAADTAVYYCATGGPYGDYAHWFEPWGQGTLVTVSSASTKGPSVFPLAPSSKSTSGGTAALGCLVKDYFPEPVTVSWNSGALTSGVHTFPAVLQSSGLYSLSSVVTVPSSSLGTQTYICNVNHKPSNTKVDKRVEPKSCDKTHTCPPCPAPEAEGAPSVFLFPPKPKDTLMISRTPEVTCVVVDVSHEDPEVKFNWYVDGVEVHNAKTKPREEQYNSTYRVVSVLTVLHQDWLNGKEYKCKVSNKALPAPIEKTISKAKGQPREPQVYTLPPSREEMTKNQVSLTCLVKGFYPSDIAVEWESNGQPENNYKTTPPVLDSDGSFFLYSKLTVDKSRWQQGNVFSCSVMHEALHNHYTQKSLSLSPG",
                "key": "Sequence"
            },
            {
                "order": 21,
                "type": "sequence",
                "key": "DNA"
            },
            {
                "order": 22,
                "type": "numeric",
                "key": "Master Sequence Request Id"
            },
            {
                "order": 23,
                "type": "numeric",
                "key": "Sequence Request Id"
            },
            {
                "order": 24,
                "type": "text",
                "key": "Request Type"
            },
            {
                "order": 25,
                "type": "text",
                "value": null,
                "key": "V Gene"
            },
            {
                "order": 26,
                "type": "text",
                "value": null,
                "key": "D Gene"
            },
            {
                "order": 27,
                "type": "text",
                "value": null,
                "key": "J Gene"
            },
            {
                "order": 28,
                "type": "text",
                "key": "Mi Sequence File Name"
            },
            {
                "order": 29,
                "type": "numeric",
                "key": "Cluster Size"
            },
            {
                "order": 30,
                "type": "text",
                "value": null,
                "key": "Strain"
            },
            {
                "order": 31,
                "type": "text",
                "value": null,
                "key": "Mouse Ids"
            },
            {
                "order": 32,
                "type": "text",
                "value": "Recombinant Ab",
                "key": "Source"
            },
            {
                "order": 33,
                "type": "text",
                "key": "Isotype"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 1,
                        "type": "sequence",
                        "key": "Mature AA Sequence"
                    },
                    {
                        "order": 10,
                        "type": "text",
                        "key": "FR1 AA"
                    },
                    {
                        "order": 11,
                        "type": "sequence",
                        "key": "FR1 AA Sequence"
                    },
                    {
                        "order": 12,
                        "type": "text",
                        "key": "CDR1 AA"
                    },
                    {
                        "order": 13,
                        "type": "sequence",
                        "key": "CDR1 AA Sequence"
                    },
                    {
                        "order": 20,
                        "type": "text",
                        "key": "FR2 AA"
                    },
                    {
                        "order": 21,
                        "type": "sequence",
                        "key": "FR2 AA Sequence"
                    },
                    {
                        "order": 22,
                        "type": "text",
                        "key": "CDR2 AA"
                    },
                    {
                        "order": 23,
                        "type": "sequence",
                        "key": "CDR2 AA Sequence"
                    },
                    {
                        "order": 30,
                        "type": "text",
                        "key": "FR3 AA"
                    },
                    {
                        "order": 31,
                        "type": "sequence",
                        "key": "FR3 AA Sequence"
                    },
                    {
                        "order": 32,
                        "type": "text",
                        "key": "CDR3 AA"
                    },
                    {
                        "order": 33,
                        "type": "sequence",
                        "key": "CDR3 AA Sequence"
                    },
                    {
                        "order": 40,
                        "type": "text",
                        "key": "FR4 AA"
                    },
                    {
                        "order": 41,
                        "type": "sequence",
                        "key": "FR4 AA Sequence"
                    }
                ],
                "value": [
                    [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ],
                "key": "Sequence Details"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 2,
                        "type": "sequence",
                        "key": "Mature DNA Sequence"
                    },
                    {
                        "order": 50,
                        "type": "text",
                        "key": "DNA FR1"
                    },
                    {
                        "order": 51,
                        "type": "sequence",
                        "key": "DNA FR1 Sequence"
                    },
                    {
                        "order": 52,
                        "type": "text",
                        "key": "DNA CDR1"
                    },
                    {
                        "order": 53,
                        "type": "sequence",
                        "key": "DNA CDR1 Sequence"
                    },
                    {
                        "order": 60,
                        "type": "text",
                        "key": "DNA FR2"
                    },
                    {
                        "order": 61,
                        "type": "sequence",
                        "key": "DNA FR2 Sequence"
                    },
                    {
                        "order": 62,
                        "type": "text",
                        "key": "DNA CDR2"
                    },
                    {
                        "order": 63,
                        "type": "sequence",
                        "key": "DNA CDR2 Sequence"
                    },
                    {
                        "order": 70,
                        "type": "text",
                        "key": "DNA FR3"
                    },
                    {
                        "order": 71,
                        "type": "sequence",
                        "key": "DNA FR3 Sequence"
                    },
                    {
                        "order": 72,
                        "type": "text",
                        "key": "DNA CDR3"
                    },
                    {
                        "order": 73,
                        "type": "sequence",
                        "key": "DNA CDR3 Sequence"
                    },
                    {
                        "order": 80,
                        "type": "text",
                        "key": "DNA FR4"
                    },
                    {
                        "order": 81,
                        "type": "sequence",
                        "key": "DNA FR4 Sequence"
                    }
                ],
                "value": [
                    [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ],
                "key": "DNA Details"
            }
        ],
        "@timestamp": "2023-07-27T20:32:32.980402",
        "id": 5
    },
    {
        "platform_name": "ADI",
        "application_name": "Sequence",
        "entity_id": "adi-6ab92aa8e3e3af2692831dae0252ce75",
        "entity_label": "1495.Tesaro hG4_Ab",
        "entity_name": "30420-K",
        "project number": "1495",
        "project name": "TIM-3 (BMS)",
        "fusion": null,
        "published date": null,
        "domain": "KappaLight",
        "species": "Human",
        "request type": null,
        "v gene": null,
        "d gene": null,
        "j gene": null,
        "mi sequence file name": null,
        "strain": null,
        "source": "Recombinant Ab",
        "isotype": null,
        "properties": [
            {
                "value": "ADI",
                "order": 0,
                "type": "text",
                "key": "Platform Name"
            },
            {
                "value": "Sequence",
                "order": 1,
                "type": "text",
                "key": "Application Name"
            },
            {
                "value": "1495.Tesaro hG4_Ab",
                "id": "adi-6ab92aa8e3e3af2692831dae0252ce75",
                "order": 2,
                "type": "identifier",
                "rule": "md5(platformName, applicationName, FusionId, Project Number, Material_Id, Chain_id, Sequence_idAA)",
                "key": "ID"
            },
            {
                "order": 3,
                "type": "text",
                "value": "30420-K",
                "key": "Name"
            },
            {
                "order": 9,
                "type": "text",
                "value": "1495",
                "key": "Project Number"
            },
            {
                "order": 10,
                "type": "text",
                "value": "TIM-3 (BMS)",
                "key": "Project Name"
            },
            {
                "order": 11,
                "type": "text",
                "value": "Tesaro hG4_Ab",
                "key": "Material Name"
            },
            {
                "order": 12,
                "type": "text",
                "key": "Fusion"
            },
            {
                "order": 13,
                "type": "numeric",
                "value": "1495.372160",
                "key": "Full Clone Name"
            },
            {
                "order": 14,
                "type": "date",
                "key": "Published Date"
            },
            {
                "order": 16,
                "type": "text",
                "value": "KappaLight",
                "key": "Domain"
            },
            {
                "order": 17,
                "type": "text",
                "value": "Human",
                "key": "Species"
            },
            {
                "order": 18,
                "type": "numeric",
                "value": 30420,
                "key": "Sequence Id AA"
            },
            {
                "order": 19,
                "type": "numeric",
                "key": "Sequence Id NT"
            },
            {
                "order": 20,
                "type": "sequence",
                "value": "DIQMTQSPSSLSASVGDRVTITCRASQSIRRYLNWYHQKPGKAPKLLIYGASTLQSGVPSRFSGSGSGTDFTLTISSLQPEDFAVYYCQQSHSAPLTFGGGTKVEIKRTVAAPSVFIFPPSDEQLKSGTASVVCLLNNFYPREAKVQWKVDNALQSGNSQESVTEQDSKDSTYSLSSTLTLSKADYEKHKVYACEVTHQGLSSPVTKSFNRGEC",
                "key": "Sequence"
            },
            {
                "order": 21,
                "type": "sequence",
                "key": "DNA"
            },
            {
                "order": 22,
                "type": "numeric",
                "key": "Master Sequence Request Id"
            },
            {
                "order": 23,
                "type": "numeric",
                "key": "Sequence Request Id"
            },
            {
                "order": 24,
                "type": "text",
                "key": "Request Type"
            },
            {
                "order": 25,
                "type": "text",
                "value": null,
                "key": "V Gene"
            },
            {
                "order": 26,
                "type": "text",
                "value": null,
                "key": "D Gene"
            },
            {
                "order": 27,
                "type": "text",
                "value": null,
                "key": "J Gene"
            },
            {
                "order": 28,
                "type": "text",
                "key": "Mi Sequence File Name"
            },
            {
                "order": 29,
                "type": "numeric",
                "key": "Cluster Size"
            },
            {
                "order": 30,
                "type": "text",
                "value": null,
                "key": "Strain"
            },
            {
                "order": 31,
                "type": "text",
                "value": null,
                "key": "Mouse Ids"
            },
            {
                "order": 32,
                "type": "text",
                "value": "Recombinant Ab",
                "key": "Source"
            },
            {
                "order": 33,
                "type": "text",
                "key": "Isotype"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 1,
                        "type": "sequence",
                        "key": "Mature AA Sequence"
                    },
                    {
                        "order": 10,
                        "type": "text",
                        "key": "FR1 AA"
                    },
                    {
                        "order": 11,
                        "type": "sequence",
                        "key": "FR1 AA Sequence"
                    },
                    {
                        "order": 12,
                        "type": "text",
                        "key": "CDR1 AA"
                    },
                    {
                        "order": 13,
                        "type": "sequence",
                        "key": "CDR1 AA Sequence"
                    },
                    {
                        "order": 20,
                        "type": "text",
                        "key": "FR2 AA"
                    },
                    {
                        "order": 21,
                        "type": "sequence",
                        "key": "FR2 AA Sequence"
                    },
                    {
                        "order": 22,
                        "type": "text",
                        "key": "CDR2 AA"
                    },
                    {
                        "order": 23,
                        "type": "sequence",
                        "key": "CDR2 AA Sequence"
                    },
                    {
                        "order": 30,
                        "type": "text",
                        "key": "FR3 AA"
                    },
                    {
                        "order": 31,
                        "type": "sequence",
                        "key": "FR3 AA Sequence"
                    },
                    {
                        "order": 32,
                        "type": "text",
                        "key": "CDR3 AA"
                    },
                    {
                        "order": 33,
                        "type": "sequence",
                        "key": "CDR3 AA Sequence"
                    },
                    {
                        "order": 40,
                        "type": "text",
                        "key": "FR4 AA"
                    },
                    {
                        "order": 41,
                        "type": "sequence",
                        "key": "FR4 AA Sequence"
                    }
                ],
                "value": [
                    [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ],
                "key": "Sequence Details"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 2,
                        "type": "sequence",
                        "key": "Mature DNA Sequence"
                    },
                    {
                        "order": 50,
                        "type": "text",
                        "key": "DNA FR1"
                    },
                    {
                        "order": 51,
                        "type": "sequence",
                        "key": "DNA FR1 Sequence"
                    },
                    {
                        "order": 52,
                        "type": "text",
                        "key": "DNA CDR1"
                    },
                    {
                        "order": 53,
                        "type": "sequence",
                        "key": "DNA CDR1 Sequence"
                    },
                    {
                        "order": 60,
                        "type": "text",
                        "key": "DNA FR2"
                    },
                    {
                        "order": 61,
                        "type": "sequence",
                        "key": "DNA FR2 Sequence"
                    },
                    {
                        "order": 62,
                        "type": "text",
                        "key": "DNA CDR2"
                    },
                    {
                        "order": 63,
                        "type": "sequence",
                        "key": "DNA CDR2 Sequence"
                    },
                    {
                        "order": 70,
                        "type": "text",
                        "key": "DNA FR3"
                    },
                    {
                        "order": 71,
                        "type": "sequence",
                        "key": "DNA FR3 Sequence"
                    },
                    {
                        "order": 72,
                        "type": "text",
                        "key": "DNA CDR3"
                    },
                    {
                        "order": 73,
                        "type": "sequence",
                        "key": "DNA CDR3 Sequence"
                    },
                    {
                        "order": 80,
                        "type": "text",
                        "key": "DNA FR4"
                    },
                    {
                        "order": 81,
                        "type": "sequence",
                        "key": "DNA FR4 Sequence"
                    }
                ],
                "value": [
                    [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ],
                "key": "DNA Details"
            }
        ],
        "@timestamp": "2023-07-27T20:32:33.029405",
        "id": 6
    },
    {
        "platform_name": "ADI",
        "application_name": "Sequence",
        "entity_id": "adi-7e06fffd381311a28f045b9233b5e344",
        "entity_label": "1852.CCR8.50-Fab_RAS_Ab_01",
        "entity_name": "30427-K",
        "project number": "1852",
        "project name": "CCR8",
        "fusion": null,
        "published date": null,
        "domain": "KappaLight",
        "species": "Human",
        "request type": null,
        "v gene": null,
        "d gene": null,
        "j gene": null,
        "mi sequence file name": null,
        "strain": null,
        "source": "Recombinant Ab",
        "isotype": null,
        "properties": [
            {
                "value": "ADI",
                "order": 0,
                "type": "text",
                "key": "Platform Name"
            },
            {
                "value": "Sequence",
                "order": 1,
                "type": "text",
                "key": "Application Name"
            },
            {
                "value": "1852.CCR8.50-Fab_RAS_Ab_01",
                "id": "adi-7e06fffd381311a28f045b9233b5e344",
                "order": 2,
                "type": "identifier",
                "rule": "md5(platformName, applicationName, FusionId, Project Number, Material_Id, Chain_id, Sequence_idAA)",
                "key": "ID"
            },
            {
                "order": 3,
                "type": "text",
                "value": "30427-K",
                "key": "Name"
            },
            {
                "order": 9,
                "type": "text",
                "value": "1852",
                "key": "Project Number"
            },
            {
                "order": 10,
                "type": "text",
                "value": "CCR8",
                "key": "Project Name"
            },
            {
                "order": 11,
                "type": "text",
                "value": "CCR8.50-Fab_RAS_Ab_01",
                "key": "Material Name"
            },
            {
                "order": 12,
                "type": "text",
                "key": "Fusion"
            },
            {
                "order": 13,
                "type": "numeric",
                "value": "1852.380913",
                "key": "Full Clone Name"
            },
            {
                "order": 14,
                "type": "date",
                "key": "Published Date"
            },
            {
                "order": 16,
                "type": "text",
                "value": "KappaLight",
                "key": "Domain"
            },
            {
                "order": 17,
                "type": "text",
                "value": "Human",
                "key": "Species"
            },
            {
                "order": 18,
                "type": "numeric",
                "value": 30427,
                "key": "Sequence Id AA"
            },
            {
                "order": 19,
                "type": "numeric",
                "key": "Sequence Id NT"
            },
            {
                "order": 20,
                "type": "sequence",
                "value": "DIVMTQTPLSLSVTPGQPASISCRSSQSLFHSSGNTYLHWYLQKPGQPPQLLIYKVSNRFSGVPDRFSGSGSGTDFTLKISRVEAEDVGVYYCSQSTHVPFTFGQGTKLEIKRTVAAPSVFIFPPSDEQLKSGTASVVCLLNNFYPREAKVQWKVDNALQSGNSQESVTEQDSKDSTYSLSSTLTLSKADYEKHKVYACEVTHQGLSSPVTKSFNRGEC",
                "key": "Sequence"
            },
            {
                "order": 21,
                "type": "sequence",
                "key": "DNA"
            },
            {
                "order": 22,
                "type": "numeric",
                "key": "Master Sequence Request Id"
            },
            {
                "order": 23,
                "type": "numeric",
                "key": "Sequence Request Id"
            },
            {
                "order": 24,
                "type": "text",
                "key": "Request Type"
            },
            {
                "order": 25,
                "type": "text",
                "value": null,
                "key": "V Gene"
            },
            {
                "order": 26,
                "type": "text",
                "value": null,
                "key": "D Gene"
            },
            {
                "order": 27,
                "type": "text",
                "value": null,
                "key": "J Gene"
            },
            {
                "order": 28,
                "type": "text",
                "key": "Mi Sequence File Name"
            },
            {
                "order": 29,
                "type": "numeric",
                "key": "Cluster Size"
            },
            {
                "order": 30,
                "type": "text",
                "value": null,
                "key": "Strain"
            },
            {
                "order": 31,
                "type": "text",
                "value": null,
                "key": "Mouse Ids"
            },
            {
                "order": 32,
                "type": "text",
                "value": "Recombinant Ab",
                "key": "Source"
            },
            {
                "order": 33,
                "type": "text",
                "key": "Isotype"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 1,
                        "type": "sequence",
                        "key": "Mature AA Sequence"
                    },
                    {
                        "order": 10,
                        "type": "text",
                        "key": "FR1 AA"
                    },
                    {
                        "order": 11,
                        "type": "sequence",
                        "key": "FR1 AA Sequence"
                    },
                    {
                        "order": 12,
                        "type": "text",
                        "key": "CDR1 AA"
                    },
                    {
                        "order": 13,
                        "type": "sequence",
                        "key": "CDR1 AA Sequence"
                    },
                    {
                        "order": 20,
                        "type": "text",
                        "key": "FR2 AA"
                    },
                    {
                        "order": 21,
                        "type": "sequence",
                        "key": "FR2 AA Sequence"
                    },
                    {
                        "order": 22,
                        "type": "text",
                        "key": "CDR2 AA"
                    },
                    {
                        "order": 23,
                        "type": "sequence",
                        "key": "CDR2 AA Sequence"
                    },
                    {
                        "order": 30,
                        "type": "text",
                        "key": "FR3 AA"
                    },
                    {
                        "order": 31,
                        "type": "sequence",
                        "key": "FR3 AA Sequence"
                    },
                    {
                        "order": 32,
                        "type": "text",
                        "key": "CDR3 AA"
                    },
                    {
                        "order": 33,
                        "type": "sequence",
                        "key": "CDR3 AA Sequence"
                    },
                    {
                        "order": 40,
                        "type": "text",
                        "key": "FR4 AA"
                    },
                    {
                        "order": 41,
                        "type": "sequence",
                        "key": "FR4 AA Sequence"
                    }
                ],
                "value": [
                    [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ],
                "key": "Sequence Details"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 2,
                        "type": "sequence",
                        "key": "Mature DNA Sequence"
                    },
                    {
                        "order": 50,
                        "type": "text",
                        "key": "DNA FR1"
                    },
                    {
                        "order": 51,
                        "type": "sequence",
                        "key": "DNA FR1 Sequence"
                    },
                    {
                        "order": 52,
                        "type": "text",
                        "key": "DNA CDR1"
                    },
                    {
                        "order": 53,
                        "type": "sequence",
                        "key": "DNA CDR1 Sequence"
                    },
                    {
                        "order": 60,
                        "type": "text",
                        "key": "DNA FR2"
                    },
                    {
                        "order": 61,
                        "type": "sequence",
                        "key": "DNA FR2 Sequence"
                    },
                    {
                        "order": 62,
                        "type": "text",
                        "key": "DNA CDR2"
                    },
                    {
                        "order": 63,
                        "type": "sequence",
                        "key": "DNA CDR2 Sequence"
                    },
                    {
                        "order": 70,
                        "type": "text",
                        "key": "DNA FR3"
                    },
                    {
                        "order": 71,
                        "type": "sequence",
                        "key": "DNA FR3 Sequence"
                    },
                    {
                        "order": 72,
                        "type": "text",
                        "key": "DNA CDR3"
                    },
                    {
                        "order": 73,
                        "type": "sequence",
                        "key": "DNA CDR3 Sequence"
                    },
                    {
                        "order": 80,
                        "type": "text",
                        "key": "DNA FR4"
                    },
                    {
                        "order": 81,
                        "type": "sequence",
                        "key": "DNA FR4 Sequence"
                    }
                ],
                "value": [
                    [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ],
                "key": "DNA Details"
            }
        ],
        "@timestamp": "2023-07-27T20:32:33.034403",
        "id": 7
    },
    {
        "platform_name": "ADI",
        "application_name": "Sequence",
        "entity_id": "adi-25ecd4d1c8347a3bb3fe110406237395",
        "entity_label": "1852.CCR8.2-mG2a-Fab8H_RAS_Ab_02",
        "entity_name": "30428-H",
        "project number": "1852",
        "project name": "CCR8",
        "fusion": null,
        "published date": null,
        "domain": "Heavy",
        "species": "Mouse",
        "request type": null,
        "v gene": null,
        "d gene": null,
        "j gene": null,
        "mi sequence file name": null,
        "strain": null,
        "source": "Recombinant Ab",
        "isotype": null,
        "properties": [
            {
                "value": "ADI",
                "order": 0,
                "type": "text",
                "key": "Platform Name"
            },
            {
                "value": "Sequence",
                "order": 1,
                "type": "text",
                "key": "Application Name"
            },
            {
                "value": "1852.CCR8.2-mG2a-Fab8H_RAS_Ab_02",
                "id": "adi-25ecd4d1c8347a3bb3fe110406237395",
                "order": 2,
                "type": "identifier",
                "rule": "md5(platformName, applicationName, FusionId, Project Number, Material_Id, Chain_id, Sequence_idAA)",
                "key": "ID"
            },
            {
                "order": 3,
                "type": "text",
                "value": "30428-H",
                "key": "Name"
            },
            {
                "order": 9,
                "type": "text",
                "value": "1852",
                "key": "Project Number"
            },
            {
                "order": 10,
                "type": "text",
                "value": "CCR8",
                "key": "Project Name"
            },
            {
                "order": 11,
                "type": "text",
                "value": "CCR8.2-mG2a-Fab8H_RAS_Ab_02",
                "key": "Material Name"
            },
            {
                "order": 12,
                "type": "text",
                "key": "Fusion"
            },
            {
                "order": 13,
                "type": "numeric",
                "value": "1852.380927",
                "key": "Full Clone Name"
            },
            {
                "order": 14,
                "type": "date",
                "key": "Published Date"
            },
            {
                "order": 16,
                "type": "text",
                "value": "Heavy",
                "key": "Domain"
            },
            {
                "order": 17,
                "type": "text",
                "value": "Mouse",
                "key": "Species"
            },
            {
                "order": 18,
                "type": "numeric",
                "value": 30428,
                "key": "Sequence Id AA"
            },
            {
                "order": 19,
                "type": "numeric",
                "key": "Sequence Id NT"
            },
            {
                "order": 20,
                "type": "sequence",
                "value": "QVQLKESGPGLVQPSQTLSLTCTVSRFSLTSYNVHWIRQPTGKGLEWMGVIWPGGSTDYNSALKSRLSISRDTSKRQVFLKMNSPQTEDIATYYCARGRFGGYGPYYFDYWGQGVMVTVSSAKTTAPSVYPLAPVCGDTTGSSVTLGCLVKGYFPEPVTLTWNSGSLSSGVHTFPAVLQSDLYTLSSSVTVTSSTWPSQSITCNVAHPASSTKVDKKIEPRGPAAAHHHHHHHH",
                "key": "Sequence"
            },
            {
                "order": 21,
                "type": "sequence",
                "key": "DNA"
            },
            {
                "order": 22,
                "type": "numeric",
                "key": "Master Sequence Request Id"
            },
            {
                "order": 23,
                "type": "numeric",
                "key": "Sequence Request Id"
            },
            {
                "order": 24,
                "type": "text",
                "key": "Request Type"
            },
            {
                "order": 25,
                "type": "text",
                "value": null,
                "key": "V Gene"
            },
            {
                "order": 26,
                "type": "text",
                "value": null,
                "key": "D Gene"
            },
            {
                "order": 27,
                "type": "text",
                "value": null,
                "key": "J Gene"
            },
            {
                "order": 28,
                "type": "text",
                "key": "Mi Sequence File Name"
            },
            {
                "order": 29,
                "type": "numeric",
                "key": "Cluster Size"
            },
            {
                "order": 30,
                "type": "text",
                "value": null,
                "key": "Strain"
            },
            {
                "order": 31,
                "type": "text",
                "value": null,
                "key": "Mouse Ids"
            },
            {
                "order": 32,
                "type": "text",
                "value": "Recombinant Ab",
                "key": "Source"
            },
            {
                "order": 33,
                "type": "text",
                "key": "Isotype"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 1,
                        "type": "sequence",
                        "key": "Mature AA Sequence"
                    },
                    {
                        "order": 10,
                        "type": "text",
                        "key": "FR1 AA"
                    },
                    {
                        "order": 11,
                        "type": "sequence",
                        "key": "FR1 AA Sequence"
                    },
                    {
                        "order": 12,
                        "type": "text",
                        "key": "CDR1 AA"
                    },
                    {
                        "order": 13,
                        "type": "sequence",
                        "key": "CDR1 AA Sequence"
                    },
                    {
                        "order": 20,
                        "type": "text",
                        "key": "FR2 AA"
                    },
                    {
                        "order": 21,
                        "type": "sequence",
                        "key": "FR2 AA Sequence"
                    },
                    {
                        "order": 22,
                        "type": "text",
                        "key": "CDR2 AA"
                    },
                    {
                        "order": 23,
                        "type": "sequence",
                        "key": "CDR2 AA Sequence"
                    },
                    {
                        "order": 30,
                        "type": "text",
                        "key": "FR3 AA"
                    },
                    {
                        "order": 31,
                        "type": "sequence",
                        "key": "FR3 AA Sequence"
                    },
                    {
                        "order": 32,
                        "type": "text",
                        "key": "CDR3 AA"
                    },
                    {
                        "order": 33,
                        "type": "sequence",
                        "key": "CDR3 AA Sequence"
                    },
                    {
                        "order": 40,
                        "type": "text",
                        "key": "FR4 AA"
                    },
                    {
                        "order": 41,
                        "type": "sequence",
                        "key": "FR4 AA Sequence"
                    }
                ],
                "value": [
                    [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ],
                "key": "Sequence Details"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 2,
                        "type": "sequence",
                        "key": "Mature DNA Sequence"
                    },
                    {
                        "order": 50,
                        "type": "text",
                        "key": "DNA FR1"
                    },
                    {
                        "order": 51,
                        "type": "sequence",
                        "key": "DNA FR1 Sequence"
                    },
                    {
                        "order": 52,
                        "type": "text",
                        "key": "DNA CDR1"
                    },
                    {
                        "order": 53,
                        "type": "sequence",
                        "key": "DNA CDR1 Sequence"
                    },
                    {
                        "order": 60,
                        "type": "text",
                        "key": "DNA FR2"
                    },
                    {
                        "order": 61,
                        "type": "sequence",
                        "key": "DNA FR2 Sequence"
                    },
                    {
                        "order": 62,
                        "type": "text",
                        "key": "DNA CDR2"
                    },
                    {
                        "order": 63,
                        "type": "sequence",
                        "key": "DNA CDR2 Sequence"
                    },
                    {
                        "order": 70,
                        "type": "text",
                        "key": "DNA FR3"
                    },
                    {
                        "order": 71,
                        "type": "sequence",
                        "key": "DNA FR3 Sequence"
                    },
                    {
                        "order": 72,
                        "type": "text",
                        "key": "DNA CDR3"
                    },
                    {
                        "order": 73,
                        "type": "sequence",
                        "key": "DNA CDR3 Sequence"
                    },
                    {
                        "order": 80,
                        "type": "text",
                        "key": "DNA FR4"
                    },
                    {
                        "order": 81,
                        "type": "sequence",
                        "key": "DNA FR4 Sequence"
                    }
                ],
                "value": [
                    [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ],
                "key": "DNA Details"
            }
        ],
        "@timestamp": "2023-07-27T20:32:33.053409",
        "id": 8
    },
    {
        "platform_name": "ADI",
        "application_name": "Sequence",
        "entity_id": "adi-d62b45c0e27f59a7c614fb0c13e8c667",
        "entity_label": "1854.8397.1C03",
        "entity_name": "6720.VK1",
        "project number": "1854",
        "project name": "CD3e",
        "fusion": "8397",
        "published date": "2019-08-07T16:17:48.570000+00:00",
        "domain": "KappaLight",
        "species": "Chimeric",
        "request type": "NGS",
        "v gene": [
            "IGKV3",
            "A27",
            "IGKV3-20*01",
            ""
        ],
        "d gene": null,
        "j gene": [
            "IGKJ2",
            "2",
            "IGKJ2*01",
            ""
        ],
        "mi sequence file name": "1251_Box1251_CD3E_LCReport_Rollback_1222.csv",
        "strain": "[hVDJ2:03/FIXEDhuLC1-KI] [J/K]",
        "source": "Hybridoma Ab",
        "isotype": null,
        "properties": [
            {
                "value": "ADI",
                "order": 0,
                "type": "text",
                "key": "Platform Name"
            },
            {
                "value": "Sequence",
                "order": 1,
                "type": "text",
                "key": "Application Name"
            },
            {
                "value": "1854.8397.1C03",
                "id": "adi-d62b45c0e27f59a7c614fb0c13e8c667",
                "order": 2,
                "type": "identifier",
                "rule": "md5(platformName, applicationName, FusionId, Project Number, Material_Id, Chain_id, Sequence_idAA)",
                "key": "ID"
            },
            {
                "order": 3,
                "type": "text",
                "value": "6720.VK1",
                "key": "Name"
            },
            {
                "order": 9,
                "type": "text",
                "value": "1854",
                "key": "Project Number"
            },
            {
                "order": 10,
                "type": "text",
                "value": "CD3e",
                "key": "Project Name"
            },
            {
                "order": 11,
                "type": "text",
                "value": "1C03",
                "key": "Material Name"
            },
            {
                "order": 12,
                "type": "text",
                "value": "8397",
                "key": "Fusion"
            },
            {
                "order": 13,
                "type": "numeric",
                "value": "1854.8397.373143",
                "key": "Full Clone Name"
            },
            {
                "order": 14,
                "type": "date",
                "value": "2019-08-07T16:17:48.570Z",
                "key": "Published Date"
            },
            {
                "order": 16,
                "type": "text",
                "value": "KappaLight",
                "key": "Domain"
            },
            {
                "order": 17,
                "type": "text",
                "value": "Chimeric",
                "key": "Species"
            },
            {
                "order": 18,
                "type": "numeric",
                "value": 30467,
                "key": "Sequence Id AA"
            },
            {
                "order": 19,
                "type": "numeric",
                "value": 30466,
                "key": "Sequence Id NT"
            },
            {
                "order": 20,
                "type": "sequence",
                "value": "DIVMTQSPGTLSLSPGERATLSCRASQSVSNSYLAWYQQKPGQAPRLLIYGASSRATGIPDRFSGSGSGTDFTLTISRLEPEDFAVYYCQQYGRSPYTFGQGTKLEIK",
                "key": "Sequence"
            },
            {
                "order": 21,
                "type": "sequence",
                "value": "GATATTGTGATGACGCAGTCTCCAGGGACCCTGTCTTTGTCTCCAGGGGAAAGAGCCACCCTCTCCTGCCGGGCCAGTCAGAGTGTCTCCAACTCATACTTAGCCTGGTACCAACAGAAACCTGGCCAGGCCCCCCGACTCCTCATCTATGGTGCCTCCTCAAGGGCCACTGGAATCCCAGACAGATTCAGTGGGAGTGGGTCTGGGACAGACTTCACTCTCACCATCTCAAGACTGGAGCCTGAAGATTTTGCCGTATATTACTGTCAACAGTATGGGAGGTCACCGTACACTTTTGGCCAGGGGACCAAGCTGGAGATCAAA",
                "key": "DNA"
            },
            {
                "order": 22,
                "type": "numeric",
                "value": 1251,
                "key": "Master Sequence Request Id"
            },
            {
                "order": 23,
                "type": "numeric",
                "value": 6720,
                "key": "Sequence Request Id"
            },
            {
                "order": 24,
                "type": "text",
                "value": "NGS",
                "key": "Request Type"
            },
            {
                "order": 25,
                "type": "text",
                "value": [
                    "IGKV3",
                    "A27",
                    "IGKV3-20*01",
                    ""
                ],
                "key": "V Gene"
            },
            {
                "order": 26,
                "type": "text",
                "value": null,
                "key": "D Gene"
            },
            {
                "order": 27,
                "type": "text",
                "value": [
                    "IGKJ2",
                    "2",
                    "IGKJ2*01",
                    ""
                ],
                "key": "J Gene"
            },
            {
                "order": 28,
                "type": "text",
                "value": "1251_Box1251_CD3E_LCReport_Rollback_1222.csv",
                "key": "Mi Sequence File Name"
            },
            {
                "order": 29,
                "type": "numeric",
                "value": "4631 ",
                "key": "Cluster Size"
            },
            {
                "order": 30,
                "type": "text",
                "value": "[hVDJ2:03/FIXEDhuLC1-KI] [J/K]",
                "key": "Strain"
            },
            {
                "order": 31,
                "type": "text",
                "value": "513426,516049,516050,516054",
                "key": "Mouse Ids"
            },
            {
                "order": 32,
                "type": "text",
                "value": "Hybridoma Ab",
                "key": "Source"
            },
            {
                "order": 33,
                "type": "text",
                "key": "Isotype"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 1,
                        "type": "sequence",
                        "key": "Mature AA Sequence"
                    },
                    {
                        "order": 10,
                        "type": "text",
                        "key": "FR1 AA"
                    },
                    {
                        "order": 11,
                        "type": "sequence",
                        "key": "FR1 AA Sequence"
                    },
                    {
                        "order": 12,
                        "type": "text",
                        "key": "CDR1 AA"
                    },
                    {
                        "order": 13,
                        "type": "sequence",
                        "key": "CDR1 AA Sequence"
                    },
                    {
                        "order": 20,
                        "type": "text",
                        "key": "FR2 AA"
                    },
                    {
                        "order": 21,
                        "type": "sequence",
                        "key": "FR2 AA Sequence"
                    },
                    {
                        "order": 22,
                        "type": "text",
                        "key": "CDR2 AA"
                    },
                    {
                        "order": 23,
                        "type": "sequence",
                        "key": "CDR2 AA Sequence"
                    },
                    {
                        "order": 30,
                        "type": "text",
                        "key": "FR3 AA"
                    },
                    {
                        "order": 31,
                        "type": "sequence",
                        "key": "FR3 AA Sequence"
                    },
                    {
                        "order": 32,
                        "type": "text",
                        "key": "CDR3 AA"
                    },
                    {
                        "order": 33,
                        "type": "sequence",
                        "key": "CDR3 AA Sequence"
                    },
                    {
                        "order": 40,
                        "type": "text",
                        "key": "FR4 AA"
                    },
                    {
                        "order": 41,
                        "type": "sequence",
                        "key": "FR4 AA Sequence"
                    }
                ],
                "value": [
                    [
                        "DIVMTQSPGTLSLSPGERATLSCRASQSVSNSYLAWYQQKPGQAPRLLIYGASSRATGIPDRFSGSGSGTDFTLTISRLEPEDFAVYYCQQYGRSPYTFGQGTKLEIK",
                        "1-23",
                        "DIVMTQSPGTLSLSPGERATLSC",
                        "24-35",
                        "RASQSVSNSYLA",
                        "36-50",
                        "WYQQKPGQAPRLLIY",
                        "51-57",
                        "GASSRAT",
                        "58-89",
                        "GIPDRFSGSGSGTDFTLTISRLEPEDFAVYYC",
                        "90-98",
                        "QQYGRSPYT",
                        "99-108",
                        "FGQGTKLEIK"
                    ]
                ],
                "key": "Sequence Details"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 2,
                        "type": "sequence",
                        "key": "Mature DNA Sequence"
                    },
                    {
                        "order": 50,
                        "type": "text",
                        "key": "DNA FR1"
                    },
                    {
                        "order": 51,
                        "type": "sequence",
                        "key": "DNA FR1 Sequence"
                    },
                    {
                        "order": 52,
                        "type": "text",
                        "key": "DNA CDR1"
                    },
                    {
                        "order": 53,
                        "type": "sequence",
                        "key": "DNA CDR1 Sequence"
                    },
                    {
                        "order": 60,
                        "type": "text",
                        "key": "DNA FR2"
                    },
                    {
                        "order": 61,
                        "type": "sequence",
                        "key": "DNA FR2 Sequence"
                    },
                    {
                        "order": 62,
                        "type": "text",
                        "key": "DNA CDR2"
                    },
                    {
                        "order": 63,
                        "type": "sequence",
                        "key": "DNA CDR2 Sequence"
                    },
                    {
                        "order": 70,
                        "type": "text",
                        "key": "DNA FR3"
                    },
                    {
                        "order": 71,
                        "type": "sequence",
                        "key": "DNA FR3 Sequence"
                    },
                    {
                        "order": 72,
                        "type": "text",
                        "key": "DNA CDR3"
                    },
                    {
                        "order": 73,
                        "type": "sequence",
                        "key": "DNA CDR3 Sequence"
                    },
                    {
                        "order": 80,
                        "type": "text",
                        "key": "DNA FR4"
                    },
                    {
                        "order": 81,
                        "type": "sequence",
                        "key": "DNA FR4 Sequence"
                    }
                ],
                "value": [
                    [
                        "GATATTGTGATGACGCAGTCTCCAGGGACCCTGTCTTTGTCTCCAGGGGAAAGAGCCACCCTCTCCTGCCGGGCCAGTCAGAGTGTCTCCAACTCATACTTAGCCTGGTACCAACAGAAACCTGGCCAGGCCCCCCGACTCCTCATCTATGGTGCCTCCTCAAGGGCCACTGGAATCCCAGACAGATTCAGTGGGAGTGGGTCTGGGACAGACTTCACTCTCACCATCTCAAGACTGGAGCCTGAAGATTTTGCCGTATATTACTGTCAACAGTATGGGAGGTCACCGTACACTTTTGGCCAGGGGACCAAGCTGGAGATCAAA",
                        "1-69",
                        "GATATTGTGATGACGCAGTCTCCAGGGACCCTGTCTTTGTCTCCAGGGGAAAGAGCCACCCTCTCCTGC",
                        "70-105",
                        "CGGGCCAGTCAGAGTGTCTCCAACTCATACTTAGCC",
                        "106-150",
                        "TGGTACCAACAGAAACCTGGCCAGGCCCCCCGACTCCTCATCTAT",
                        "151-171",
                        "GGTGCCTCCTCAAGGGCCACT",
                        "172-267",
                        "GGAATCCCAGACAGATTCAGTGGGAGTGGGTCTGGGACAGACTTCACTCTCACCATCTCAAGACTGGAGCCTGAAGATTTTGCCGTATATTACTGT",
                        "268-294",
                        "CAACAGTATGGGAGGTCACCGTACACT",
                        "295-324",
                        "TTTGGCCAGGGGACCAAGCTGGAGATCAAA"
                    ]
                ],
                "key": "DNA Details"
            }
        ],
        "@timestamp": "2023-07-27T20:32:33.160404",
        "id": 9
    },
    {
        "platform_name": "ADI",
        "application_name": "Sequence",
        "entity_id": "adi-c01fd9285a659258f50f399006acf770",
        "entity_label": "1854.8397.1D01",
        "entity_name": "6730.VK1",
        "project number": "1854",
        "project name": "CD3e",
        "fusion": "8397",
        "published date": "2019-08-07T16:17:48.617000+00:00",
        "domain": "KappaLight",
        "species": "Chimeric",
        "request type": "NGS",
        "v gene": [
            "IGKV3",
            "A27",
            "IGKV3-20*01",
            ""
        ],
        "d gene": null,
        "j gene": [
            "IGKJ2",
            "2",
            "IGKJ2*01",
            ""
        ],
        "mi sequence file name": "1251_Box1251_CD3E_LCReport_Rollback_1222.csv",
        "strain": "[hVDJ2:03/FIXEDhuLC1-KI] [J/K]",
        "source": "Hybridoma Ab",
        "isotype": null,
        "properties": [
            {
                "value": "ADI",
                "order": 0,
                "type": "text",
                "key": "Platform Name"
            },
            {
                "value": "Sequence",
                "order": 1,
                "type": "text",
                "key": "Application Name"
            },
            {
                "value": "1854.8397.1D01",
                "id": "adi-c01fd9285a659258f50f399006acf770",
                "order": 2,
                "type": "identifier",
                "rule": "md5(platformName, applicationName, FusionId, Project Number, Material_Id, Chain_id, Sequence_idAA)",
                "key": "ID"
            },
            {
                "order": 3,
                "type": "text",
                "value": "6730.VK1",
                "key": "Name"
            },
            {
                "order": 9,
                "type": "text",
                "value": "1854",
                "key": "Project Number"
            },
            {
                "order": 10,
                "type": "text",
                "value": "CD3e",
                "key": "Project Name"
            },
            {
                "order": 11,
                "type": "text",
                "value": "1D01",
                "key": "Material Name"
            },
            {
                "order": 12,
                "type": "text",
                "value": "8397",
                "key": "Fusion"
            },
            {
                "order": 13,
                "type": "numeric",
                "value": "1854.8397.373152",
                "key": "Full Clone Name"
            },
            {
                "order": 14,
                "type": "date",
                "value": "2019-08-07T16:17:48.617Z",
                "key": "Published Date"
            },
            {
                "order": 16,
                "type": "text",
                "value": "KappaLight",
                "key": "Domain"
            },
            {
                "order": 17,
                "type": "text",
                "value": "Chimeric",
                "key": "Species"
            },
            {
                "order": 18,
                "type": "numeric",
                "value": 30481,
                "key": "Sequence Id AA"
            },
            {
                "order": 19,
                "type": "numeric",
                "value": 30480,
                "key": "Sequence Id NT"
            },
            {
                "order": 20,
                "type": "sequence",
                "value": "DIVMTQSPGTLSLSPGERATLSCRASQSVSSSYLAWYQQKPGQAPRLLIYGASSRATGIPDRFSGSGSGTDFTLTISRLEPEDFAVYYCQQYGSSPYTFGQGTKLEIK",
                "key": "Sequence"
            },
            {
                "order": 21,
                "type": "sequence",
                "value": "GATATTGTGATGACGCAGTCTCCAGGGACCCTGTCTTTGTCTCCAGGGGAAAGAGCCACCCTCTCCTGCCGGGCCAGTCAGAGTGTCTCCAGCTCGTACTTAGCCTGGTACCAACAGAAACCTGGCCAGGCCCCCCGACTCCTCATCTATGGTGCCTCCTCAAGGGCCACTGGAATCCCAGACAGATTCAGTGGGAGTGGGTCTGGGACAGACTTCACTCTCACCATCTCAAGACTGGAGCCTGAAGATTTTGCCGTATATTACTGTCAACAGTATGGGAGCTCACCGTACACTTTTGGCCAGGGGACCAAGCTGGAGATCAAA",
                "key": "DNA"
            },
            {
                "order": 22,
                "type": "numeric",
                "value": 1251,
                "key": "Master Sequence Request Id"
            },
            {
                "order": 23,
                "type": "numeric",
                "value": 6730,
                "key": "Sequence Request Id"
            },
            {
                "order": 24,
                "type": "text",
                "value": "NGS",
                "key": "Request Type"
            },
            {
                "order": 25,
                "type": "text",
                "value": [
                    "IGKV3",
                    "A27",
                    "IGKV3-20*01",
                    ""
                ],
                "key": "V Gene"
            },
            {
                "order": 26,
                "type": "text",
                "value": null,
                "key": "D Gene"
            },
            {
                "order": 27,
                "type": "text",
                "value": [
                    "IGKJ2",
                    "2",
                    "IGKJ2*01",
                    ""
                ],
                "key": "J Gene"
            },
            {
                "order": 28,
                "type": "text",
                "value": "1251_Box1251_CD3E_LCReport_Rollback_1222.csv",
                "key": "Mi Sequence File Name"
            },
            {
                "order": 29,
                "type": "numeric",
                "value": "3908 ",
                "key": "Cluster Size"
            },
            {
                "order": 30,
                "type": "text",
                "value": "[hVDJ2:03/FIXEDhuLC1-KI] [J/K]",
                "key": "Strain"
            },
            {
                "order": 31,
                "type": "text",
                "value": "513426,516049,516050,516054",
                "key": "Mouse Ids"
            },
            {
                "order": 32,
                "type": "text",
                "value": "Hybridoma Ab",
                "key": "Source"
            },
            {
                "order": 33,
                "type": "text",
                "key": "Isotype"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 1,
                        "type": "sequence",
                        "key": "Mature AA Sequence"
                    },
                    {
                        "order": 10,
                        "type": "text",
                        "key": "FR1 AA"
                    },
                    {
                        "order": 11,
                        "type": "sequence",
                        "key": "FR1 AA Sequence"
                    },
                    {
                        "order": 12,
                        "type": "text",
                        "key": "CDR1 AA"
                    },
                    {
                        "order": 13,
                        "type": "sequence",
                        "key": "CDR1 AA Sequence"
                    },
                    {
                        "order": 20,
                        "type": "text",
                        "key": "FR2 AA"
                    },
                    {
                        "order": 21,
                        "type": "sequence",
                        "key": "FR2 AA Sequence"
                    },
                    {
                        "order": 22,
                        "type": "text",
                        "key": "CDR2 AA"
                    },
                    {
                        "order": 23,
                        "type": "sequence",
                        "key": "CDR2 AA Sequence"
                    },
                    {
                        "order": 30,
                        "type": "text",
                        "key": "FR3 AA"
                    },
                    {
                        "order": 31,
                        "type": "sequence",
                        "key": "FR3 AA Sequence"
                    },
                    {
                        "order": 32,
                        "type": "text",
                        "key": "CDR3 AA"
                    },
                    {
                        "order": 33,
                        "type": "sequence",
                        "key": "CDR3 AA Sequence"
                    },
                    {
                        "order": 40,
                        "type": "text",
                        "key": "FR4 AA"
                    },
                    {
                        "order": 41,
                        "type": "sequence",
                        "key": "FR4 AA Sequence"
                    }
                ],
                "value": [
                    [
                        "DIVMTQSPGTLSLSPGERATLSCRASQSVSSSYLAWYQQKPGQAPRLLIYGASSRATGIPDRFSGSGSGTDFTLTISRLEPEDFAVYYCQQYGSSPYTFGQGTKLEIK",
                        "1-23",
                        "DIVMTQSPGTLSLSPGERATLSC",
                        "24-35",
                        "RASQSVSSSYLA",
                        "36-50",
                        "WYQQKPGQAPRLLIY",
                        "51-57",
                        "GASSRAT",
                        "58-89",
                        "GIPDRFSGSGSGTDFTLTISRLEPEDFAVYYC",
                        "90-98",
                        "QQYGSSPYT",
                        "99-108",
                        "FGQGTKLEIK"
                    ]
                ],
                "key": "Sequence Details"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 2,
                        "type": "sequence",
                        "key": "Mature DNA Sequence"
                    },
                    {
                        "order": 50,
                        "type": "text",
                        "key": "DNA FR1"
                    },
                    {
                        "order": 51,
                        "type": "sequence",
                        "key": "DNA FR1 Sequence"
                    },
                    {
                        "order": 52,
                        "type": "text",
                        "key": "DNA CDR1"
                    },
                    {
                        "order": 53,
                        "type": "sequence",
                        "key": "DNA CDR1 Sequence"
                    },
                    {
                        "order": 60,
                        "type": "text",
                        "key": "DNA FR2"
                    },
                    {
                        "order": 61,
                        "type": "sequence",
                        "key": "DNA FR2 Sequence"
                    },
                    {
                        "order": 62,
                        "type": "text",
                        "key": "DNA CDR2"
                    },
                    {
                        "order": 63,
                        "type": "sequence",
                        "key": "DNA CDR2 Sequence"
                    },
                    {
                        "order": 70,
                        "type": "text",
                        "key": "DNA FR3"
                    },
                    {
                        "order": 71,
                        "type": "sequence",
                        "key": "DNA FR3 Sequence"
                    },
                    {
                        "order": 72,
                        "type": "text",
                        "key": "DNA CDR3"
                    },
                    {
                        "order": 73,
                        "type": "sequence",
                        "key": "DNA CDR3 Sequence"
                    },
                    {
                        "order": 80,
                        "type": "text",
                        "key": "DNA FR4"
                    },
                    {
                        "order": 81,
                        "type": "sequence",
                        "key": "DNA FR4 Sequence"
                    }
                ],
                "value": [
                    [
                        "GATATTGTGATGACGCAGTCTCCAGGGACCCTGTCTTTGTCTCCAGGGGAAAGAGCCACCCTCTCCTGCCGGGCCAGTCAGAGTGTCTCCAGCTCGTACTTAGCCTGGTACCAACAGAAACCTGGCCAGGCCCCCCGACTCCTCATCTATGGTGCCTCCTCAAGGGCCACTGGAATCCCAGACAGATTCAGTGGGAGTGGGTCTGGGACAGACTTCACTCTCACCATCTCAAGACTGGAGCCTGAAGATTTTGCCGTATATTACTGTCAACAGTATGGGAGCTCACCGTACACTTTTGGCCAGGGGACCAAGCTGGAGATCAAA",
                        "1-69",
                        "GATATTGTGATGACGCAGTCTCCAGGGACCCTGTCTTTGTCTCCAGGGGAAAGAGCCACCCTCTCCTGC",
                        "70-105",
                        "CGGGCCAGTCAGAGTGTCTCCAGCTCGTACTTAGCC",
                        "106-150",
                        "TGGTACCAACAGAAACCTGGCCAGGCCCCCCGACTCCTCATCTAT",
                        "151-171",
                        "GGTGCCTCCTCAAGGGCCACT",
                        "172-267",
                        "GGAATCCCAGACAGATTCAGTGGGAGTGGGTCTGGGACAGACTTCACTCTCACCATCTCAAGACTGGAGCCTGAAGATTTTGCCGTATATTACTGT",
                        "268-294",
                        "CAACAGTATGGGAGCTCACCGTACACT",
                        "295-324",
                        "TTTGGCCAGGGGACCAAGCTGGAGATCAAA"
                    ]
                ],
                "key": "DNA Details"
            }
        ],
        "@timestamp": "2023-07-27T20:32:33.199405",
        "id": 10
    },
    {
        "platform_name": "ADI",
        "application_name": "Sequence",
        "entity_id": "adi-249706169868e75ba32c4334380c699e",
        "entity_label": "1755.8574.2D2",
        "entity_name": "10700.VK1",
        "project number": "1755",
        "project name": "anti-FXIa Rev ID",
        "fusion": "8574",
        "published date": "2020-02-04T15:25:06.413000+00:00",
        "domain": "KappaLight",
        "species": "Chimeric",
        "request type": "NGS",
        "v gene": [
            "IGKV1D",
            "O2",
            "IGKV1D-39*01",
            ""
        ],
        "d gene": null,
        "j gene": [
            "IGKJ1",
            "1",
            "IGKJ1*01",
            ""
        ],
        "mi sequence file name": "1320_CRWJW_LC_Report_ForNextGenADI.csv",
        "strain": "[hVDJ2:03/hKAPPA1:01] [J/K]",
        "source": "Hybridoma Ab",
        "isotype": null,
        "properties": [
            {
                "value": "ADI",
                "order": 0,
                "type": "text",
                "key": "Platform Name"
            },
            {
                "value": "Sequence",
                "order": 1,
                "type": "text",
                "key": "Application Name"
            },
            {
                "value": "1755.8574.2D2",
                "id": "adi-249706169868e75ba32c4334380c699e",
                "order": 2,
                "type": "identifier",
                "rule": "md5(platformName, applicationName, FusionId, Project Number, Material_Id, Chain_id, Sequence_idAA)",
                "key": "ID"
            },
            {
                "order": 3,
                "type": "text",
                "value": "10700.VK1",
                "key": "Name"
            },
            {
                "order": 9,
                "type": "text",
                "value": "1755",
                "key": "Project Number"
            },
            {
                "order": 10,
                "type": "text",
                "value": "anti-FXIa Rev ID",
                "key": "Project Name"
            },
            {
                "order": 11,
                "type": "text",
                "value": "2D2",
                "key": "Material Name"
            },
            {
                "order": 12,
                "type": "text",
                "value": "8574",
                "key": "Fusion"
            },
            {
                "order": 13,
                "type": "numeric",
                "value": "1755.8574.380202",
                "key": "Full Clone Name"
            },
            {
                "order": 14,
                "type": "date",
                "value": "2020-02-04T15:25:06.413Z",
                "key": "Published Date"
            },
            {
                "order": 16,
                "type": "text",
                "value": "KappaLight",
                "key": "Domain"
            },
            {
                "order": 17,
                "type": "text",
                "value": "Chimeric",
                "key": "Species"
            },
            {
                "order": 18,
                "type": "numeric",
                "value": 45309,
                "key": "Sequence Id AA"
            },
            {
                "order": 19,
                "type": "numeric",
                "value": 45308,
                "key": "Sequence Id NT"
            },
            {
                "order": 20,
                "type": "sequence",
                "value": "DIVMTQSPSSLSASVGDRVTITCRASQSISSYLNWYQQKPGKAPKLLIYAASSLQSGVPSRFSGSGSGTDFTLTISSLQPEDFAAYYCQQSYSTPRTFGQGTKVEIK",
                "key": "Sequence"
            },
            {
                "order": 21,
                "type": "sequence",
                "value": "GACATCGTGATGACCCAGTCTCCATCCTCCCTGTCTGCATCTGTAGGAGACAGAGTCACCATCACTTGCCGGGCAAGTCAGAGCATTAGCAGCTATTTAAATTGGTATCAGCAGAAACCAGGGAAAGCCCCTAAGCTCCTGATCTATGCTGCATCCAGTTTGCAAAGTGGGGTCCCATCAAGGTTCAGTGGCAGTGGATCTGGGACAGATTTCACTCTCACCATCAGCAGTCTGCAACCTGAAGATTTTGCAGCTTACTACTGTCAACAGAGTTACAGTACCCCTCGGACGTTCGGCCAAGGGACCAAGGTGGAAATCAAA",
                "key": "DNA"
            },
            {
                "order": 22,
                "type": "numeric",
                "value": 1320,
                "key": "Master Sequence Request Id"
            },
            {
                "order": 23,
                "type": "numeric",
                "value": 10700,
                "key": "Sequence Request Id"
            },
            {
                "order": 24,
                "type": "text",
                "value": "NGS",
                "key": "Request Type"
            },
            {
                "order": 25,
                "type": "text",
                "value": [
                    "IGKV1D",
                    "O2",
                    "IGKV1D-39*01",
                    ""
                ],
                "key": "V Gene"
            },
            {
                "order": 26,
                "type": "text",
                "value": null,
                "key": "D Gene"
            },
            {
                "order": 27,
                "type": "text",
                "value": [
                    "IGKJ1",
                    "1",
                    "IGKJ1*01",
                    ""
                ],
                "key": "J Gene"
            },
            {
                "order": 28,
                "type": "text",
                "value": "1320_CRWJW_LC_Report_ForNextGenADI.csv",
                "key": "Mi Sequence File Name"
            },
            {
                "order": 29,
                "type": "numeric",
                "value": "2754 ",
                "key": "Cluster Size"
            },
            {
                "order": 30,
                "type": "text",
                "value": "[hVDJ2:03/hKAPPA1:01] [J/K]",
                "key": "Strain"
            },
            {
                "order": 31,
                "type": "text",
                "value": "530905,530908,530910,530911",
                "key": "Mouse Ids"
            },
            {
                "order": 32,
                "type": "text",
                "value": "Hybridoma Ab",
                "key": "Source"
            },
            {
                "order": 33,
                "type": "text",
                "key": "Isotype"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 1,
                        "type": "sequence",
                        "key": "Mature AA Sequence"
                    },
                    {
                        "order": 10,
                        "type": "text",
                        "key": "FR1 AA"
                    },
                    {
                        "order": 11,
                        "type": "sequence",
                        "key": "FR1 AA Sequence"
                    },
                    {
                        "order": 12,
                        "type": "text",
                        "key": "CDR1 AA"
                    },
                    {
                        "order": 13,
                        "type": "sequence",
                        "key": "CDR1 AA Sequence"
                    },
                    {
                        "order": 20,
                        "type": "text",
                        "key": "FR2 AA"
                    },
                    {
                        "order": 21,
                        "type": "sequence",
                        "key": "FR2 AA Sequence"
                    },
                    {
                        "order": 22,
                        "type": "text",
                        "key": "CDR2 AA"
                    },
                    {
                        "order": 23,
                        "type": "sequence",
                        "key": "CDR2 AA Sequence"
                    },
                    {
                        "order": 30,
                        "type": "text",
                        "key": "FR3 AA"
                    },
                    {
                        "order": 31,
                        "type": "sequence",
                        "key": "FR3 AA Sequence"
                    },
                    {
                        "order": 32,
                        "type": "text",
                        "key": "CDR3 AA"
                    },
                    {
                        "order": 33,
                        "type": "sequence",
                        "key": "CDR3 AA Sequence"
                    },
                    {
                        "order": 40,
                        "type": "text",
                        "key": "FR4 AA"
                    },
                    {
                        "order": 41,
                        "type": "sequence",
                        "key": "FR4 AA Sequence"
                    }
                ],
                "value": [
                    [
                        "DIVMTQSPSSLSASVGDRVTITCRASQSISSYLNWYQQKPGKAPKLLIYAASSLQSGVPSRFSGSGSGTDFTLTISSLQPEDFAAYYCQQSYSTPRTFGQGTKVEIK",
                        "1-23",
                        "DIVMTQSPSSLSASVGDRVTITC",
                        "24-34",
                        "RASQSISSYLN",
                        "35-49",
                        "WYQQKPGKAPKLLIY",
                        "50-56",
                        "AASSLQS",
                        "57-88",
                        "GVPSRFSGSGSGTDFTLTISSLQPEDFAAYYC",
                        "89-97",
                        "QQSYSTPRT",
                        "98-107",
                        "FGQGTKVEIK"
                    ]
                ],
                "key": "Sequence Details"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 2,
                        "type": "sequence",
                        "key": "Mature DNA Sequence"
                    },
                    {
                        "order": 50,
                        "type": "text",
                        "key": "DNA FR1"
                    },
                    {
                        "order": 51,
                        "type": "sequence",
                        "key": "DNA FR1 Sequence"
                    },
                    {
                        "order": 52,
                        "type": "text",
                        "key": "DNA CDR1"
                    },
                    {
                        "order": 53,
                        "type": "sequence",
                        "key": "DNA CDR1 Sequence"
                    },
                    {
                        "order": 60,
                        "type": "text",
                        "key": "DNA FR2"
                    },
                    {
                        "order": 61,
                        "type": "sequence",
                        "key": "DNA FR2 Sequence"
                    },
                    {
                        "order": 62,
                        "type": "text",
                        "key": "DNA CDR2"
                    },
                    {
                        "order": 63,
                        "type": "sequence",
                        "key": "DNA CDR2 Sequence"
                    },
                    {
                        "order": 70,
                        "type": "text",
                        "key": "DNA FR3"
                    },
                    {
                        "order": 71,
                        "type": "sequence",
                        "key": "DNA FR3 Sequence"
                    },
                    {
                        "order": 72,
                        "type": "text",
                        "key": "DNA CDR3"
                    },
                    {
                        "order": 73,
                        "type": "sequence",
                        "key": "DNA CDR3 Sequence"
                    },
                    {
                        "order": 80,
                        "type": "text",
                        "key": "DNA FR4"
                    },
                    {
                        "order": 81,
                        "type": "sequence",
                        "key": "DNA FR4 Sequence"
                    }
                ],
                "value": [
                    [
                        "GACATCGTGATGACCCAGTCTCCATCCTCCCTGTCTGCATCTGTAGGAGACAGAGTCACCATCACTTGCCGGGCAAGTCAGAGCATTAGCAGCTATTTAAATTGGTATCAGCAGAAACCAGGGAAAGCCCCTAAGCTCCTGATCTATGCTGCATCCAGTTTGCAAAGTGGGGTCCCATCAAGGTTCAGTGGCAGTGGATCTGGGACAGATTTCACTCTCACCATCAGCAGTCTGCAACCTGAAGATTTTGCAGCTTACTACTGTCAACAGAGTTACAGTACCCCTCGGACGTTCGGCCAAGGGACCAAGGTGGAAATCAAA",
                        "1-69",
                        "GACATCGTGATGACCCAGTCTCCATCCTCCCTGTCTGCATCTGTAGGAGACAGAGTCACCATCACTTGC",
                        "70-102",
                        "CGGGCAAGTCAGAGCATTAGCAGCTATTTAAAT",
                        "103-147",
                        "TGGTATCAGCAGAAACCAGGGAAAGCCCCTAAGCTCCTGATCTAT",
                        "148-168",
                        "GCTGCATCCAGTTTGCAAAGT",
                        "169-264",
                        "GGGGTCCCATCAAGGTTCAGTGGCAGTGGATCTGGGACAGATTTCACTCTCACCATCAGCAGTCTGCAACCTGAAGATTTTGCAGCTTACTACTGT",
                        "265-291",
                        "CAACAGAGTTACAGTACCCCTCGGACG",
                        "292-321",
                        "TTCGGCCAAGGGACCAAGGTGGAAATCAAA"
                    ]
                ],
                "key": "DNA Details"
            }
        ],
        "@timestamp": "2023-07-27T20:32:34.217404",
        "id": 11
    },
    {
        "platform_name": "ADI",
        "application_name": "Sequence",
        "entity_id": "adi-e10e89a63bcc3009413e5f57a4778b84",
        "entity_label": "1755.8574.2B7",
        "entity_name": "10681.VH1",
        "project number": "1755",
        "project name": "anti-FXIa Rev ID",
        "fusion": "8574",
        "published date": "2020-02-04T15:25:06.040000+00:00",
        "domain": "Heavy",
        "species": "Chimeric",
        "request type": "NGS",
        "v gene": [
            "IGHV5",
            "5-51",
            "IGHV5-51*03",
            ""
        ],
        "d gene": [
            "IGHD3",
            "3-3",
            "IGHD3-3*02",
            ""
        ],
        "j gene": [
            "IGHJ4",
            "4",
            "IGHJ4*03",
            ""
        ],
        "mi sequence file name": "1320_CRWJW_LC_Report_ForNextGenADI.csv",
        "strain": "[hVDJ2:03/hKAPPA1:01] [J/K]",
        "source": "Hybridoma Ab",
        "isotype": null,
        "properties": [
            {
                "value": "ADI",
                "order": 0,
                "type": "text",
                "key": "Platform Name"
            },
            {
                "value": "Sequence",
                "order": 1,
                "type": "text",
                "key": "Application Name"
            },
            {
                "value": "1755.8574.2B7",
                "id": "adi-e10e89a63bcc3009413e5f57a4778b84",
                "order": 2,
                "type": "identifier",
                "rule": "md5(platformName, applicationName, FusionId, Project Number, Material_Id, Chain_id, Sequence_idAA)",
                "key": "ID"
            },
            {
                "order": 3,
                "type": "text",
                "value": "10681.VH1",
                "key": "Name"
            },
            {
                "order": 9,
                "type": "text",
                "value": "1755",
                "key": "Project Number"
            },
            {
                "order": 10,
                "type": "text",
                "value": "anti-FXIa Rev ID",
                "key": "Project Name"
            },
            {
                "order": 11,
                "type": "text",
                "value": "2B7",
                "key": "Material Name"
            },
            {
                "order": 12,
                "type": "text",
                "value": "8574",
                "key": "Fusion"
            },
            {
                "order": 13,
                "type": "numeric",
                "value": "1755.8574.380219",
                "key": "Full Clone Name"
            },
            {
                "order": 14,
                "type": "date",
                "value": "2020-02-04T15:25:06.040Z",
                "key": "Published Date"
            },
            {
                "order": 16,
                "type": "text",
                "value": "Heavy",
                "key": "Domain"
            },
            {
                "order": 17,
                "type": "text",
                "value": "Chimeric",
                "key": "Species"
            },
            {
                "order": 18,
                "type": "numeric",
                "value": 44371,
                "key": "Sequence Id AA"
            },
            {
                "order": 19,
                "type": "numeric",
                "value": 44370,
                "key": "Sequence Id NT"
            },
            {
                "order": 20,
                "type": "sequence",
                "value": "EVQLVQSGAEVKKPGESLKISCQGSGYTFNSYWIGWVRQMPGKGLEWMGMIYPGDSDTRYSPSFQGQVTISADKSISTAYLQWRSLKASDTAMYYCARRGSYGYGNFDYWGQGTLVTVSS",
                "key": "Sequence"
            },
            {
                "order": 21,
                "type": "sequence",
                "value": "GAGGTGCAGCTGGTGCAGTCTGGAGCAGAGGTGAAAAAGCCCGGGGAGTCTCTGAAGATCTCCTGTCAGGGTTCTGGATACACCTTTAACAGCTACTGGATCGGCTGGGTGCGCCAGATGCCCGGGAAAGGCCTGGAGTGGATGGGGATGATCTATCCTGGTGACTCTGATACCAGATACAGCCCGTCCTTCCAAGGCCAGGTCACCATCTCAGCCGACAAGTCCATTAGTACCGCCTACCTGCAGTGGAGGAGCCTGAAGGCCTCGGACACCGCCATGTATTATTGTGCGAGACGGGGGAGCTATGGTTACGGGAACTTTGACTACTGGGGCCAGGGAACCCTGGTCACCGTCTCCTCA",
                "key": "DNA"
            },
            {
                "order": 22,
                "type": "numeric",
                "value": 1320,
                "key": "Master Sequence Request Id"
            },
            {
                "order": 23,
                "type": "numeric",
                "value": 10681,
                "key": "Sequence Request Id"
            },
            {
                "order": 24,
                "type": "text",
                "value": "NGS",
                "key": "Request Type"
            },
            {
                "order": 25,
                "type": "text",
                "value": [
                    "IGHV5",
                    "5-51",
                    "IGHV5-51*03",
                    ""
                ],
                "key": "V Gene"
            },
            {
                "order": 26,
                "type": "text",
                "value": [
                    "IGHD3",
                    "3-3",
                    "IGHD3-3*02",
                    ""
                ],
                "key": "D Gene"
            },
            {
                "order": 27,
                "type": "text",
                "value": [
                    "IGHJ4",
                    "4",
                    "IGHJ4*03",
                    ""
                ],
                "key": "J Gene"
            },
            {
                "order": 28,
                "type": "text",
                "value": "1320_CRWJW_LC_Report_ForNextGenADI.csv",
                "key": "Mi Sequence File Name"
            },
            {
                "order": 29,
                "type": "numeric",
                "value": "3020 ",
                "key": "Cluster Size"
            },
            {
                "order": 30,
                "type": "text",
                "value": "[hVDJ2:03/hKAPPA1:01] [J/K]",
                "key": "Strain"
            },
            {
                "order": 31,
                "type": "text",
                "value": "530905,530908,530910,530911",
                "key": "Mouse Ids"
            },
            {
                "order": 32,
                "type": "text",
                "value": "Hybridoma Ab",
                "key": "Source"
            },
            {
                "order": 33,
                "type": "text",
                "key": "Isotype"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 1,
                        "type": "sequence",
                        "key": "Mature AA Sequence"
                    },
                    {
                        "order": 10,
                        "type": "text",
                        "key": "FR1 AA"
                    },
                    {
                        "order": 11,
                        "type": "sequence",
                        "key": "FR1 AA Sequence"
                    },
                    {
                        "order": 12,
                        "type": "text",
                        "key": "CDR1 AA"
                    },
                    {
                        "order": 13,
                        "type": "sequence",
                        "key": "CDR1 AA Sequence"
                    },
                    {
                        "order": 20,
                        "type": "text",
                        "key": "FR2 AA"
                    },
                    {
                        "order": 21,
                        "type": "sequence",
                        "key": "FR2 AA Sequence"
                    },
                    {
                        "order": 22,
                        "type": "text",
                        "key": "CDR2 AA"
                    },
                    {
                        "order": 23,
                        "type": "sequence",
                        "key": "CDR2 AA Sequence"
                    },
                    {
                        "order": 30,
                        "type": "text",
                        "key": "FR3 AA"
                    },
                    {
                        "order": 31,
                        "type": "sequence",
                        "key": "FR3 AA Sequence"
                    },
                    {
                        "order": 32,
                        "type": "text",
                        "key": "CDR3 AA"
                    },
                    {
                        "order": 33,
                        "type": "sequence",
                        "key": "CDR3 AA Sequence"
                    },
                    {
                        "order": 40,
                        "type": "text",
                        "key": "FR4 AA"
                    },
                    {
                        "order": 41,
                        "type": "sequence",
                        "key": "FR4 AA Sequence"
                    }
                ],
                "value": [
                    [
                        "EVQLVQSGAEVKKPGESLKISCQGSGYTFNSYWIGWVRQMPGKGLEWMGMIYPGDSDTRYSPSFQGQVTISADKSISTAYLQWRSLKASDTAMYYCARRGSYGYGNFDYWGQGTLVTVSS",
                        "1-30",
                        "EVQLVQSGAEVKKPGESLKISCQGSGYTFN",
                        "31-35",
                        "SYWIG",
                        "36-49",
                        "WVRQMPGKGLEWMG",
                        "50-66",
                        "MIYPGDSDTRYSPSFQG",
                        "67-98",
                        "QVTISADKSISTAYLQWRSLKASDTAMYYCAR",
                        "99-109",
                        "RGSYGYGNFDY",
                        "110-120",
                        "WGQGTLVTVSS"
                    ]
                ],
                "key": "Sequence Details"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 2,
                        "type": "sequence",
                        "key": "Mature DNA Sequence"
                    },
                    {
                        "order": 50,
                        "type": "text",
                        "key": "DNA FR1"
                    },
                    {
                        "order": 51,
                        "type": "sequence",
                        "key": "DNA FR1 Sequence"
                    },
                    {
                        "order": 52,
                        "type": "text",
                        "key": "DNA CDR1"
                    },
                    {
                        "order": 53,
                        "type": "sequence",
                        "key": "DNA CDR1 Sequence"
                    },
                    {
                        "order": 60,
                        "type": "text",
                        "key": "DNA FR2"
                    },
                    {
                        "order": 61,
                        "type": "sequence",
                        "key": "DNA FR2 Sequence"
                    },
                    {
                        "order": 62,
                        "type": "text",
                        "key": "DNA CDR2"
                    },
                    {
                        "order": 63,
                        "type": "sequence",
                        "key": "DNA CDR2 Sequence"
                    },
                    {
                        "order": 70,
                        "type": "text",
                        "key": "DNA FR3"
                    },
                    {
                        "order": 71,
                        "type": "sequence",
                        "key": "DNA FR3 Sequence"
                    },
                    {
                        "order": 72,
                        "type": "text",
                        "key": "DNA CDR3"
                    },
                    {
                        "order": 73,
                        "type": "sequence",
                        "key": "DNA CDR3 Sequence"
                    },
                    {
                        "order": 80,
                        "type": "text",
                        "key": "DNA FR4"
                    },
                    {
                        "order": 81,
                        "type": "sequence",
                        "key": "DNA FR4 Sequence"
                    }
                ],
                "value": [
                    [
                        "GAGGTGCAGCTGGTGCAGTCTGGAGCAGAGGTGAAAAAGCCCGGGGAGTCTCTGAAGATCTCCTGTCAGGGTTCTGGATACACCTTTAACAGCTACTGGATCGGCTGGGTGCGCCAGATGCCCGGGAAAGGCCTGGAGTGGATGGGGATGATCTATCCTGGTGACTCTGATACCAGATACAGCCCGTCCTTCCAAGGCCAGGTCACCATCTCAGCCGACAAGTCCATTAGTACCGCCTACCTGCAGTGGAGGAGCCTGAAGGCCTCGGACACCGCCATGTATTATTGTGCGAGACGGGGGAGCTATGGTTACGGGAACTTTGACTACTGGGGCCAGGGAACCCTGGTCACCGTCTCCTCA",
                        "1-90",
                        "GAGGTGCAGCTGGTGCAGTCTGGAGCAGAGGTGAAAAAGCCCGGGGAGTCTCTGAAGATCTCCTGTCAGGGTTCTGGATACACCTTTAAC",
                        "91-105",
                        "AGCTACTGGATCGGC",
                        "106-147",
                        "TGGGTGCGCCAGATGCCCGGGAAAGGCCTGGAGTGGATGGGG",
                        "148-198",
                        "ATGATCTATCCTGGTGACTCTGATACCAGATACAGCCCGTCCTTCCAAGGC",
                        "199-294",
                        "CAGGTCACCATCTCAGCCGACAAGTCCATTAGTACCGCCTACCTGCAGTGGAGGAGCCTGAAGGCCTCGGACACCGCCATGTATTATTGTGCGAGA",
                        "295-327",
                        "CGGGGGAGCTATGGTTACGGGAACTTTGACTAC",
                        "328-360",
                        "TGGGGCCAGGGAACCCTGGTCACCGTCTCCTCA"
                    ]
                ],
                "key": "DNA Details"
            }
        ],
        "@timestamp": "2023-07-27T20:32:34.406406",
        "id": 12
    },
    {
        "platform_name": "ADI",
        "application_name": "Sequence",
        "entity_id": "adi-57ca994896f9269843f2c7c4722e100b",
        "entity_label": "1755.8574.2B12",
        "entity_name": "10686.VH2",
        "project number": "1755",
        "project name": "anti-FXIa Rev ID",
        "fusion": "8574",
        "published date": "2020-02-04T15:25:06.133000+00:00",
        "domain": "Heavy",
        "species": "Chimeric",
        "request type": "NGS",
        "v gene": [
            "IGHV3",
            "3-21",
            "IGHV3-21*04",
            ""
        ],
        "d gene": [
            "IGHD2",
            "2-15",
            "IGHD2-15*01",
            ""
        ],
        "j gene": [
            "IGHJ4",
            "4",
            "IGHJ4*03",
            ""
        ],
        "mi sequence file name": "1320_CRWJW_HC_Report_ForNextGenADI.csv",
        "strain": "[hVDJ2:03/hKAPPA1:01] [J/K]",
        "source": "Hybridoma Ab",
        "isotype": null,
        "properties": [
            {
                "value": "ADI",
                "order": 0,
                "type": "text",
                "key": "Platform Name"
            },
            {
                "value": "Sequence",
                "order": 1,
                "type": "text",
                "key": "Application Name"
            },
            {
                "value": "1755.8574.2B12",
                "id": "adi-57ca994896f9269843f2c7c4722e100b",
                "order": 2,
                "type": "identifier",
                "rule": "md5(platformName, applicationName, FusionId, Project Number, Material_Id, Chain_id, Sequence_idAA)",
                "key": "ID"
            },
            {
                "order": 3,
                "type": "text",
                "value": "10686.VH2",
                "key": "Name"
            },
            {
                "order": 9,
                "type": "text",
                "value": "1755",
                "key": "Project Number"
            },
            {
                "order": 10,
                "type": "text",
                "value": "anti-FXIa Rev ID",
                "key": "Project Name"
            },
            {
                "order": 11,
                "type": "text",
                "value": "2B12",
                "key": "Material Name"
            },
            {
                "order": 12,
                "type": "text",
                "value": "8574",
                "key": "Fusion"
            },
            {
                "order": 13,
                "type": "numeric",
                "value": "1755.8574.380238",
                "key": "Full Clone Name"
            },
            {
                "order": 14,
                "type": "date",
                "value": "2020-02-04T15:25:06.133Z",
                "key": "Published Date"
            },
            {
                "order": 16,
                "type": "text",
                "value": "Heavy",
                "key": "Domain"
            },
            {
                "order": 17,
                "type": "text",
                "value": "Chimeric",
                "key": "Species"
            },
            {
                "order": 18,
                "type": "numeric",
                "value": 44383,
                "key": "Sequence Id AA"
            },
            {
                "order": 19,
                "type": "numeric",
                "value": 44382,
                "key": "Sequence Id NT"
            },
            {
                "order": 20,
                "type": "sequence",
                "value": "EVQLVESGGGLVKPGGSLRLSCAASGFTFSSYSMNWVRQAPGKGLEWVSSITSSSNYIYYADSVKGRFTISRDNAKNSLYLQMNSLRAEDTAVYYCAKRGDTVVVVAAYYFDYWGQGTLVTVSS",
                "key": "Sequence"
            },
            {
                "order": 21,
                "type": "sequence",
                "value": "GAGGTGCAGCTGGTGGAGTCTGGGGGAGGCCTGGTCAAGCCTGGGGGGTCCCTGAGACTCTCCTGTGCAGCCTCTGGATTCACCTTCAGTAGCTATAGCATGAACTGGGTCCGCCAGGCTCCAGGGAAGGGGCTGGAGTGGGTCTCTTCCATTACTAGTAGTAGTAATTACATATACTACGCAGACTCAGTGAAGGGCCGATTCACCATCTCCAGAGACAACGCCAAGAACTCACTGTATCTGCAAATGAACAGCCTGAGAGCCGAGGACACGGCTGTGTATTACTGTGCGAAAAGGGGGGATACTGTAGTGGTCGTAGCTGCTTACTACTTTGACTACTGGGGCCAGGGAACCCTGGTCACCGTCTCCTCA",
                "key": "DNA"
            },
            {
                "order": 22,
                "type": "numeric",
                "value": 1320,
                "key": "Master Sequence Request Id"
            },
            {
                "order": 23,
                "type": "numeric",
                "value": 10686,
                "key": "Sequence Request Id"
            },
            {
                "order": 24,
                "type": "text",
                "value": "NGS",
                "key": "Request Type"
            },
            {
                "order": 25,
                "type": "text",
                "value": [
                    "IGHV3",
                    "3-21",
                    "IGHV3-21*04",
                    ""
                ],
                "key": "V Gene"
            },
            {
                "order": 26,
                "type": "text",
                "value": [
                    "IGHD2",
                    "2-15",
                    "IGHD2-15*01",
                    ""
                ],
                "key": "D Gene"
            },
            {
                "order": 27,
                "type": "text",
                "value": [
                    "IGHJ4",
                    "4",
                    "IGHJ4*03",
                    ""
                ],
                "key": "J Gene"
            },
            {
                "order": 28,
                "type": "text",
                "value": "1320_CRWJW_HC_Report_ForNextGenADI.csv",
                "key": "Mi Sequence File Name"
            },
            {
                "order": 29,
                "type": "numeric",
                "value": "816 ",
                "key": "Cluster Size"
            },
            {
                "order": 30,
                "type": "text",
                "value": "[hVDJ2:03/hKAPPA1:01] [J/K]",
                "key": "Strain"
            },
            {
                "order": 31,
                "type": "text",
                "value": "530905,530908,530910,530911",
                "key": "Mouse Ids"
            },
            {
                "order": 32,
                "type": "text",
                "value": "Hybridoma Ab",
                "key": "Source"
            },
            {
                "order": 33,
                "type": "text",
                "key": "Isotype"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 1,
                        "type": "sequence",
                        "key": "Mature AA Sequence"
                    },
                    {
                        "order": 10,
                        "type": "text",
                        "key": "FR1 AA"
                    },
                    {
                        "order": 11,
                        "type": "sequence",
                        "key": "FR1 AA Sequence"
                    },
                    {
                        "order": 12,
                        "type": "text",
                        "key": "CDR1 AA"
                    },
                    {
                        "order": 13,
                        "type": "sequence",
                        "key": "CDR1 AA Sequence"
                    },
                    {
                        "order": 20,
                        "type": "text",
                        "key": "FR2 AA"
                    },
                    {
                        "order": 21,
                        "type": "sequence",
                        "key": "FR2 AA Sequence"
                    },
                    {
                        "order": 22,
                        "type": "text",
                        "key": "CDR2 AA"
                    },
                    {
                        "order": 23,
                        "type": "sequence",
                        "key": "CDR2 AA Sequence"
                    },
                    {
                        "order": 30,
                        "type": "text",
                        "key": "FR3 AA"
                    },
                    {
                        "order": 31,
                        "type": "sequence",
                        "key": "FR3 AA Sequence"
                    },
                    {
                        "order": 32,
                        "type": "text",
                        "key": "CDR3 AA"
                    },
                    {
                        "order": 33,
                        "type": "sequence",
                        "key": "CDR3 AA Sequence"
                    },
                    {
                        "order": 40,
                        "type": "text",
                        "key": "FR4 AA"
                    },
                    {
                        "order": 41,
                        "type": "sequence",
                        "key": "FR4 AA Sequence"
                    }
                ],
                "value": [
                    [
                        "EVQLVESGGGLVKPGGSLRLSCAASGFTFSSYSMNWVRQAPGKGLEWVSSITSSSNYIYYADSVKGRFTISRDNAKNSLYLQMNSLRAEDTAVYYCAKRGDTVVVVAAYYFDYWGQGTLVTVSS",
                        "1-30",
                        "EVQLVESGGGLVKPGGSLRLSCAASGFTFS",
                        "31-35",
                        "SYSMN",
                        "36-49",
                        "WVRQAPGKGLEWVS",
                        "50-66",
                        "SITSSSNYIYYADSVKG",
                        "67-98",
                        "RFTISRDNAKNSLYLQMNSLRAEDTAVYYCAK",
                        "99-113",
                        "RGDTVVVVAAYYFDY",
                        "114-124",
                        "WGQGTLVTVSS"
                    ]
                ],
                "key": "Sequence Details"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 2,
                        "type": "sequence",
                        "key": "Mature DNA Sequence"
                    },
                    {
                        "order": 50,
                        "type": "text",
                        "key": "DNA FR1"
                    },
                    {
                        "order": 51,
                        "type": "sequence",
                        "key": "DNA FR1 Sequence"
                    },
                    {
                        "order": 52,
                        "type": "text",
                        "key": "DNA CDR1"
                    },
                    {
                        "order": 53,
                        "type": "sequence",
                        "key": "DNA CDR1 Sequence"
                    },
                    {
                        "order": 60,
                        "type": "text",
                        "key": "DNA FR2"
                    },
                    {
                        "order": 61,
                        "type": "sequence",
                        "key": "DNA FR2 Sequence"
                    },
                    {
                        "order": 62,
                        "type": "text",
                        "key": "DNA CDR2"
                    },
                    {
                        "order": 63,
                        "type": "sequence",
                        "key": "DNA CDR2 Sequence"
                    },
                    {
                        "order": 70,
                        "type": "text",
                        "key": "DNA FR3"
                    },
                    {
                        "order": 71,
                        "type": "sequence",
                        "key": "DNA FR3 Sequence"
                    },
                    {
                        "order": 72,
                        "type": "text",
                        "key": "DNA CDR3"
                    },
                    {
                        "order": 73,
                        "type": "sequence",
                        "key": "DNA CDR3 Sequence"
                    },
                    {
                        "order": 80,
                        "type": "text",
                        "key": "DNA FR4"
                    },
                    {
                        "order": 81,
                        "type": "sequence",
                        "key": "DNA FR4 Sequence"
                    }
                ],
                "value": [
                    [
                        "GAGGTGCAGCTGGTGGAGTCTGGGGGAGGCCTGGTCAAGCCTGGGGGGTCCCTGAGACTCTCCTGTGCAGCCTCTGGATTCACCTTCAGTAGCTATAGCATGAACTGGGTCCGCCAGGCTCCAGGGAAGGGGCTGGAGTGGGTCTCTTCCATTACTAGTAGTAGTAATTACATATACTACGCAGACTCAGTGAAGGGCCGATTCACCATCTCCAGAGACAACGCCAAGAACTCACTGTATCTGCAAATGAACAGCCTGAGAGCCGAGGACACGGCTGTGTATTACTGTGCGAAAAGGGGGGATACTGTAGTGGTCGTAGCTGCTTACTACTTTGACTACTGGGGCCAGGGAACCCTGGTCACCGTCTCCTCA",
                        "1-90",
                        "GAGGTGCAGCTGGTGGAGTCTGGGGGAGGCCTGGTCAAGCCTGGGGGGTCCCTGAGACTCTCCTGTGCAGCCTCTGGATTCACCTTCAGT",
                        "91-105",
                        "AGCTATAGCATGAAC",
                        "106-147",
                        "TGGGTCCGCCAGGCTCCAGGGAAGGGGCTGGAGTGGGTCTCT",
                        "148-198",
                        "TCCATTACTAGTAGTAGTAATTACATATACTACGCAGACTCAGTGAAGGGC",
                        "199-294",
                        "CGATTCACCATCTCCAGAGACAACGCCAAGAACTCACTGTATCTGCAAATGAACAGCCTGAGAGCCGAGGACACGGCTGTGTATTACTGTGCGAAA",
                        "295-339",
                        "AGGGGGGATACTGTAGTGGTCGTAGCTGCTTACTACTTTGACTAC",
                        "340-372",
                        "TGGGGCCAGGGAACCCTGGTCACCGTCTCCTCA"
                    ]
                ],
                "key": "DNA Details"
            }
        ],
        "@timestamp": "2023-07-27T20:32:34.480407",
        "id": 13
    },
    {
        "platform_name": "ADI",
        "application_name": "Sequence",
        "entity_id": "adi-6a9230ea279902646693abec0011a42d",
        "entity_label": "1755.8574.4H5",
        "entity_name": "10943.VH1",
        "project number": "1755",
        "project name": "anti-FXIa Rev ID",
        "fusion": "8574",
        "published date": "2020-02-04T15:25:13.413000+00:00",
        "domain": "Heavy",
        "species": "Chimeric",
        "request type": "NGS",
        "v gene": [
            "IGHV4",
            "4-59",
            "IGHV4-59*08",
            ""
        ],
        "d gene": [
            "IGHD3",
            "3-10",
            "IGHD3-10*01",
            ""
        ],
        "j gene": [
            "IGHJ6",
            "6",
            "IGHJ6*02",
            ""
        ],
        "mi sequence file name": "1320_CRWJW_HC_Report_ForNextGenADI.csv",
        "strain": "[hVDJ2:03/hKAPPA1:01] [J/K]",
        "source": "Hybridoma Ab",
        "isotype": null,
        "properties": [
            {
                "value": "ADI",
                "order": 0,
                "type": "text",
                "key": "Platform Name"
            },
            {
                "value": "Sequence",
                "order": 1,
                "type": "text",
                "key": "Application Name"
            },
            {
                "value": "1755.8574.4H5",
                "id": "adi-6a9230ea279902646693abec0011a42d",
                "order": 2,
                "type": "identifier",
                "rule": "md5(platformName, applicationName, FusionId, Project Number, Material_Id, Chain_id, Sequence_idAA)",
                "key": "ID"
            },
            {
                "order": 3,
                "type": "text",
                "value": "10943.VH1",
                "key": "Name"
            },
            {
                "order": 9,
                "type": "text",
                "value": "1755",
                "key": "Project Number"
            },
            {
                "order": 10,
                "type": "text",
                "value": "anti-FXIa Rev ID",
                "key": "Project Name"
            },
            {
                "order": 11,
                "type": "text",
                "value": "4H5",
                "key": "Material Name"
            },
            {
                "order": 12,
                "type": "text",
                "value": "8574",
                "key": "Fusion"
            },
            {
                "order": 13,
                "type": "numeric",
                "value": "1755.8574.380224",
                "key": "Full Clone Name"
            },
            {
                "order": 14,
                "type": "date",
                "value": "2020-02-04T15:25:13.413Z",
                "key": "Published Date"
            },
            {
                "order": 16,
                "type": "text",
                "value": "Heavy",
                "key": "Domain"
            },
            {
                "order": 17,
                "type": "text",
                "value": "Chimeric",
                "key": "Species"
            },
            {
                "order": 18,
                "type": "numeric",
                "value": 44987,
                "key": "Sequence Id AA"
            },
            {
                "order": 19,
                "type": "numeric",
                "value": 44986,
                "key": "Sequence Id NT"
            },
            {
                "order": 20,
                "type": "sequence",
                "value": "QVQLQESGPGLVKPSETLSLTCTVSGGSISSYYWSWIRQPPGKGLEWIGYIYYSGSTNYNPSLKSRVTISVDTSKNQFSLKLSSVTAADTAVYYCARAGITMVRGLTDYYYYGMDVWGQGTTVTVSS",
                "key": "Sequence"
            },
            {
                "order": 21,
                "type": "sequence",
                "value": "CAGGTGCAGCTGCAGGAGTCGGGCCCAGGACTGGTGAAGCCTTCGGAGACCCTGTCCCTCACCTGCACTGTCTCTGGTGGCTCCATCAGTAGTTACTACTGGAGCTGGATCCGGCAGCCCCCAGGGAAGGGACTGGAGTGGATTGGGTATATCTATTACAGTGGGAGCACCAACTACAACCCCTCCCTCAAGAGTCGAGTCACCATATCAGTAGACACGTCCAAGAACCAGTTCTCCCTGAAGCTGAGCTCTGTGACCGCTGCGGACACGGCCGTGTATTACTGTGCGAGAGCAGGTATTACTATGGTTCGGGGACTTACGGACTACTACTACTACGGTATGGACGTCTGGGGCCAAGGGACCACGGTCACCGTCTCCTCA",
                "key": "DNA"
            },
            {
                "order": 22,
                "type": "numeric",
                "value": 1320,
                "key": "Master Sequence Request Id"
            },
            {
                "order": 23,
                "type": "numeric",
                "value": 10943,
                "key": "Sequence Request Id"
            },
            {
                "order": 24,
                "type": "text",
                "value": "NGS",
                "key": "Request Type"
            },
            {
                "order": 25,
                "type": "text",
                "value": [
                    "IGHV4",
                    "4-59",
                    "IGHV4-59*08",
                    ""
                ],
                "key": "V Gene"
            },
            {
                "order": 26,
                "type": "text",
                "value": [
                    "IGHD3",
                    "3-10",
                    "IGHD3-10*01",
                    ""
                ],
                "key": "D Gene"
            },
            {
                "order": 27,
                "type": "text",
                "value": [
                    "IGHJ6",
                    "6",
                    "IGHJ6*02",
                    ""
                ],
                "key": "J Gene"
            },
            {
                "order": 28,
                "type": "text",
                "value": "1320_CRWJW_HC_Report_ForNextGenADI.csv",
                "key": "Mi Sequence File Name"
            },
            {
                "order": 29,
                "type": "numeric",
                "value": "4950 ",
                "key": "Cluster Size"
            },
            {
                "order": 30,
                "type": "text",
                "value": "[hVDJ2:03/hKAPPA1:01] [J/K]",
                "key": "Strain"
            },
            {
                "order": 31,
                "type": "text",
                "value": "530905,530908,530910,530911",
                "key": "Mouse Ids"
            },
            {
                "order": 32,
                "type": "text",
                "value": "Hybridoma Ab",
                "key": "Source"
            },
            {
                "order": 33,
                "type": "text",
                "key": "Isotype"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 1,
                        "type": "sequence",
                        "key": "Mature AA Sequence"
                    },
                    {
                        "order": 10,
                        "type": "text",
                        "key": "FR1 AA"
                    },
                    {
                        "order": 11,
                        "type": "sequence",
                        "key": "FR1 AA Sequence"
                    },
                    {
                        "order": 12,
                        "type": "text",
                        "key": "CDR1 AA"
                    },
                    {
                        "order": 13,
                        "type": "sequence",
                        "key": "CDR1 AA Sequence"
                    },
                    {
                        "order": 20,
                        "type": "text",
                        "key": "FR2 AA"
                    },
                    {
                        "order": 21,
                        "type": "sequence",
                        "key": "FR2 AA Sequence"
                    },
                    {
                        "order": 22,
                        "type": "text",
                        "key": "CDR2 AA"
                    },
                    {
                        "order": 23,
                        "type": "sequence",
                        "key": "CDR2 AA Sequence"
                    },
                    {
                        "order": 30,
                        "type": "text",
                        "key": "FR3 AA"
                    },
                    {
                        "order": 31,
                        "type": "sequence",
                        "key": "FR3 AA Sequence"
                    },
                    {
                        "order": 32,
                        "type": "text",
                        "key": "CDR3 AA"
                    },
                    {
                        "order": 33,
                        "type": "sequence",
                        "key": "CDR3 AA Sequence"
                    },
                    {
                        "order": 40,
                        "type": "text",
                        "key": "FR4 AA"
                    },
                    {
                        "order": 41,
                        "type": "sequence",
                        "key": "FR4 AA Sequence"
                    }
                ],
                "value": [
                    [
                        "QVQLQESGPGLVKPSETLSLTCTVSGGSISSYYWSWIRQPPGKGLEWIGYIYYSGSTNYNPSLKSRVTISVDTSKNQFSLKLSSVTAADTAVYYCARAGITMVRGLTDYYYYGMDVWGQGTTVTVSS",
                        "1-30",
                        "QVQLQESGPGLVKPSETLSLTCTVSGGSIS",
                        "31-35",
                        "SYYWS",
                        "36-49",
                        "WIRQPPGKGLEWIG",
                        "50-65",
                        "YIYYSGSTNYNPSLKS",
                        "66-97",
                        "RVTISVDTSKNQFSLKLSSVTAADTAVYYCAR",
                        "98-116",
                        "AGITMVRGLTDYYYYGMDV",
                        "117-127",
                        "WGQGTTVTVSS"
                    ]
                ],
                "key": "Sequence Details"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 2,
                        "type": "sequence",
                        "key": "Mature DNA Sequence"
                    },
                    {
                        "order": 50,
                        "type": "text",
                        "key": "DNA FR1"
                    },
                    {
                        "order": 51,
                        "type": "sequence",
                        "key": "DNA FR1 Sequence"
                    },
                    {
                        "order": 52,
                        "type": "text",
                        "key": "DNA CDR1"
                    },
                    {
                        "order": 53,
                        "type": "sequence",
                        "key": "DNA CDR1 Sequence"
                    },
                    {
                        "order": 60,
                        "type": "text",
                        "key": "DNA FR2"
                    },
                    {
                        "order": 61,
                        "type": "sequence",
                        "key": "DNA FR2 Sequence"
                    },
                    {
                        "order": 62,
                        "type": "text",
                        "key": "DNA CDR2"
                    },
                    {
                        "order": 63,
                        "type": "sequence",
                        "key": "DNA CDR2 Sequence"
                    },
                    {
                        "order": 70,
                        "type": "text",
                        "key": "DNA FR3"
                    },
                    {
                        "order": 71,
                        "type": "sequence",
                        "key": "DNA FR3 Sequence"
                    },
                    {
                        "order": 72,
                        "type": "text",
                        "key": "DNA CDR3"
                    },
                    {
                        "order": 73,
                        "type": "sequence",
                        "key": "DNA CDR3 Sequence"
                    },
                    {
                        "order": 80,
                        "type": "text",
                        "key": "DNA FR4"
                    },
                    {
                        "order": 81,
                        "type": "sequence",
                        "key": "DNA FR4 Sequence"
                    }
                ],
                "value": [
                    [
                        "CAGGTGCAGCTGCAGGAGTCGGGCCCAGGACTGGTGAAGCCTTCGGAGACCCTGTCCCTCACCTGCACTGTCTCTGGTGGCTCCATCAGTAGTTACTACTGGAGCTGGATCCGGCAGCCCCCAGGGAAGGGACTGGAGTGGATTGGGTATATCTATTACAGTGGGAGCACCAACTACAACCCCTCCCTCAAGAGTCGAGTCACCATATCAGTAGACACGTCCAAGAACCAGTTCTCCCTGAAGCTGAGCTCTGTGACCGCTGCGGACACGGCCGTGTATTACTGTGCGAGAGCAGGTATTACTATGGTTCGGGGACTTACGGACTACTACTACTACGGTATGGACGTCTGGGGCCAAGGGACCACGGTCACCGTCTCCTCA",
                        "1-90",
                        "CAGGTGCAGCTGCAGGAGTCGGGCCCAGGACTGGTGAAGCCTTCGGAGACCCTGTCCCTCACCTGCACTGTCTCTGGTGGCTCCATCAGT",
                        "91-105",
                        "AGTTACTACTGGAGC",
                        "106-147",
                        "TGGATCCGGCAGCCCCCAGGGAAGGGACTGGAGTGGATTGGG",
                        "148-195",
                        "TATATCTATTACAGTGGGAGCACCAACTACAACCCCTCCCTCAAGAGT",
                        "196-291",
                        "CGAGTCACCATATCAGTAGACACGTCCAAGAACCAGTTCTCCCTGAAGCTGAGCTCTGTGACCGCTGCGGACACGGCCGTGTATTACTGTGCGAGA",
                        "292-348",
                        "GCAGGTATTACTATGGTTCGGGGACTTACGGACTACTACTACTACGGTATGGACGTC",
                        "349-381",
                        "TGGGGCCAAGGGACCACGGTCACCGTCTCCTCA"
                    ]
                ],
                "key": "DNA Details"
            }
        ],
        "@timestamp": "2023-07-27T20:32:34.662402",
        "id": 14
    },
    {
        "platform_name": "ADI",
        "application_name": "Sequence",
        "entity_id": "adi-df06d5fc918b88c145451d54ec781ab2",
        "entity_label": "1852.mCCR8.2-mg2a_RAS_Ab_02",
        "entity_name": "30610-H",
        "project number": "1852",
        "project name": "CCR8",
        "fusion": null,
        "published date": null,
        "domain": "Heavy",
        "species": "Mouse",
        "request type": null,
        "v gene": null,
        "d gene": null,
        "j gene": null,
        "mi sequence file name": null,
        "strain": null,
        "source": "Recombinant Ab",
        "isotype": null,
        "properties": [
            {
                "value": "ADI",
                "order": 0,
                "type": "text",
                "key": "Platform Name"
            },
            {
                "value": "Sequence",
                "order": 1,
                "type": "text",
                "key": "Application Name"
            },
            {
                "value": "1852.mCCR8.2-mg2a_RAS_Ab_02",
                "id": "adi-df06d5fc918b88c145451d54ec781ab2",
                "order": 2,
                "type": "identifier",
                "rule": "md5(platformName, applicationName, FusionId, Project Number, Material_Id, Chain_id, Sequence_idAA)",
                "key": "ID"
            },
            {
                "order": 3,
                "type": "text",
                "value": "30610-H",
                "key": "Name"
            },
            {
                "order": 9,
                "type": "text",
                "value": "1852",
                "key": "Project Number"
            },
            {
                "order": 10,
                "type": "text",
                "value": "CCR8",
                "key": "Project Name"
            },
            {
                "order": 11,
                "type": "text",
                "value": "mCCR8.2-mg2a_RAS_Ab_02",
                "key": "Material Name"
            },
            {
                "order": 12,
                "type": "text",
                "key": "Fusion"
            },
            {
                "order": 13,
                "type": "numeric",
                "value": "1852.384538",
                "key": "Full Clone Name"
            },
            {
                "order": 14,
                "type": "date",
                "key": "Published Date"
            },
            {
                "order": 16,
                "type": "text",
                "value": "Heavy",
                "key": "Domain"
            },
            {
                "order": 17,
                "type": "text",
                "value": "Mouse",
                "key": "Species"
            },
            {
                "order": 18,
                "type": "numeric",
                "value": 30610,
                "key": "Sequence Id AA"
            },
            {
                "order": 19,
                "type": "numeric",
                "key": "Sequence Id NT"
            },
            {
                "order": 20,
                "type": "sequence",
                "value": "QVQLKESGPGLVQPSQTLSLTCTVSRFSLTSYNVHWIRQPTGKGLEWMGVIWPGGSTDYNSALKSRLSISRDTSKRQVFLKMNSPQTEDIATYYCARGRFGGYGPYYFDYWGQGVMVTVSSAKTTAPSVYPLAPVCGDTTGSSVTLGCLVKGYFPEPVTLTWNSGSLSSGVHTFPAVLQSDLYTLSSSVTVTSSTWPSQSITCNVAHPASSTKVDKKIEPRGPTIKPCPPCKCPAPNLLGGPSVFIFPPKIKDVLMISLSPIVTCVVVDVSEDDPDVQISWFVNNVEVHTAQTQTHREDYNSTLRVVSALPIQHQDWMSGKEFKCKVNNKDLPAPIERTISKPKGSVRAPQVYVLPPPEEEMTKKQVTLTCMVTDFMPEDIYVEWTNNGKTELNYKNTEPVLDSDGSYFMYSKLRVEKKNWVERNSYSCSVVHEGLHNHHTTKSFSRTPG",
                "key": "Sequence"
            },
            {
                "order": 21,
                "type": "sequence",
                "key": "DNA"
            },
            {
                "order": 22,
                "type": "numeric",
                "key": "Master Sequence Request Id"
            },
            {
                "order": 23,
                "type": "numeric",
                "key": "Sequence Request Id"
            },
            {
                "order": 24,
                "type": "text",
                "key": "Request Type"
            },
            {
                "order": 25,
                "type": "text",
                "value": null,
                "key": "V Gene"
            },
            {
                "order": 26,
                "type": "text",
                "value": null,
                "key": "D Gene"
            },
            {
                "order": 27,
                "type": "text",
                "value": null,
                "key": "J Gene"
            },
            {
                "order": 28,
                "type": "text",
                "key": "Mi Sequence File Name"
            },
            {
                "order": 29,
                "type": "numeric",
                "key": "Cluster Size"
            },
            {
                "order": 30,
                "type": "text",
                "value": null,
                "key": "Strain"
            },
            {
                "order": 31,
                "type": "text",
                "value": null,
                "key": "Mouse Ids"
            },
            {
                "order": 32,
                "type": "text",
                "value": "Recombinant Ab",
                "key": "Source"
            },
            {
                "order": 33,
                "type": "text",
                "key": "Isotype"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 1,
                        "type": "sequence",
                        "key": "Mature AA Sequence"
                    },
                    {
                        "order": 10,
                        "type": "text",
                        "key": "FR1 AA"
                    },
                    {
                        "order": 11,
                        "type": "sequence",
                        "key": "FR1 AA Sequence"
                    },
                    {
                        "order": 12,
                        "type": "text",
                        "key": "CDR1 AA"
                    },
                    {
                        "order": 13,
                        "type": "sequence",
                        "key": "CDR1 AA Sequence"
                    },
                    {
                        "order": 20,
                        "type": "text",
                        "key": "FR2 AA"
                    },
                    {
                        "order": 21,
                        "type": "sequence",
                        "key": "FR2 AA Sequence"
                    },
                    {
                        "order": 22,
                        "type": "text",
                        "key": "CDR2 AA"
                    },
                    {
                        "order": 23,
                        "type": "sequence",
                        "key": "CDR2 AA Sequence"
                    },
                    {
                        "order": 30,
                        "type": "text",
                        "key": "FR3 AA"
                    },
                    {
                        "order": 31,
                        "type": "sequence",
                        "key": "FR3 AA Sequence"
                    },
                    {
                        "order": 32,
                        "type": "text",
                        "key": "CDR3 AA"
                    },
                    {
                        "order": 33,
                        "type": "sequence",
                        "key": "CDR3 AA Sequence"
                    },
                    {
                        "order": 40,
                        "type": "text",
                        "key": "FR4 AA"
                    },
                    {
                        "order": 41,
                        "type": "sequence",
                        "key": "FR4 AA Sequence"
                    }
                ],
                "value": [
                    [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ],
                "key": "Sequence Details"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 2,
                        "type": "sequence",
                        "key": "Mature DNA Sequence"
                    },
                    {
                        "order": 50,
                        "type": "text",
                        "key": "DNA FR1"
                    },
                    {
                        "order": 51,
                        "type": "sequence",
                        "key": "DNA FR1 Sequence"
                    },
                    {
                        "order": 52,
                        "type": "text",
                        "key": "DNA CDR1"
                    },
                    {
                        "order": 53,
                        "type": "sequence",
                        "key": "DNA CDR1 Sequence"
                    },
                    {
                        "order": 60,
                        "type": "text",
                        "key": "DNA FR2"
                    },
                    {
                        "order": 61,
                        "type": "sequence",
                        "key": "DNA FR2 Sequence"
                    },
                    {
                        "order": 62,
                        "type": "text",
                        "key": "DNA CDR2"
                    },
                    {
                        "order": 63,
                        "type": "sequence",
                        "key": "DNA CDR2 Sequence"
                    },
                    {
                        "order": 70,
                        "type": "text",
                        "key": "DNA FR3"
                    },
                    {
                        "order": 71,
                        "type": "sequence",
                        "key": "DNA FR3 Sequence"
                    },
                    {
                        "order": 72,
                        "type": "text",
                        "key": "DNA CDR3"
                    },
                    {
                        "order": 73,
                        "type": "sequence",
                        "key": "DNA CDR3 Sequence"
                    },
                    {
                        "order": 80,
                        "type": "text",
                        "key": "DNA FR4"
                    },
                    {
                        "order": 81,
                        "type": "sequence",
                        "key": "DNA FR4 Sequence"
                    }
                ],
                "value": [
                    [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ],
                "key": "DNA Details"
            }
        ],
        "@timestamp": "2023-07-27T20:32:35.891407",
        "id": 15
    },
    {
        "platform_name": "ADI",
        "application_name": "Sequence",
        "entity_id": "adi-582c750defed823cdbbaf232b65b049e",
        "entity_label": "1469.DT.1D12-mg2b_RAS_Ab_02",
        "entity_name": "30615-K",
        "project number": "1469",
        "project name": "Diphtheria Toxin",
        "fusion": null,
        "published date": null,
        "domain": "KappaLight",
        "species": "Mouse",
        "request type": null,
        "v gene": null,
        "d gene": null,
        "j gene": null,
        "mi sequence file name": null,
        "strain": null,
        "source": "Recombinant Ab",
        "isotype": null,
        "properties": [
            {
                "value": "ADI",
                "order": 0,
                "type": "text",
                "key": "Platform Name"
            },
            {
                "value": "Sequence",
                "order": 1,
                "type": "text",
                "key": "Application Name"
            },
            {
                "value": "1469.DT.1D12-mg2b_RAS_Ab_02",
                "id": "adi-582c750defed823cdbbaf232b65b049e",
                "order": 2,
                "type": "identifier",
                "rule": "md5(platformName, applicationName, FusionId, Project Number, Material_Id, Chain_id, Sequence_idAA)",
                "key": "ID"
            },
            {
                "order": 3,
                "type": "text",
                "value": "30615-K",
                "key": "Name"
            },
            {
                "order": 9,
                "type": "text",
                "value": "1469",
                "key": "Project Number"
            },
            {
                "order": 10,
                "type": "text",
                "value": "Diphtheria Toxin",
                "key": "Project Name"
            },
            {
                "order": 11,
                "type": "text",
                "value": "DT.1D12-mg2b_RAS_Ab_02",
                "key": "Material Name"
            },
            {
                "order": 12,
                "type": "text",
                "key": "Fusion"
            },
            {
                "order": 13,
                "type": "numeric",
                "value": "1469.378623",
                "key": "Full Clone Name"
            },
            {
                "order": 14,
                "type": "date",
                "key": "Published Date"
            },
            {
                "order": 16,
                "type": "text",
                "value": "KappaLight",
                "key": "Domain"
            },
            {
                "order": 17,
                "type": "text",
                "value": "Mouse",
                "key": "Species"
            },
            {
                "order": 18,
                "type": "numeric",
                "value": 30615,
                "key": "Sequence Id AA"
            },
            {
                "order": 19,
                "type": "numeric",
                "key": "Sequence Id NT"
            },
            {
                "order": 20,
                "type": "sequence",
                "value": "EIVLTQSPGTLSLSPGERATLSCRASQSVSSTYLAWYQQKPGQAPRLLIYGASSRATGIPDRFSGSGSGTDFTLTISRLEPEDFAVYYCQQYGGSTITFGQGTRLEIKRADAAPTVSIFPPSSEQLTSGGASVVCFLNNFYPKDINVKWKIDGSERQNGVLNSWTDQDSKDSTYSMSSTLTLTKDEYERHNSYTCEATHKTSTSPIVKSFNRNEC",
                "key": "Sequence"
            },
            {
                "order": 21,
                "type": "sequence",
                "key": "DNA"
            },
            {
                "order": 22,
                "type": "numeric",
                "key": "Master Sequence Request Id"
            },
            {
                "order": 23,
                "type": "numeric",
                "key": "Sequence Request Id"
            },
            {
                "order": 24,
                "type": "text",
                "key": "Request Type"
            },
            {
                "order": 25,
                "type": "text",
                "value": null,
                "key": "V Gene"
            },
            {
                "order": 26,
                "type": "text",
                "value": null,
                "key": "D Gene"
            },
            {
                "order": 27,
                "type": "text",
                "value": null,
                "key": "J Gene"
            },
            {
                "order": 28,
                "type": "text",
                "key": "Mi Sequence File Name"
            },
            {
                "order": 29,
                "type": "numeric",
                "key": "Cluster Size"
            },
            {
                "order": 30,
                "type": "text",
                "value": null,
                "key": "Strain"
            },
            {
                "order": 31,
                "type": "text",
                "value": null,
                "key": "Mouse Ids"
            },
            {
                "order": 32,
                "type": "text",
                "value": "Recombinant Ab",
                "key": "Source"
            },
            {
                "order": 33,
                "type": "text",
                "key": "Isotype"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 1,
                        "type": "sequence",
                        "key": "Mature AA Sequence"
                    },
                    {
                        "order": 10,
                        "type": "text",
                        "key": "FR1 AA"
                    },
                    {
                        "order": 11,
                        "type": "sequence",
                        "key": "FR1 AA Sequence"
                    },
                    {
                        "order": 12,
                        "type": "text",
                        "key": "CDR1 AA"
                    },
                    {
                        "order": 13,
                        "type": "sequence",
                        "key": "CDR1 AA Sequence"
                    },
                    {
                        "order": 20,
                        "type": "text",
                        "key": "FR2 AA"
                    },
                    {
                        "order": 21,
                        "type": "sequence",
                        "key": "FR2 AA Sequence"
                    },
                    {
                        "order": 22,
                        "type": "text",
                        "key": "CDR2 AA"
                    },
                    {
                        "order": 23,
                        "type": "sequence",
                        "key": "CDR2 AA Sequence"
                    },
                    {
                        "order": 30,
                        "type": "text",
                        "key": "FR3 AA"
                    },
                    {
                        "order": 31,
                        "type": "sequence",
                        "key": "FR3 AA Sequence"
                    },
                    {
                        "order": 32,
                        "type": "text",
                        "key": "CDR3 AA"
                    },
                    {
                        "order": 33,
                        "type": "sequence",
                        "key": "CDR3 AA Sequence"
                    },
                    {
                        "order": 40,
                        "type": "text",
                        "key": "FR4 AA"
                    },
                    {
                        "order": 41,
                        "type": "sequence",
                        "key": "FR4 AA Sequence"
                    }
                ],
                "value": [
                    [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ],
                "key": "Sequence Details"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 2,
                        "type": "sequence",
                        "key": "Mature DNA Sequence"
                    },
                    {
                        "order": 50,
                        "type": "text",
                        "key": "DNA FR1"
                    },
                    {
                        "order": 51,
                        "type": "sequence",
                        "key": "DNA FR1 Sequence"
                    },
                    {
                        "order": 52,
                        "type": "text",
                        "key": "DNA CDR1"
                    },
                    {
                        "order": 53,
                        "type": "sequence",
                        "key": "DNA CDR1 Sequence"
                    },
                    {
                        "order": 60,
                        "type": "text",
                        "key": "DNA FR2"
                    },
                    {
                        "order": 61,
                        "type": "sequence",
                        "key": "DNA FR2 Sequence"
                    },
                    {
                        "order": 62,
                        "type": "text",
                        "key": "DNA CDR2"
                    },
                    {
                        "order": 63,
                        "type": "sequence",
                        "key": "DNA CDR2 Sequence"
                    },
                    {
                        "order": 70,
                        "type": "text",
                        "key": "DNA FR3"
                    },
                    {
                        "order": 71,
                        "type": "sequence",
                        "key": "DNA FR3 Sequence"
                    },
                    {
                        "order": 72,
                        "type": "text",
                        "key": "DNA CDR3"
                    },
                    {
                        "order": 73,
                        "type": "sequence",
                        "key": "DNA CDR3 Sequence"
                    },
                    {
                        "order": 80,
                        "type": "text",
                        "key": "DNA FR4"
                    },
                    {
                        "order": 81,
                        "type": "sequence",
                        "key": "DNA FR4 Sequence"
                    }
                ],
                "value": [
                    [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ],
                "key": "DNA Details"
            }
        ],
        "@timestamp": "2023-07-27T20:32:35.927405",
        "id": 16
    },
    {
        "platform_name": "ADI",
        "application_name": "Sequence",
        "entity_id": "adi-994108ab7e3901ece8d92f91c8b1c4b7",
        "entity_label": "1865.7740.7B2",
        "entity_name": "2210.VH1",
        "project number": "1865",
        "project name": "CD112R/PVRIG",
        "fusion": "7740",
        "published date": "2019-02-14T12:58:13.087000+00:00",
        "domain": "Heavy",
        "species": "Human",
        "request type": "NGS",
        "v gene": [
            "IGHV4",
            "4-34",
            "IGHV4-34*07",
            ""
        ],
        "d gene": [
            "IGHD3",
            "3-10",
            "IGHD3-10*02",
            ""
        ],
        "j gene": [
            "IGHJ5",
            "5",
            "IGHJ5*02",
            ""
        ],
        "mi sequence file name": "1185_Box25_Report_LC.csv",
        "strain": "HCo38:12 x HCo42:01 [J/K]",
        "source": "Hybridoma Ab",
        "isotype": null,
        "properties": [
            {
                "value": "ADI",
                "order": 0,
                "type": "text",
                "key": "Platform Name"
            },
            {
                "value": "Sequence",
                "order": 1,
                "type": "text",
                "key": "Application Name"
            },
            {
                "value": "1865.7740.7B2",
                "id": "adi-994108ab7e3901ece8d92f91c8b1c4b7",
                "order": 2,
                "type": "identifier",
                "rule": "md5(platformName, applicationName, FusionId, Project Number, Material_Id, Chain_id, Sequence_idAA)",
                "key": "ID"
            },
            {
                "order": 3,
                "type": "text",
                "value": "2210.VH1",
                "key": "Name"
            },
            {
                "order": 9,
                "type": "text",
                "value": "1865",
                "key": "Project Number"
            },
            {
                "order": 10,
                "type": "text",
                "value": "CD112R/PVRIG",
                "key": "Project Name"
            },
            {
                "order": 11,
                "type": "text",
                "value": "7B2",
                "key": "Material Name"
            },
            {
                "order": 12,
                "type": "text",
                "value": "7740",
                "key": "Fusion"
            },
            {
                "order": 13,
                "type": "numeric",
                "value": "1865.7740.362683",
                "key": "Full Clone Name"
            },
            {
                "order": 14,
                "type": "date",
                "value": "2019-02-14T12:58:13.087Z",
                "key": "Published Date"
            },
            {
                "order": 16,
                "type": "text",
                "value": "Heavy",
                "key": "Domain"
            },
            {
                "order": 17,
                "type": "text",
                "value": "Human",
                "key": "Species"
            },
            {
                "order": 18,
                "type": "numeric",
                "value": 19402,
                "key": "Sequence Id AA"
            },
            {
                "order": 19,
                "type": "numeric",
                "value": 19401,
                "key": "Sequence Id NT"
            },
            {
                "order": 20,
                "type": "sequence",
                "value": "QVQLQQWGAGLLKPSETLSLTCAVYGGSFSGYYWSWIRQPPGKGLEWIGEINHSGSTNYNPSLKSRVTISVDTSKNQFSLKLNSVTAADTAVYYCARGLLGLNWFDPWGQGTLVTVSS",
                "key": "Sequence"
            },
            {
                "order": 21,
                "type": "sequence",
                "value": "CAGGTGCAGCTACAACAGTGGGGCGCAGGACTGTTGAAGCCTTCGGAGACCCTGTCCCTCACCTGCGCTGTCTATGGTGGGTCCTTCAGTGGTTACTACTGGAGCTGGATCCGCCAGCCCCCAGGGAAGGGGCTGGAGTGGATTGGGGAAATCAATCATAGTGGAAGCACCAACTACAACCCGTCCCTCAAGAGTCGAGTCACCATATCAGTAGACACGTCCAAGAACCAGTTCTCCCTGAAGCTGAACTCTGTGACCGCCGCGGACACGGCTGTGTATTACTGTGCGAGAGGCCTGCTGGGGCTCAACTGGTTCGACCCCTGGGGCCAGGGAACCCTGGTCACCGTCTCCTCA",
                "key": "DNA"
            },
            {
                "order": 22,
                "type": "numeric",
                "value": 1185,
                "key": "Master Sequence Request Id"
            },
            {
                "order": 23,
                "type": "numeric",
                "value": 2210,
                "key": "Sequence Request Id"
            },
            {
                "order": 24,
                "type": "text",
                "value": "NGS",
                "key": "Request Type"
            },
            {
                "order": 25,
                "type": "text",
                "value": [
                    "IGHV4",
                    "4-34",
                    "IGHV4-34*07",
                    ""
                ],
                "key": "V Gene"
            },
            {
                "order": 26,
                "type": "text",
                "value": [
                    "IGHD3",
                    "3-10",
                    "IGHD3-10*02",
                    ""
                ],
                "key": "D Gene"
            },
            {
                "order": 27,
                "type": "text",
                "value": [
                    "IGHJ5",
                    "5",
                    "IGHJ5*02",
                    ""
                ],
                "key": "J Gene"
            },
            {
                "order": 28,
                "type": "text",
                "value": "1185_Box25_Report_LC.csv",
                "key": "Mi Sequence File Name"
            },
            {
                "order": 29,
                "type": "numeric",
                "value": "1995 ",
                "key": "Cluster Size"
            },
            {
                "order": 30,
                "type": "text",
                "value": "HCo38:12 x HCo42:01 [J/K]",
                "key": "Strain"
            },
            {
                "order": 31,
                "type": "text",
                "value": "468187",
                "key": "Mouse Ids"
            },
            {
                "order": 32,
                "type": "text",
                "value": "Hybridoma Ab",
                "key": "Source"
            },
            {
                "order": 33,
                "type": "text",
                "key": "Isotype"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 1,
                        "type": "sequence",
                        "key": "Mature AA Sequence"
                    },
                    {
                        "order": 10,
                        "type": "text",
                        "key": "FR1 AA"
                    },
                    {
                        "order": 11,
                        "type": "sequence",
                        "key": "FR1 AA Sequence"
                    },
                    {
                        "order": 12,
                        "type": "text",
                        "key": "CDR1 AA"
                    },
                    {
                        "order": 13,
                        "type": "sequence",
                        "key": "CDR1 AA Sequence"
                    },
                    {
                        "order": 20,
                        "type": "text",
                        "key": "FR2 AA"
                    },
                    {
                        "order": 21,
                        "type": "sequence",
                        "key": "FR2 AA Sequence"
                    },
                    {
                        "order": 22,
                        "type": "text",
                        "key": "CDR2 AA"
                    },
                    {
                        "order": 23,
                        "type": "sequence",
                        "key": "CDR2 AA Sequence"
                    },
                    {
                        "order": 30,
                        "type": "text",
                        "key": "FR3 AA"
                    },
                    {
                        "order": 31,
                        "type": "sequence",
                        "key": "FR3 AA Sequence"
                    },
                    {
                        "order": 32,
                        "type": "text",
                        "key": "CDR3 AA"
                    },
                    {
                        "order": 33,
                        "type": "sequence",
                        "key": "CDR3 AA Sequence"
                    },
                    {
                        "order": 40,
                        "type": "text",
                        "key": "FR4 AA"
                    },
                    {
                        "order": 41,
                        "type": "sequence",
                        "key": "FR4 AA Sequence"
                    }
                ],
                "value": [
                    [
                        "QVQLQQWGAGLLKPSETLSLTCAVYGGSFSGYYWSWIRQPPGKGLEWIGEINHSGSTNYNPSLKSRVTISVDTSKNQFSLKLNSVTAADTAVYYCARGLLGLNWFDPWGQGTLVTVSS",
                        "1-30",
                        "QVQLQQWGAGLLKPSETLSLTCAVYGGSFS",
                        "31-35",
                        "GYYWS",
                        "36-49",
                        "WIRQPPGKGLEWIG",
                        "50-65",
                        "EINHSGSTNYNPSLKS",
                        "66-97",
                        "RVTISVDTSKNQFSLKLNSVTAADTAVYYCAR",
                        "98-107",
                        "GLLGLNWFDP",
                        "108-118",
                        "WGQGTLVTVSS"
                    ]
                ],
                "key": "Sequence Details"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 2,
                        "type": "sequence",
                        "key": "Mature DNA Sequence"
                    },
                    {
                        "order": 50,
                        "type": "text",
                        "key": "DNA FR1"
                    },
                    {
                        "order": 51,
                        "type": "sequence",
                        "key": "DNA FR1 Sequence"
                    },
                    {
                        "order": 52,
                        "type": "text",
                        "key": "DNA CDR1"
                    },
                    {
                        "order": 53,
                        "type": "sequence",
                        "key": "DNA CDR1 Sequence"
                    },
                    {
                        "order": 60,
                        "type": "text",
                        "key": "DNA FR2"
                    },
                    {
                        "order": 61,
                        "type": "sequence",
                        "key": "DNA FR2 Sequence"
                    },
                    {
                        "order": 62,
                        "type": "text",
                        "key": "DNA CDR2"
                    },
                    {
                        "order": 63,
                        "type": "sequence",
                        "key": "DNA CDR2 Sequence"
                    },
                    {
                        "order": 70,
                        "type": "text",
                        "key": "DNA FR3"
                    },
                    {
                        "order": 71,
                        "type": "sequence",
                        "key": "DNA FR3 Sequence"
                    },
                    {
                        "order": 72,
                        "type": "text",
                        "key": "DNA CDR3"
                    },
                    {
                        "order": 73,
                        "type": "sequence",
                        "key": "DNA CDR3 Sequence"
                    },
                    {
                        "order": 80,
                        "type": "text",
                        "key": "DNA FR4"
                    },
                    {
                        "order": 81,
                        "type": "sequence",
                        "key": "DNA FR4 Sequence"
                    }
                ],
                "value": [
                    [
                        "CAGGTGCAGCTACAACAGTGGGGCGCAGGACTGTTGAAGCCTTCGGAGACCCTGTCCCTCACCTGCGCTGTCTATGGTGGGTCCTTCAGTGGTTACTACTGGAGCTGGATCCGCCAGCCCCCAGGGAAGGGGCTGGAGTGGATTGGGGAAATCAATCATAGTGGAAGCACCAACTACAACCCGTCCCTCAAGAGTCGAGTCACCATATCAGTAGACACGTCCAAGAACCAGTTCTCCCTGAAGCTGAACTCTGTGACCGCCGCGGACACGGCTGTGTATTACTGTGCGAGAGGCCTGCTGGGGCTCAACTGGTTCGACCCCTGGGGCCAGGGAACCCTGGTCACCGTCTCCTCA",
                        "1-90",
                        "CAGGTGCAGCTACAACAGTGGGGCGCAGGACTGTTGAAGCCTTCGGAGACCCTGTCCCTCACCTGCGCTGTCTATGGTGGGTCCTTCAGT",
                        "91-105",
                        "GGTTACTACTGGAGC",
                        "106-147",
                        "TGGATCCGCCAGCCCCCAGGGAAGGGGCTGGAGTGGATTGGG",
                        "148-195",
                        "GAAATCAATCATAGTGGAAGCACCAACTACAACCCGTCCCTCAAGAGT",
                        "196-291",
                        "CGAGTCACCATATCAGTAGACACGTCCAAGAACCAGTTCTCCCTGAAGCTGAACTCTGTGACCGCCGCGGACACGGCTGTGTATTACTGTGCGAGA",
                        "292-321",
                        "GGCCTGCTGGGGCTCAACTGGTTCGACCCC",
                        "322-354",
                        "TGGGGCCAGGGAACCCTGGTCACCGTCTCCTCA"
                    ]
                ],
                "key": "DNA Details"
            }
        ],
        "@timestamp": "2023-07-27T20:32:36.778409",
        "id": 17
    },
    {
        "platform_name": "ADI",
        "application_name": "Sequence",
        "entity_id": "adi-926f923f127a04f46481bc49989c9366",
        "entity_label": "1809.8077.4G4",
        "entity_name": "7622.VH1",
        "project number": "1809",
        "project name": "CEACAM1",
        "fusion": "8077",
        "published date": "2019-08-27T10:45:43.790000+00:00",
        "domain": "Heavy",
        "species": "Human",
        "request type": "NGS",
        "v gene": [
            "IGHV1",
            "1-69",
            "IGHV1-69*11",
            ""
        ],
        "d gene": [
            "IGHD3",
            "3-10",
            "IGHD3-10*02",
            ""
        ],
        "j gene": [
            "IGHJ6",
            "6",
            "IGHJ6*02",
            ""
        ],
        "mi sequence file name": "1267_Box46_47_48_Report_HC.csv",
        "strain": "HCo42:01 [J/K/Vh:f/Vk2:f/hK1fh#02:01:f] CF",
        "source": "Hybridoma Ab",
        "isotype": null,
        "properties": [
            {
                "value": "ADI",
                "order": 0,
                "type": "text",
                "key": "Platform Name"
            },
            {
                "value": "Sequence",
                "order": 1,
                "type": "text",
                "key": "Application Name"
            },
            {
                "value": "1809.8077.4G4",
                "id": "adi-926f923f127a04f46481bc49989c9366",
                "order": 2,
                "type": "identifier",
                "rule": "md5(platformName, applicationName, FusionId, Project Number, Material_Id, Chain_id, Sequence_idAA)",
                "key": "ID"
            },
            {
                "order": 3,
                "type": "text",
                "value": "7622.VH1",
                "key": "Name"
            },
            {
                "order": 9,
                "type": "text",
                "value": "1809",
                "key": "Project Number"
            },
            {
                "order": 10,
                "type": "text",
                "value": "CEACAM1",
                "key": "Project Name"
            },
            {
                "order": 11,
                "type": "text",
                "value": "4G4",
                "key": "Material Name"
            },
            {
                "order": 12,
                "type": "text",
                "value": "8077",
                "key": "Fusion"
            },
            {
                "order": 13,
                "type": "numeric",
                "value": "1809.8077.345153",
                "key": "Full Clone Name"
            },
            {
                "order": 14,
                "type": "date",
                "value": "2019-08-27T10:45:43.790Z",
                "key": "Published Date"
            },
            {
                "order": 16,
                "type": "text",
                "value": "Heavy",
                "key": "Domain"
            },
            {
                "order": 17,
                "type": "text",
                "value": "Human",
                "key": "Species"
            },
            {
                "order": 18,
                "type": "numeric",
                "value": 30689,
                "key": "Sequence Id AA"
            },
            {
                "order": 19,
                "type": "numeric",
                "value": 30688,
                "key": "Sequence Id NT"
            },
            {
                "order": 20,
                "type": "sequence",
                "value": "EVQLVQSGAEVKKPGSSVKVSCKASGGTFSNYAINWVRQAPGLGLEWMGRIIPILATANYAQKFQDRVTITADKSTNTAYMELSSLRSEDTAVYYCARGVMIRGVDYYGMDVWGQGTTVTVSS",
                "key": "Sequence"
            },
            {
                "order": 21,
                "type": "sequence",
                "value": "GAGGTGCAGCTGGTGCAGTCTGGGGCTGAGGTGAAGAAGCCTGGGTCCTCGGTGAAGGTCTCCTGCAAGGCTTCTGGAGGCACCTTCAGCAACTATGCTATCAACTGGGTGCGACAGGCCCCTGGACTAGGGCTTGAGTGGATGGGAAGGATCATCCCTATCCTTGCTACAGCAAACTACGCACAGAAGTTCCAGGACAGAGTCACGATTACCGCGGACAAATCCACGAACACAGCCTACATGGAGCTGAGCAGCCTGAGATCTGAGGACACGGCCGTGTATTACTGTGCGAGAGGAGTTATGATTCGGGGGGTCGACTACTACGGTATGGACGTCTGGGGCCAAGGGACCACGGTCACCGTCTCCTCA",
                "key": "DNA"
            },
            {
                "order": 22,
                "type": "numeric",
                "value": 1267,
                "key": "Master Sequence Request Id"
            },
            {
                "order": 23,
                "type": "numeric",
                "value": 7622,
                "key": "Sequence Request Id"
            },
            {
                "order": 24,
                "type": "text",
                "value": "NGS",
                "key": "Request Type"
            },
            {
                "order": 25,
                "type": "text",
                "value": [
                    "IGHV1",
                    "1-69",
                    "IGHV1-69*11",
                    ""
                ],
                "key": "V Gene"
            },
            {
                "order": 26,
                "type": "text",
                "value": [
                    "IGHD3",
                    "3-10",
                    "IGHD3-10*02",
                    ""
                ],
                "key": "D Gene"
            },
            {
                "order": 27,
                "type": "text",
                "value": [
                    "IGHJ6",
                    "6",
                    "IGHJ6*02",
                    ""
                ],
                "key": "J Gene"
            },
            {
                "order": 28,
                "type": "text",
                "value": "1267_Box46_47_48_Report_HC.csv",
                "key": "Mi Sequence File Name"
            },
            {
                "order": 29,
                "type": "numeric",
                "value": "4159 ",
                "key": "Cluster Size"
            },
            {
                "order": 30,
                "type": "text",
                "value": "HCo42:01 [J/K/Vh:f/Vk2:f/hK1fh#02:01:f] CF",
                "key": "Strain"
            },
            {
                "order": 31,
                "type": "text",
                "value": "480057,480058,480059,484328",
                "key": "Mouse Ids"
            },
            {
                "order": 32,
                "type": "text",
                "value": "Hybridoma Ab",
                "key": "Source"
            },
            {
                "order": 33,
                "type": "text",
                "key": "Isotype"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 1,
                        "type": "sequence",
                        "key": "Mature AA Sequence"
                    },
                    {
                        "order": 10,
                        "type": "text",
                        "key": "FR1 AA"
                    },
                    {
                        "order": 11,
                        "type": "sequence",
                        "key": "FR1 AA Sequence"
                    },
                    {
                        "order": 12,
                        "type": "text",
                        "key": "CDR1 AA"
                    },
                    {
                        "order": 13,
                        "type": "sequence",
                        "key": "CDR1 AA Sequence"
                    },
                    {
                        "order": 20,
                        "type": "text",
                        "key": "FR2 AA"
                    },
                    {
                        "order": 21,
                        "type": "sequence",
                        "key": "FR2 AA Sequence"
                    },
                    {
                        "order": 22,
                        "type": "text",
                        "key": "CDR2 AA"
                    },
                    {
                        "order": 23,
                        "type": "sequence",
                        "key": "CDR2 AA Sequence"
                    },
                    {
                        "order": 30,
                        "type": "text",
                        "key": "FR3 AA"
                    },
                    {
                        "order": 31,
                        "type": "sequence",
                        "key": "FR3 AA Sequence"
                    },
                    {
                        "order": 32,
                        "type": "text",
                        "key": "CDR3 AA"
                    },
                    {
                        "order": 33,
                        "type": "sequence",
                        "key": "CDR3 AA Sequence"
                    },
                    {
                        "order": 40,
                        "type": "text",
                        "key": "FR4 AA"
                    },
                    {
                        "order": 41,
                        "type": "sequence",
                        "key": "FR4 AA Sequence"
                    }
                ],
                "value": [
                    [
                        "EVQLVQSGAEVKKPGSSVKVSCKASGGTFSNYAINWVRQAPGLGLEWMGRIIPILATANYAQKFQDRVTITADKSTNTAYMELSSLRSEDTAVYYCARGVMIRGVDYYGMDVWGQGTTVTVSS",
                        "1-30",
                        "EVQLVQSGAEVKKPGSSVKVSCKASGGTFS",
                        "31-35",
                        "NYAIN",
                        "36-49",
                        "WVRQAPGLGLEWMG",
                        "50-66",
                        "RIIPILATANYAQKFQD",
                        "67-98",
                        "RVTITADKSTNTAYMELSSLRSEDTAVYYCAR",
                        "99-112",
                        "GVMIRGVDYYGMDV",
                        "113-123",
                        "WGQGTTVTVSS"
                    ]
                ],
                "key": "Sequence Details"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 2,
                        "type": "sequence",
                        "key": "Mature DNA Sequence"
                    },
                    {
                        "order": 50,
                        "type": "text",
                        "key": "DNA FR1"
                    },
                    {
                        "order": 51,
                        "type": "sequence",
                        "key": "DNA FR1 Sequence"
                    },
                    {
                        "order": 52,
                        "type": "text",
                        "key": "DNA CDR1"
                    },
                    {
                        "order": 53,
                        "type": "sequence",
                        "key": "DNA CDR1 Sequence"
                    },
                    {
                        "order": 60,
                        "type": "text",
                        "key": "DNA FR2"
                    },
                    {
                        "order": 61,
                        "type": "sequence",
                        "key": "DNA FR2 Sequence"
                    },
                    {
                        "order": 62,
                        "type": "text",
                        "key": "DNA CDR2"
                    },
                    {
                        "order": 63,
                        "type": "sequence",
                        "key": "DNA CDR2 Sequence"
                    },
                    {
                        "order": 70,
                        "type": "text",
                        "key": "DNA FR3"
                    },
                    {
                        "order": 71,
                        "type": "sequence",
                        "key": "DNA FR3 Sequence"
                    },
                    {
                        "order": 72,
                        "type": "text",
                        "key": "DNA CDR3"
                    },
                    {
                        "order": 73,
                        "type": "sequence",
                        "key": "DNA CDR3 Sequence"
                    },
                    {
                        "order": 80,
                        "type": "text",
                        "key": "DNA FR4"
                    },
                    {
                        "order": 81,
                        "type": "sequence",
                        "key": "DNA FR4 Sequence"
                    }
                ],
                "value": [
                    [
                        "GAGGTGCAGCTGGTGCAGTCTGGGGCTGAGGTGAAGAAGCCTGGGTCCTCGGTGAAGGTCTCCTGCAAGGCTTCTGGAGGCACCTTCAGCAACTATGCTATCAACTGGGTGCGACAGGCCCCTGGACTAGGGCTTGAGTGGATGGGAAGGATCATCCCTATCCTTGCTACAGCAAACTACGCACAGAAGTTCCAGGACAGAGTCACGATTACCGCGGACAAATCCACGAACACAGCCTACATGGAGCTGAGCAGCCTGAGATCTGAGGACACGGCCGTGTATTACTGTGCGAGAGGAGTTATGATTCGGGGGGTCGACTACTACGGTATGGACGTCTGGGGCCAAGGGACCACGGTCACCGTCTCCTCA",
                        "1-90",
                        "GAGGTGCAGCTGGTGCAGTCTGGGGCTGAGGTGAAGAAGCCTGGGTCCTCGGTGAAGGTCTCCTGCAAGGCTTCTGGAGGCACCTTCAGC",
                        "91-105",
                        "AACTATGCTATCAAC",
                        "106-147",
                        "TGGGTGCGACAGGCCCCTGGACTAGGGCTTGAGTGGATGGGA",
                        "148-198",
                        "AGGATCATCCCTATCCTTGCTACAGCAAACTACGCACAGAAGTTCCAGGAC",
                        "199-294",
                        "AGAGTCACGATTACCGCGGACAAATCCACGAACACAGCCTACATGGAGCTGAGCAGCCTGAGATCTGAGGACACGGCCGTGTATTACTGTGCGAGA",
                        "295-336",
                        "GGAGTTATGATTCGGGGGGTCGACTACTACGGTATGGACGTC",
                        "337-369",
                        "TGGGGCCAAGGGACCACGGTCACCGTCTCCTCA"
                    ]
                ],
                "key": "DNA Details"
            }
        ],
        "@timestamp": "2023-07-27T20:32:37.926408",
        "id": 18
    },
    {
        "platform_name": "ADI",
        "application_name": "Sequence",
        "entity_id": "adi-5402a6e0c36c089d80ca86594249db25",
        "entity_label": "1854.8075.2E9",
        "entity_name": "7658.VH2",
        "project number": "1854",
        "project name": "CD3e",
        "fusion": "8075",
        "published date": "2019-08-27T10:45:44.400000+00:00",
        "domain": "Heavy",
        "species": "Human",
        "request type": "NGS",
        "v gene": [
            "IGHV1",
            "1-46",
            "IGHV1-46*03",
            ""
        ],
        "d gene": null,
        "j gene": [
            "IGHJ6",
            "6",
            "IGHJ6*02",
            ""
        ],
        "mi sequence file name": "1267_Box46_47_48_Report_LC.csv",
        "strain": "HCo42:01 [J/K/Vh:f/Vk2:f/hK1fh#02:01:f] CF",
        "source": "Hybridoma Ab",
        "isotype": null,
        "properties": [
            {
                "value": "ADI",
                "order": 0,
                "type": "text",
                "key": "Platform Name"
            },
            {
                "value": "Sequence",
                "order": 1,
                "type": "text",
                "key": "Application Name"
            },
            {
                "value": "1854.8075.2E9",
                "id": "adi-5402a6e0c36c089d80ca86594249db25",
                "order": 2,
                "type": "identifier",
                "rule": "md5(platformName, applicationName, FusionId, Project Number, Material_Id, Chain_id, Sequence_idAA)",
                "key": "ID"
            },
            {
                "order": 3,
                "type": "text",
                "value": "7658.VH2",
                "key": "Name"
            },
            {
                "order": 9,
                "type": "text",
                "value": "1854",
                "key": "Project Number"
            },
            {
                "order": 10,
                "type": "text",
                "value": "CD3e",
                "key": "Project Name"
            },
            {
                "order": 11,
                "type": "text",
                "value": "2E9",
                "key": "Material Name"
            },
            {
                "order": 12,
                "type": "text",
                "value": "8075",
                "key": "Fusion"
            },
            {
                "order": 13,
                "type": "numeric",
                "value": "1854.8075.369023",
                "key": "Full Clone Name"
            },
            {
                "order": 14,
                "type": "date",
                "value": "2019-08-27T10:45:44.400Z",
                "key": "Published Date"
            },
            {
                "order": 16,
                "type": "text",
                "value": "Heavy",
                "key": "Domain"
            },
            {
                "order": 17,
                "type": "text",
                "value": "Human",
                "key": "Species"
            },
            {
                "order": 18,
                "type": "numeric",
                "value": 30773,
                "key": "Sequence Id AA"
            },
            {
                "order": 19,
                "type": "numeric",
                "value": 30772,
                "key": "Sequence Id NT"
            },
            {
                "order": 20,
                "type": "sequence",
                "value": "QVQLVQSGAEVKKPGASVKVSCKASGYTFTSYYMHWVRQAPGQGLEWMGIINPSGGSTSYAQKFQGRVTMTRDTSTSTVYMELSSLRSEDTAVYYCARDLTGDGYYYYGMDVWGQGTTVTVSS",
                "key": "Sequence"
            },
            {
                "order": 21,
                "type": "sequence",
                "value": "CAGGTGCAGCTGGTGCAGTCTGGGGCTGAGGTGAAGAAGCCTGGGGCCTCAGTGAAGGTTTCCTGCAAGGCATCTGGATACACCTTCACCAGCTACTATATGCACTGGGTGCGACAGGCCCCTGGACAAGGGCTTGAGTGGATGGGAATAATCAACCCTAGTGGTGGTAGCACAAGCTACGCACAGAAGTTCCAGGGCAGAGTCACCATGACCAGGGACACGTCCACGAGCACAGTCTACATGGAGCTGAGCAGCCTGAGATCTGAGGACACGGCCGTGTATTACTGTGCGAGAGATCTAACTGGGGATGGGTACTACTACTACGGTATGGACGTCTGGGGCCAAGGGACCACGGTCACCGTCTCCTCA",
                "key": "DNA"
            },
            {
                "order": 22,
                "type": "numeric",
                "value": 1267,
                "key": "Master Sequence Request Id"
            },
            {
                "order": 23,
                "type": "numeric",
                "value": 7658,
                "key": "Sequence Request Id"
            },
            {
                "order": 24,
                "type": "text",
                "value": "NGS",
                "key": "Request Type"
            },
            {
                "order": 25,
                "type": "text",
                "value": [
                    "IGHV1",
                    "1-46",
                    "IGHV1-46*03",
                    ""
                ],
                "key": "V Gene"
            },
            {
                "order": 26,
                "type": "text",
                "value": null,
                "key": "D Gene"
            },
            {
                "order": 27,
                "type": "text",
                "value": [
                    "IGHJ6",
                    "6",
                    "IGHJ6*02",
                    ""
                ],
                "key": "J Gene"
            },
            {
                "order": 28,
                "type": "text",
                "value": "1267_Box46_47_48_Report_LC.csv",
                "key": "Mi Sequence File Name"
            },
            {
                "order": 29,
                "type": "numeric",
                "value": "3737 ",
                "key": "Cluster Size"
            },
            {
                "order": 30,
                "type": "text",
                "value": "HCo42:01 [J/K/Vh:f/Vk2:f/hK1fh#02:01:f] CF",
                "key": "Strain"
            },
            {
                "order": 31,
                "type": "text",
                "value": "492682,492683,493956",
                "key": "Mouse Ids"
            },
            {
                "order": 32,
                "type": "text",
                "value": "Hybridoma Ab",
                "key": "Source"
            },
            {
                "order": 33,
                "type": "text",
                "key": "Isotype"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 1,
                        "type": "sequence",
                        "key": "Mature AA Sequence"
                    },
                    {
                        "order": 10,
                        "type": "text",
                        "key": "FR1 AA"
                    },
                    {
                        "order": 11,
                        "type": "sequence",
                        "key": "FR1 AA Sequence"
                    },
                    {
                        "order": 12,
                        "type": "text",
                        "key": "CDR1 AA"
                    },
                    {
                        "order": 13,
                        "type": "sequence",
                        "key": "CDR1 AA Sequence"
                    },
                    {
                        "order": 20,
                        "type": "text",
                        "key": "FR2 AA"
                    },
                    {
                        "order": 21,
                        "type": "sequence",
                        "key": "FR2 AA Sequence"
                    },
                    {
                        "order": 22,
                        "type": "text",
                        "key": "CDR2 AA"
                    },
                    {
                        "order": 23,
                        "type": "sequence",
                        "key": "CDR2 AA Sequence"
                    },
                    {
                        "order": 30,
                        "type": "text",
                        "key": "FR3 AA"
                    },
                    {
                        "order": 31,
                        "type": "sequence",
                        "key": "FR3 AA Sequence"
                    },
                    {
                        "order": 32,
                        "type": "text",
                        "key": "CDR3 AA"
                    },
                    {
                        "order": 33,
                        "type": "sequence",
                        "key": "CDR3 AA Sequence"
                    },
                    {
                        "order": 40,
                        "type": "text",
                        "key": "FR4 AA"
                    },
                    {
                        "order": 41,
                        "type": "sequence",
                        "key": "FR4 AA Sequence"
                    }
                ],
                "value": [
                    [
                        "QVQLVQSGAEVKKPGASVKVSCKASGYTFTSYYMHWVRQAPGQGLEWMGIINPSGGSTSYAQKFQGRVTMTRDTSTSTVYMELSSLRSEDTAVYYCARDLTGDGYYYYGMDVWGQGTTVTVSS",
                        "1-30",
                        "QVQLVQSGAEVKKPGASVKVSCKASGYTFT",
                        "31-35",
                        "SYYMH",
                        "36-49",
                        "WVRQAPGQGLEWMG",
                        "50-66",
                        "IINPSGGSTSYAQKFQG",
                        "67-98",
                        "RVTMTRDTSTSTVYMELSSLRSEDTAVYYCAR",
                        "99-112",
                        "DLTGDGYYYYGMDV",
                        "113-123",
                        "WGQGTTVTVSS"
                    ]
                ],
                "key": "Sequence Details"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 2,
                        "type": "sequence",
                        "key": "Mature DNA Sequence"
                    },
                    {
                        "order": 50,
                        "type": "text",
                        "key": "DNA FR1"
                    },
                    {
                        "order": 51,
                        "type": "sequence",
                        "key": "DNA FR1 Sequence"
                    },
                    {
                        "order": 52,
                        "type": "text",
                        "key": "DNA CDR1"
                    },
                    {
                        "order": 53,
                        "type": "sequence",
                        "key": "DNA CDR1 Sequence"
                    },
                    {
                        "order": 60,
                        "type": "text",
                        "key": "DNA FR2"
                    },
                    {
                        "order": 61,
                        "type": "sequence",
                        "key": "DNA FR2 Sequence"
                    },
                    {
                        "order": 62,
                        "type": "text",
                        "key": "DNA CDR2"
                    },
                    {
                        "order": 63,
                        "type": "sequence",
                        "key": "DNA CDR2 Sequence"
                    },
                    {
                        "order": 70,
                        "type": "text",
                        "key": "DNA FR3"
                    },
                    {
                        "order": 71,
                        "type": "sequence",
                        "key": "DNA FR3 Sequence"
                    },
                    {
                        "order": 72,
                        "type": "text",
                        "key": "DNA CDR3"
                    },
                    {
                        "order": 73,
                        "type": "sequence",
                        "key": "DNA CDR3 Sequence"
                    },
                    {
                        "order": 80,
                        "type": "text",
                        "key": "DNA FR4"
                    },
                    {
                        "order": 81,
                        "type": "sequence",
                        "key": "DNA FR4 Sequence"
                    }
                ],
                "value": [
                    [
                        "CAGGTGCAGCTGGTGCAGTCTGGGGCTGAGGTGAAGAAGCCTGGGGCCTCAGTGAAGGTTTCCTGCAAGGCATCTGGATACACCTTCACCAGCTACTATATGCACTGGGTGCGACAGGCCCCTGGACAAGGGCTTGAGTGGATGGGAATAATCAACCCTAGTGGTGGTAGCACAAGCTACGCACAGAAGTTCCAGGGCAGAGTCACCATGACCAGGGACACGTCCACGAGCACAGTCTACATGGAGCTGAGCAGCCTGAGATCTGAGGACACGGCCGTGTATTACTGTGCGAGAGATCTAACTGGGGATGGGTACTACTACTACGGTATGGACGTCTGGGGCCAAGGGACCACGGTCACCGTCTCCTCA",
                        "1-90",
                        "CAGGTGCAGCTGGTGCAGTCTGGGGCTGAGGTGAAGAAGCCTGGGGCCTCAGTGAAGGTTTCCTGCAAGGCATCTGGATACACCTTCACC",
                        "91-105",
                        "AGCTACTATATGCAC",
                        "106-147",
                        "TGGGTGCGACAGGCCCCTGGACAAGGGCTTGAGTGGATGGGA",
                        "148-198",
                        "ATAATCAACCCTAGTGGTGGTAGCACAAGCTACGCACAGAAGTTCCAGGGC",
                        "199-294",
                        "AGAGTCACCATGACCAGGGACACGTCCACGAGCACAGTCTACATGGAGCTGAGCAGCCTGAGATCTGAGGACACGGCCGTGTATTACTGTGCGAGA",
                        "295-336",
                        "GATCTAACTGGGGATGGGTACTACTACTACGGTATGGACGTC",
                        "337-369",
                        "TGGGGCCAAGGGACCACGGTCACCGTCTCCTCA"
                    ]
                ],
                "key": "DNA Details"
            }
        ],
        "@timestamp": "2023-07-27T20:32:40.299405",
        "id": 19
    },
    {
        "platform_name": "ADI",
        "application_name": "Sequence",
        "entity_id": "adi-0fdb2d56f68a7cc649f56c5e387c140f",
        "entity_label": "1854.8053.9A7",
        "entity_name": "7694.VH1",
        "project number": "1854",
        "project name": "CD3e",
        "fusion": "8053",
        "published date": "2019-08-27T10:45:45.183000+00:00",
        "domain": "Heavy",
        "species": "Human",
        "request type": "NGS",
        "v gene": [
            "IGHV3",
            "3-30-3",
            "IGHV3-30-3*03",
            ""
        ],
        "d gene": [
            "IGHD2/OR15",
            "2/OR15-2b",
            "IGHD2/OR15-2b*01",
            ""
        ],
        "j gene": [
            "IGHJ6",
            "6",
            "IGHJ6*02",
            ""
        ],
        "mi sequence file name": "1267_Box46_47_48_Report_LC.csv",
        "strain": "HCo42:01 FIXEDhuLC1-tg:02",
        "source": "Hybridoma Ab",
        "isotype": null,
        "properties": [
            {
                "value": "ADI",
                "order": 0,
                "type": "text",
                "key": "Platform Name"
            },
            {
                "value": "Sequence",
                "order": 1,
                "type": "text",
                "key": "Application Name"
            },
            {
                "value": "1854.8053.9A7",
                "id": "adi-0fdb2d56f68a7cc649f56c5e387c140f",
                "order": 2,
                "type": "identifier",
                "rule": "md5(platformName, applicationName, FusionId, Project Number, Material_Id, Chain_id, Sequence_idAA)",
                "key": "ID"
            },
            {
                "order": 3,
                "type": "text",
                "value": "7694.VH1",
                "key": "Name"
            },
            {
                "order": 9,
                "type": "text",
                "value": "1854",
                "key": "Project Number"
            },
            {
                "order": 10,
                "type": "text",
                "value": "CD3e",
                "key": "Project Name"
            },
            {
                "order": 11,
                "type": "text",
                "value": "9A7",
                "key": "Material Name"
            },
            {
                "order": 12,
                "type": "text",
                "value": "8053",
                "key": "Fusion"
            },
            {
                "order": 13,
                "type": "numeric",
                "value": "1854.8053.349232",
                "key": "Full Clone Name"
            },
            {
                "order": 14,
                "type": "date",
                "value": "2019-08-27T10:45:45.183Z",
                "key": "Published Date"
            },
            {
                "order": 16,
                "type": "text",
                "value": "Heavy",
                "key": "Domain"
            },
            {
                "order": 17,
                "type": "text",
                "value": "Human",
                "key": "Species"
            },
            {
                "order": 18,
                "type": "numeric",
                "value": 30859,
                "key": "Sequence Id AA"
            },
            {
                "order": 19,
                "type": "numeric",
                "value": 30858,
                "key": "Sequence Id NT"
            },
            {
                "order": 20,
                "type": "sequence",
                "value": "EVQLVESGGGVVQPGRSLRLSCAASGFTFSSYTMHWVRQAPGKGLEWVAVISYDGSNKYYADSVKGRFTISRDNSKNTLYLQMNSLRAEDTAVYYCARRLFYYYGMDVWGQGTTVTVSS",
                "key": "Sequence"
            },
            {
                "order": 21,
                "type": "sequence",
                "value": "GAGGTGCAGCTGGTGGAGTCTGGGGGAGGCGTGGTCCAGCCTGGGAGGTCCCTGAGACTCTCCTGTGCAGCCTCTGGATTCACCTTCAGTAGCTATACTATGCACTGGGTCCGCCAGGCTCCAGGCAAGGGGCTGGAGTGGGTGGCAGTTATATCATATGATGGAAGCAATAAATACTACGCAGACTCCGTGAAGGGCCGATTCACCATCTCCAGAGACAATTCCAAGAACACGCTGTATCTGCAAATGAACAGCCTGAGAGCTGAGGACACGGCTGTGTACTACTGTGCGAGAAGGCTCTTCTACTACTACGGTATGGACGTCTGGGGCCAAGGGACCACGGTCACCGTCTCCTCA",
                "key": "DNA"
            },
            {
                "order": 22,
                "type": "numeric",
                "value": 1267,
                "key": "Master Sequence Request Id"
            },
            {
                "order": 23,
                "type": "numeric",
                "value": 7694,
                "key": "Sequence Request Id"
            },
            {
                "order": 24,
                "type": "text",
                "value": "NGS",
                "key": "Request Type"
            },
            {
                "order": 25,
                "type": "text",
                "value": [
                    "IGHV3",
                    "3-30-3",
                    "IGHV3-30-3*03",
                    ""
                ],
                "key": "V Gene"
            },
            {
                "order": 26,
                "type": "text",
                "value": [
                    "IGHD2/OR15",
                    "2/OR15-2b",
                    "IGHD2/OR15-2b*01",
                    ""
                ],
                "key": "D Gene"
            },
            {
                "order": 27,
                "type": "text",
                "value": [
                    "IGHJ6",
                    "6",
                    "IGHJ6*02",
                    ""
                ],
                "key": "J Gene"
            },
            {
                "order": 28,
                "type": "text",
                "value": "1267_Box46_47_48_Report_LC.csv",
                "key": "Mi Sequence File Name"
            },
            {
                "order": 29,
                "type": "numeric",
                "value": "3882 ",
                "key": "Cluster Size"
            },
            {
                "order": 30,
                "type": "text",
                "value": "HCo42:01 FIXEDhuLC1-tg:02",
                "key": "Strain"
            },
            {
                "order": 31,
                "type": "text",
                "value": "490565,490566,490567,492870,492871,492872",
                "key": "Mouse Ids"
            },
            {
                "order": 32,
                "type": "text",
                "value": "Hybridoma Ab",
                "key": "Source"
            },
            {
                "order": 33,
                "type": "text",
                "key": "Isotype"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 1,
                        "type": "sequence",
                        "key": "Mature AA Sequence"
                    },
                    {
                        "order": 10,
                        "type": "text",
                        "key": "FR1 AA"
                    },
                    {
                        "order": 11,
                        "type": "sequence",
                        "key": "FR1 AA Sequence"
                    },
                    {
                        "order": 12,
                        "type": "text",
                        "key": "CDR1 AA"
                    },
                    {
                        "order": 13,
                        "type": "sequence",
                        "key": "CDR1 AA Sequence"
                    },
                    {
                        "order": 20,
                        "type": "text",
                        "key": "FR2 AA"
                    },
                    {
                        "order": 21,
                        "type": "sequence",
                        "key": "FR2 AA Sequence"
                    },
                    {
                        "order": 22,
                        "type": "text",
                        "key": "CDR2 AA"
                    },
                    {
                        "order": 23,
                        "type": "sequence",
                        "key": "CDR2 AA Sequence"
                    },
                    {
                        "order": 30,
                        "type": "text",
                        "key": "FR3 AA"
                    },
                    {
                        "order": 31,
                        "type": "sequence",
                        "key": "FR3 AA Sequence"
                    },
                    {
                        "order": 32,
                        "type": "text",
                        "key": "CDR3 AA"
                    },
                    {
                        "order": 33,
                        "type": "sequence",
                        "key": "CDR3 AA Sequence"
                    },
                    {
                        "order": 40,
                        "type": "text",
                        "key": "FR4 AA"
                    },
                    {
                        "order": 41,
                        "type": "sequence",
                        "key": "FR4 AA Sequence"
                    }
                ],
                "value": [
                    [
                        "EVQLVESGGGVVQPGRSLRLSCAASGFTFSSYTMHWVRQAPGKGLEWVAVISYDGSNKYYADSVKGRFTISRDNSKNTLYLQMNSLRAEDTAVYYCARRLFYYYGMDVWGQGTTVTVSS",
                        "1-30",
                        "EVQLVESGGGVVQPGRSLRLSCAASGFTFS",
                        "31-35",
                        "SYTMH",
                        "36-49",
                        "WVRQAPGKGLEWVA",
                        "50-66",
                        "VISYDGSNKYYADSVKG",
                        "67-98",
                        "RFTISRDNSKNTLYLQMNSLRAEDTAVYYCAR",
                        "99-108",
                        "RLFYYYGMDV",
                        "109-119",
                        "WGQGTTVTVSS"
                    ]
                ],
                "key": "Sequence Details"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 2,
                        "type": "sequence",
                        "key": "Mature DNA Sequence"
                    },
                    {
                        "order": 50,
                        "type": "text",
                        "key": "DNA FR1"
                    },
                    {
                        "order": 51,
                        "type": "sequence",
                        "key": "DNA FR1 Sequence"
                    },
                    {
                        "order": 52,
                        "type": "text",
                        "key": "DNA CDR1"
                    },
                    {
                        "order": 53,
                        "type": "sequence",
                        "key": "DNA CDR1 Sequence"
                    },
                    {
                        "order": 60,
                        "type": "text",
                        "key": "DNA FR2"
                    },
                    {
                        "order": 61,
                        "type": "sequence",
                        "key": "DNA FR2 Sequence"
                    },
                    {
                        "order": 62,
                        "type": "text",
                        "key": "DNA CDR2"
                    },
                    {
                        "order": 63,
                        "type": "sequence",
                        "key": "DNA CDR2 Sequence"
                    },
                    {
                        "order": 70,
                        "type": "text",
                        "key": "DNA FR3"
                    },
                    {
                        "order": 71,
                        "type": "sequence",
                        "key": "DNA FR3 Sequence"
                    },
                    {
                        "order": 72,
                        "type": "text",
                        "key": "DNA CDR3"
                    },
                    {
                        "order": 73,
                        "type": "sequence",
                        "key": "DNA CDR3 Sequence"
                    },
                    {
                        "order": 80,
                        "type": "text",
                        "key": "DNA FR4"
                    },
                    {
                        "order": 81,
                        "type": "sequence",
                        "key": "DNA FR4 Sequence"
                    }
                ],
                "value": [
                    [
                        "GAGGTGCAGCTGGTGGAGTCTGGGGGAGGCGTGGTCCAGCCTGGGAGGTCCCTGAGACTCTCCTGTGCAGCCTCTGGATTCACCTTCAGTAGCTATACTATGCACTGGGTCCGCCAGGCTCCAGGCAAGGGGCTGGAGTGGGTGGCAGTTATATCATATGATGGAAGCAATAAATACTACGCAGACTCCGTGAAGGGCCGATTCACCATCTCCAGAGACAATTCCAAGAACACGCTGTATCTGCAAATGAACAGCCTGAGAGCTGAGGACACGGCTGTGTACTACTGTGCGAGAAGGCTCTTCTACTACTACGGTATGGACGTCTGGGGCCAAGGGACCACGGTCACCGTCTCCTCA",
                        "1-90",
                        "GAGGTGCAGCTGGTGGAGTCTGGGGGAGGCGTGGTCCAGCCTGGGAGGTCCCTGAGACTCTCCTGTGCAGCCTCTGGATTCACCTTCAGT",
                        "91-105",
                        "AGCTATACTATGCAC",
                        "106-147",
                        "TGGGTCCGCCAGGCTCCAGGCAAGGGGCTGGAGTGGGTGGCA",
                        "148-198",
                        "GTTATATCATATGATGGAAGCAATAAATACTACGCAGACTCCGTGAAGGGC",
                        "199-294",
                        "CGATTCACCATCTCCAGAGACAATTCCAAGAACACGCTGTATCTGCAAATGAACAGCCTGAGAGCTGAGGACACGGCTGTGTACTACTGTGCGAGA",
                        "295-324",
                        "AGGCTCTTCTACTACTACGGTATGGACGTC",
                        "325-357",
                        "TGGGGCCAAGGGACCACGGTCACCGTCTCCTCA"
                    ]
                ],
                "key": "DNA Details"
            }
        ],
        "@timestamp": "2023-07-27T20:32:40.720437",
        "id": 20
    },
    {
        "platform_name": "ADI",
        "application_name": "Sequence",
        "entity_id": "adi-63804355e9fdf81e9bd817d0de3dbe7c",
        "entity_label": "1894.8011.23F4",
        "entity_name": "2589.VH1",
        "project number": "1894",
        "project name": "Anti-FCRL6",
        "fusion": "8011",
        "published date": "2019-02-14T15:37:17.963000+00:00",
        "domain": "Heavy",
        "species": "Human",
        "request type": "NGS",
        "v gene": [
            "IGHV3",
            "3-30-3",
            "IGHV3-30-3*03",
            ""
        ],
        "d gene": null,
        "j gene": [
            "IGHJ6",
            "6",
            "IGHJ6*02",
            ""
        ],
        "mi sequence file name": "1190_Box45_Report_LC.csv",
        "strain": "HCo42:01 [J/K/Vh:f/Vk2:f/hK1fh#02:01:f] CF",
        "source": "Hybridoma Ab",
        "isotype": null,
        "properties": [
            {
                "value": "ADI",
                "order": 0,
                "type": "text",
                "key": "Platform Name"
            },
            {
                "value": "Sequence",
                "order": 1,
                "type": "text",
                "key": "Application Name"
            },
            {
                "value": "1894.8011.23F4",
                "id": "adi-63804355e9fdf81e9bd817d0de3dbe7c",
                "order": 2,
                "type": "identifier",
                "rule": "md5(platformName, applicationName, FusionId, Project Number, Material_Id, Chain_id, Sequence_idAA)",
                "key": "ID"
            },
            {
                "order": 3,
                "type": "text",
                "value": "2589.VH1",
                "key": "Name"
            },
            {
                "order": 9,
                "type": "text",
                "value": "1894",
                "key": "Project Number"
            },
            {
                "order": 10,
                "type": "text",
                "value": "Anti-FCRL6",
                "key": "Project Name"
            },
            {
                "order": 11,
                "type": "text",
                "value": "23F4",
                "key": "Material Name"
            },
            {
                "order": 12,
                "type": "text",
                "value": "8011",
                "key": "Fusion"
            },
            {
                "order": 13,
                "type": "numeric",
                "value": "1894.8011.346034",
                "key": "Full Clone Name"
            },
            {
                "order": 14,
                "type": "date",
                "value": "2019-02-14T15:37:17.963Z",
                "key": "Published Date"
            },
            {
                "order": 16,
                "type": "text",
                "value": "Heavy",
                "key": "Domain"
            },
            {
                "order": 17,
                "type": "text",
                "value": "Human",
                "key": "Species"
            },
            {
                "order": 18,
                "type": "numeric",
                "value": 21180,
                "key": "Sequence Id AA"
            },
            {
                "order": 19,
                "type": "numeric",
                "value": 21179,
                "key": "Sequence Id NT"
            },
            {
                "order": 20,
                "type": "sequence",
                "value": "EVQLVESGGGVVQPGRSLRLSCAASGFTFSSYAMHWVRQAPGKGLEWVTVILYDRNNKYYADSVKGRFTISRDNSKNTLYLQMNSLRAEDTAVYYCARELTGDYYYGMDVWGQGTTVTVSS",
                "key": "Sequence"
            },
            {
                "order": 21,
                "type": "sequence",
                "value": "GAGGTGCAGCTGGTGGAGTCTGGGGGAGGCGTGGTCCAGCCTGGGAGGTCCCTGAGACTCTCCTGTGCAGCCTCTGGATTCACCTTCAGTAGCTATGCTATGCACTGGGTCCGCCAGGCTCCAGGCAAGGGGCTGGAGTGGGTGACAGTTATATTATATGATAGAAACAATAAATACTACGCAGACTCCGTGAAGGGCCGATTCACCATCTCCAGAGACAATTCCAAGAACACGCTGTATCTGCAAATGAACAGCCTGAGAGCTGAGGACACGGCTGTGTATTACTGTGCGAGGGAGTTAACTGGGGATTACTACTACGGTATGGACGTCTGGGGCCAAGGGACCACGGTCACCGTCTCCTCA",
                "key": "DNA"
            },
            {
                "order": 22,
                "type": "numeric",
                "value": 1190,
                "key": "Master Sequence Request Id"
            },
            {
                "order": 23,
                "type": "numeric",
                "value": 2589,
                "key": "Sequence Request Id"
            },
            {
                "order": 24,
                "type": "text",
                "value": "NGS",
                "key": "Request Type"
            },
            {
                "order": 25,
                "type": "text",
                "value": [
                    "IGHV3",
                    "3-30-3",
                    "IGHV3-30-3*03",
                    ""
                ],
                "key": "V Gene"
            },
            {
                "order": 26,
                "type": "text",
                "value": null,
                "key": "D Gene"
            },
            {
                "order": 27,
                "type": "text",
                "value": [
                    "IGHJ6",
                    "6",
                    "IGHJ6*02",
                    ""
                ],
                "key": "J Gene"
            },
            {
                "order": 28,
                "type": "text",
                "value": "1190_Box45_Report_LC.csv",
                "key": "Mi Sequence File Name"
            },
            {
                "order": 29,
                "type": "numeric",
                "value": "3060 ",
                "key": "Cluster Size"
            },
            {
                "order": 30,
                "type": "text",
                "value": "HCo42:01 [J/K/Vh:f/Vk2:f/hK1fh#02:01:f] CF",
                "key": "Strain"
            },
            {
                "order": 31,
                "type": "text",
                "value": "490931",
                "key": "Mouse Ids"
            },
            {
                "order": 32,
                "type": "text",
                "value": "Hybridoma Ab",
                "key": "Source"
            },
            {
                "order": 33,
                "type": "text",
                "key": "Isotype"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 1,
                        "type": "sequence",
                        "key": "Mature AA Sequence"
                    },
                    {
                        "order": 10,
                        "type": "text",
                        "key": "FR1 AA"
                    },
                    {
                        "order": 11,
                        "type": "sequence",
                        "key": "FR1 AA Sequence"
                    },
                    {
                        "order": 12,
                        "type": "text",
                        "key": "CDR1 AA"
                    },
                    {
                        "order": 13,
                        "type": "sequence",
                        "key": "CDR1 AA Sequence"
                    },
                    {
                        "order": 20,
                        "type": "text",
                        "key": "FR2 AA"
                    },
                    {
                        "order": 21,
                        "type": "sequence",
                        "key": "FR2 AA Sequence"
                    },
                    {
                        "order": 22,
                        "type": "text",
                        "key": "CDR2 AA"
                    },
                    {
                        "order": 23,
                        "type": "sequence",
                        "key": "CDR2 AA Sequence"
                    },
                    {
                        "order": 30,
                        "type": "text",
                        "key": "FR3 AA"
                    },
                    {
                        "order": 31,
                        "type": "sequence",
                        "key": "FR3 AA Sequence"
                    },
                    {
                        "order": 32,
                        "type": "text",
                        "key": "CDR3 AA"
                    },
                    {
                        "order": 33,
                        "type": "sequence",
                        "key": "CDR3 AA Sequence"
                    },
                    {
                        "order": 40,
                        "type": "text",
                        "key": "FR4 AA"
                    },
                    {
                        "order": 41,
                        "type": "sequence",
                        "key": "FR4 AA Sequence"
                    }
                ],
                "value": [
                    [
                        "EVQLVESGGGVVQPGRSLRLSCAASGFTFSSYAMHWVRQAPGKGLEWVTVILYDRNNKYYADSVKGRFTISRDNSKNTLYLQMNSLRAEDTAVYYCARELTGDYYYGMDVWGQGTTVTVSS",
                        "1-30",
                        "EVQLVESGGGVVQPGRSLRLSCAASGFTFS",
                        "31-35",
                        "SYAMH",
                        "36-49",
                        "WVRQAPGKGLEWVT",
                        "50-66",
                        "VILYDRNNKYYADSVKG",
                        "67-98",
                        "RFTISRDNSKNTLYLQMNSLRAEDTAVYYCAR",
                        "99-110",
                        "ELTGDYYYGMDV",
                        "111-121",
                        "WGQGTTVTVSS"
                    ]
                ],
                "key": "Sequence Details"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 2,
                        "type": "sequence",
                        "key": "Mature DNA Sequence"
                    },
                    {
                        "order": 50,
                        "type": "text",
                        "key": "DNA FR1"
                    },
                    {
                        "order": 51,
                        "type": "sequence",
                        "key": "DNA FR1 Sequence"
                    },
                    {
                        "order": 52,
                        "type": "text",
                        "key": "DNA CDR1"
                    },
                    {
                        "order": 53,
                        "type": "sequence",
                        "key": "DNA CDR1 Sequence"
                    },
                    {
                        "order": 60,
                        "type": "text",
                        "key": "DNA FR2"
                    },
                    {
                        "order": 61,
                        "type": "sequence",
                        "key": "DNA FR2 Sequence"
                    },
                    {
                        "order": 62,
                        "type": "text",
                        "key": "DNA CDR2"
                    },
                    {
                        "order": 63,
                        "type": "sequence",
                        "key": "DNA CDR2 Sequence"
                    },
                    {
                        "order": 70,
                        "type": "text",
                        "key": "DNA FR3"
                    },
                    {
                        "order": 71,
                        "type": "sequence",
                        "key": "DNA FR3 Sequence"
                    },
                    {
                        "order": 72,
                        "type": "text",
                        "key": "DNA CDR3"
                    },
                    {
                        "order": 73,
                        "type": "sequence",
                        "key": "DNA CDR3 Sequence"
                    },
                    {
                        "order": 80,
                        "type": "text",
                        "key": "DNA FR4"
                    },
                    {
                        "order": 81,
                        "type": "sequence",
                        "key": "DNA FR4 Sequence"
                    }
                ],
                "value": [
                    [
                        "GAGGTGCAGCTGGTGGAGTCTGGGGGAGGCGTGGTCCAGCCTGGGAGGTCCCTGAGACTCTCCTGTGCAGCCTCTGGATTCACCTTCAGTAGCTATGCTATGCACTGGGTCCGCCAGGCTCCAGGCAAGGGGCTGGAGTGGGTGACAGTTATATTATATGATAGAAACAATAAATACTACGCAGACTCCGTGAAGGGCCGATTCACCATCTCCAGAGACAATTCCAAGAACACGCTGTATCTGCAAATGAACAGCCTGAGAGCTGAGGACACGGCTGTGTATTACTGTGCGAGGGAGTTAACTGGGGATTACTACTACGGTATGGACGTCTGGGGCCAAGGGACCACGGTCACCGTCTCCTCA",
                        "1-90",
                        "GAGGTGCAGCTGGTGGAGTCTGGGGGAGGCGTGGTCCAGCCTGGGAGGTCCCTGAGACTCTCCTGTGCAGCCTCTGGATTCACCTTCAGT",
                        "91-105",
                        "AGCTATGCTATGCAC",
                        "106-147",
                        "TGGGTCCGCCAGGCTCCAGGCAAGGGGCTGGAGTGGGTGACA",
                        "148-198",
                        "GTTATATTATATGATAGAAACAATAAATACTACGCAGACTCCGTGAAGGGC",
                        "199-294",
                        "CGATTCACCATCTCCAGAGACAATTCCAAGAACACGCTGTATCTGCAAATGAACAGCCTGAGAGCTGAGGACACGGCTGTGTATTACTGTGCGAGG",
                        "295-330",
                        "GAGTTAACTGGGGATTACTACTACGGTATGGACGTC",
                        "331-363",
                        "TGGGGCCAAGGGACCACGGTCACCGTCTCCTCA"
                    ]
                ],
                "key": "DNA Details"
            }
        ],
        "@timestamp": "2023-07-27T20:32:40.954806",
        "id": 21
    },
    {
        "platform_name": "ADI",
        "application_name": "Sequence",
        "entity_id": "adi-e14305a17fd14981a87b50b67d0dcd30",
        "entity_label": "1755.8574.3C6",
        "entity_name": "10788.VH1",
        "project number": "1755",
        "project name": "anti-FXIa Rev ID",
        "fusion": "8574",
        "published date": "2020-02-04T15:25:08.587000+00:00",
        "domain": "Heavy",
        "species": "Chimeric",
        "request type": "NGS",
        "v gene": [
            "IGHV3",
            "3-7",
            "IGHV3-7*02",
            ""
        ],
        "d gene": [
            "IGHD3",
            "3-3",
            "IGHD3-3*01",
            ""
        ],
        "j gene": [
            "IGHJ4",
            "4",
            "IGHJ4*03",
            ""
        ],
        "mi sequence file name": "1320_CRWJW_HC_Report_ForNextGenADI.csv",
        "strain": "[hVDJ2:03/hKAPPA1:01] [J/K]",
        "source": "Hybridoma Ab",
        "isotype": null,
        "properties": [
            {
                "value": "ADI",
                "order": 0,
                "type": "text",
                "key": "Platform Name"
            },
            {
                "value": "Sequence",
                "order": 1,
                "type": "text",
                "key": "Application Name"
            },
            {
                "value": "1755.8574.3C6",
                "id": "adi-e14305a17fd14981a87b50b67d0dcd30",
                "order": 2,
                "type": "identifier",
                "rule": "md5(platformName, applicationName, FusionId, Project Number, Material_Id, Chain_id, Sequence_idAA)",
                "key": "ID"
            },
            {
                "order": 3,
                "type": "text",
                "value": "10788.VH1",
                "key": "Name"
            },
            {
                "order": 9,
                "type": "text",
                "value": "1755",
                "key": "Project Number"
            },
            {
                "order": 10,
                "type": "text",
                "value": "anti-FXIa Rev ID",
                "key": "Project Name"
            },
            {
                "order": 11,
                "type": "text",
                "value": "3C6",
                "key": "Material Name"
            },
            {
                "order": 12,
                "type": "text",
                "value": "8574",
                "key": "Fusion"
            },
            {
                "order": 13,
                "type": "numeric",
                "value": "1755.8574.380339",
                "key": "Full Clone Name"
            },
            {
                "order": 14,
                "type": "date",
                "value": "2020-02-04T15:25:08.587Z",
                "key": "Published Date"
            },
            {
                "order": 16,
                "type": "text",
                "value": "Heavy",
                "key": "Domain"
            },
            {
                "order": 17,
                "type": "text",
                "value": "Chimeric",
                "key": "Species"
            },
            {
                "order": 18,
                "type": "numeric",
                "value": 44615,
                "key": "Sequence Id AA"
            },
            {
                "order": 19,
                "type": "numeric",
                "value": 44614,
                "key": "Sequence Id NT"
            },
            {
                "order": 20,
                "type": "sequence",
                "value": "EVQLVESGGGLVQPGGSLRLSCAASGFTFSSYWMSWVRQAPGKGLEWVANIKQDGSEKYYVDSVKGRFTISRDNAKNSLYLQMNSLRAEDTAVYYCARGSDFWSGYYIFDYWGQGTLVTVSS",
                "key": "Sequence"
            },
            {
                "order": 21,
                "type": "sequence",
                "value": "GAGGTGCAGCTGGTGGAGTCTGGGGGAGGCTTGGTCCAGCCTGGGGGGTCCCTGAGACTCTCCTGTGCAGCCTCTGGATTCACCTTTAGTAGCTATTGGATGAGCTGGGTCCGCCAGGCTCCAGGGAAGGGGCTGGAGTGGGTGGCCAACATAAAGCAAGATGGAAGTGAGAAATACTATGTGGACTCTGTGAAGGGCCGATTCACCATCTCCAGAGACAACGCCAAGAACTCACTGTATCTGCAAATGAACAGCCTGAGAGCCGAGGACACGGCTGTGTATTACTGTGCGAGAGGGAGCGATTTTTGGAGTGGTTATTATATCTTTGACTACTGGGGCCAGGGAACCCTGGTCACCGTCTCCTCA",
                "key": "DNA"
            },
            {
                "order": 22,
                "type": "numeric",
                "value": 1320,
                "key": "Master Sequence Request Id"
            },
            {
                "order": 23,
                "type": "numeric",
                "value": 10788,
                "key": "Sequence Request Id"
            },
            {
                "order": 24,
                "type": "text",
                "value": "NGS",
                "key": "Request Type"
            },
            {
                "order": 25,
                "type": "text",
                "value": [
                    "IGHV3",
                    "3-7",
                    "IGHV3-7*02",
                    ""
                ],
                "key": "V Gene"
            },
            {
                "order": 26,
                "type": "text",
                "value": [
                    "IGHD3",
                    "3-3",
                    "IGHD3-3*01",
                    ""
                ],
                "key": "D Gene"
            },
            {
                "order": 27,
                "type": "text",
                "value": [
                    "IGHJ4",
                    "4",
                    "IGHJ4*03",
                    ""
                ],
                "key": "J Gene"
            },
            {
                "order": 28,
                "type": "text",
                "value": "1320_CRWJW_HC_Report_ForNextGenADI.csv",
                "key": "Mi Sequence File Name"
            },
            {
                "order": 29,
                "type": "numeric",
                "value": "4821 ",
                "key": "Cluster Size"
            },
            {
                "order": 30,
                "type": "text",
                "value": "[hVDJ2:03/hKAPPA1:01] [J/K]",
                "key": "Strain"
            },
            {
                "order": 31,
                "type": "text",
                "value": "530905,530908,530910,530911",
                "key": "Mouse Ids"
            },
            {
                "order": 32,
                "type": "text",
                "value": "Hybridoma Ab",
                "key": "Source"
            },
            {
                "order": 33,
                "type": "text",
                "key": "Isotype"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 1,
                        "type": "sequence",
                        "key": "Mature AA Sequence"
                    },
                    {
                        "order": 10,
                        "type": "text",
                        "key": "FR1 AA"
                    },
                    {
                        "order": 11,
                        "type": "sequence",
                        "key": "FR1 AA Sequence"
                    },
                    {
                        "order": 12,
                        "type": "text",
                        "key": "CDR1 AA"
                    },
                    {
                        "order": 13,
                        "type": "sequence",
                        "key": "CDR1 AA Sequence"
                    },
                    {
                        "order": 20,
                        "type": "text",
                        "key": "FR2 AA"
                    },
                    {
                        "order": 21,
                        "type": "sequence",
                        "key": "FR2 AA Sequence"
                    },
                    {
                        "order": 22,
                        "type": "text",
                        "key": "CDR2 AA"
                    },
                    {
                        "order": 23,
                        "type": "sequence",
                        "key": "CDR2 AA Sequence"
                    },
                    {
                        "order": 30,
                        "type": "text",
                        "key": "FR3 AA"
                    },
                    {
                        "order": 31,
                        "type": "sequence",
                        "key": "FR3 AA Sequence"
                    },
                    {
                        "order": 32,
                        "type": "text",
                        "key": "CDR3 AA"
                    },
                    {
                        "order": 33,
                        "type": "sequence",
                        "key": "CDR3 AA Sequence"
                    },
                    {
                        "order": 40,
                        "type": "text",
                        "key": "FR4 AA"
                    },
                    {
                        "order": 41,
                        "type": "sequence",
                        "key": "FR4 AA Sequence"
                    }
                ],
                "value": [
                    [
                        "EVQLVESGGGLVQPGGSLRLSCAASGFTFSSYWMSWVRQAPGKGLEWVANIKQDGSEKYYVDSVKGRFTISRDNAKNSLYLQMNSLRAEDTAVYYCARGSDFWSGYYIFDYWGQGTLVTVSS",
                        "1-30",
                        "EVQLVESGGGLVQPGGSLRLSCAASGFTFS",
                        "31-35",
                        "SYWMS",
                        "36-49",
                        "WVRQAPGKGLEWVA",
                        "50-66",
                        "NIKQDGSEKYYVDSVKG",
                        "67-98",
                        "RFTISRDNAKNSLYLQMNSLRAEDTAVYYCAR",
                        "99-111",
                        "GSDFWSGYYIFDY",
                        "112-122",
                        "WGQGTLVTVSS"
                    ]
                ],
                "key": "Sequence Details"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 2,
                        "type": "sequence",
                        "key": "Mature DNA Sequence"
                    },
                    {
                        "order": 50,
                        "type": "text",
                        "key": "DNA FR1"
                    },
                    {
                        "order": 51,
                        "type": "sequence",
                        "key": "DNA FR1 Sequence"
                    },
                    {
                        "order": 52,
                        "type": "text",
                        "key": "DNA CDR1"
                    },
                    {
                        "order": 53,
                        "type": "sequence",
                        "key": "DNA CDR1 Sequence"
                    },
                    {
                        "order": 60,
                        "type": "text",
                        "key": "DNA FR2"
                    },
                    {
                        "order": 61,
                        "type": "sequence",
                        "key": "DNA FR2 Sequence"
                    },
                    {
                        "order": 62,
                        "type": "text",
                        "key": "DNA CDR2"
                    },
                    {
                        "order": 63,
                        "type": "sequence",
                        "key": "DNA CDR2 Sequence"
                    },
                    {
                        "order": 70,
                        "type": "text",
                        "key": "DNA FR3"
                    },
                    {
                        "order": 71,
                        "type": "sequence",
                        "key": "DNA FR3 Sequence"
                    },
                    {
                        "order": 72,
                        "type": "text",
                        "key": "DNA CDR3"
                    },
                    {
                        "order": 73,
                        "type": "sequence",
                        "key": "DNA CDR3 Sequence"
                    },
                    {
                        "order": 80,
                        "type": "text",
                        "key": "DNA FR4"
                    },
                    {
                        "order": 81,
                        "type": "sequence",
                        "key": "DNA FR4 Sequence"
                    }
                ],
                "value": [
                    [
                        "GAGGTGCAGCTGGTGGAGTCTGGGGGAGGCTTGGTCCAGCCTGGGGGGTCCCTGAGACTCTCCTGTGCAGCCTCTGGATTCACCTTTAGTAGCTATTGGATGAGCTGGGTCCGCCAGGCTCCAGGGAAGGGGCTGGAGTGGGTGGCCAACATAAAGCAAGATGGAAGTGAGAAATACTATGTGGACTCTGTGAAGGGCCGATTCACCATCTCCAGAGACAACGCCAAGAACTCACTGTATCTGCAAATGAACAGCCTGAGAGCCGAGGACACGGCTGTGTATTACTGTGCGAGAGGGAGCGATTTTTGGAGTGGTTATTATATCTTTGACTACTGGGGCCAGGGAACCCTGGTCACCGTCTCCTCA",
                        "1-90",
                        "GAGGTGCAGCTGGTGGAGTCTGGGGGAGGCTTGGTCCAGCCTGGGGGGTCCCTGAGACTCTCCTGTGCAGCCTCTGGATTCACCTTTAGT",
                        "91-105",
                        "AGCTATTGGATGAGC",
                        "106-147",
                        "TGGGTCCGCCAGGCTCCAGGGAAGGGGCTGGAGTGGGTGGCC",
                        "148-198",
                        "AACATAAAGCAAGATGGAAGTGAGAAATACTATGTGGACTCTGTGAAGGGC",
                        "199-294",
                        "CGATTCACCATCTCCAGAGACAACGCCAAGAACTCACTGTATCTGCAAATGAACAGCCTGAGAGCCGAGGACACGGCTGTGTATTACTGTGCGAGA",
                        "295-333",
                        "GGGAGCGATTTTTGGAGTGGTTATTATATCTTTGACTAC",
                        "334-366",
                        "TGGGGCCAGGGAACCCTGGTCACCGTCTCCTCA"
                    ]
                ],
                "key": "DNA Details"
            }
        ],
        "@timestamp": "2023-07-27T20:32:16.359434",
        "id": 22
    },
    {
        "platform_name": "ADI",
        "application_name": "Sequence",
        "entity_id": "adi-a7b0165b2001c6d719493bfb30272ab5",
        "entity_label": "1755.8574.3C10",
        "entity_name": "10792.VH1",
        "project number": "1755",
        "project name": "anti-FXIa Rev ID",
        "fusion": "8574",
        "published date": "2020-02-04T15:25:08.697000+00:00",
        "domain": "Heavy",
        "species": "Chimeric",
        "request type": "NGS",
        "v gene": [
            "IGHV3",
            "3-23D",
            "IGHV3-23D*01",
            ""
        ],
        "d gene": null,
        "j gene": [
            "IGHJ6",
            "6",
            "IGHJ6*02",
            ""
        ],
        "mi sequence file name": "1320_CRWJW_HC_Report_ForNextGenADI.csv",
        "strain": "[hVDJ2:03/hKAPPA1:01] [J/K]",
        "source": "Hybridoma Ab",
        "isotype": null,
        "properties": [
            {
                "value": "ADI",
                "order": 0,
                "type": "text",
                "key": "Platform Name"
            },
            {
                "value": "Sequence",
                "order": 1,
                "type": "text",
                "key": "Application Name"
            },
            {
                "value": "1755.8574.3C10",
                "id": "adi-a7b0165b2001c6d719493bfb30272ab5",
                "order": 2,
                "type": "identifier",
                "rule": "md5(platformName, applicationName, FusionId, Project Number, Material_Id, Chain_id, Sequence_idAA)",
                "key": "ID"
            },
            {
                "order": 3,
                "type": "text",
                "value": "10792.VH1",
                "key": "Name"
            },
            {
                "order": 9,
                "type": "text",
                "value": "1755",
                "key": "Project Number"
            },
            {
                "order": 10,
                "type": "text",
                "value": "anti-FXIa Rev ID",
                "key": "Project Name"
            },
            {
                "order": 11,
                "type": "text",
                "value": "3C10",
                "key": "Material Name"
            },
            {
                "order": 12,
                "type": "text",
                "value": "8574",
                "key": "Fusion"
            },
            {
                "order": 13,
                "type": "numeric",
                "value": "1755.8574.380359",
                "key": "Full Clone Name"
            },
            {
                "order": 14,
                "type": "date",
                "value": "2020-02-04T15:25:08.697Z",
                "key": "Published Date"
            },
            {
                "order": 16,
                "type": "text",
                "value": "Heavy",
                "key": "Domain"
            },
            {
                "order": 17,
                "type": "text",
                "value": "Chimeric",
                "key": "Species"
            },
            {
                "order": 18,
                "type": "numeric",
                "value": 44625,
                "key": "Sequence Id AA"
            },
            {
                "order": 19,
                "type": "numeric",
                "value": 44624,
                "key": "Sequence Id NT"
            },
            {
                "order": 20,
                "type": "sequence",
                "value": "EVQLLESGGGLVQPGGSLRLSCAASGFTFSSYAMSWVRQAPGKGLEWVSAISGSGGSTYYADSVKGRFTISRDNSKNTLYLQMNSLRAEDTAVYYCAKDRIITGTTNYYYYGMDVWGQGTTVTVSS",
                "key": "Sequence"
            },
            {
                "order": 21,
                "type": "sequence",
                "value": "GAGGTGCAGCTGTTGGAGTCTGGGGGAGGCTTGGTACAGCCTGGGGGGTCCCTGAGACTCTCCTGTGCAGCCTCTGGATTCACCTTTAGCAGCTATGCCATGAGCTGGGTCCGCCAGGCTCCAGGGAAGGGGCTGGAGTGGGTCTCAGCTATTAGTGGTAGTGGTGGTAGCACATACTACGCAGACTCCGTGAAGGGCCGGTTCACCATCTCCAGAGACAATTCCAAGAACACGCTGTATCTGCAAATGAACAGCCTGAGAGCCGAGGACACGGCCGTATATTACTGTGCGAAAGATCGAATTATAACTGGAACTACGAACTACTACTACTACGGTATGGACGTCTGGGGCCAAGGGACCACGGTCACCGTCTCCTCA",
                "key": "DNA"
            },
            {
                "order": 22,
                "type": "numeric",
                "value": 1320,
                "key": "Master Sequence Request Id"
            },
            {
                "order": 23,
                "type": "numeric",
                "value": 10792,
                "key": "Sequence Request Id"
            },
            {
                "order": 24,
                "type": "text",
                "value": "NGS",
                "key": "Request Type"
            },
            {
                "order": 25,
                "type": "text",
                "value": [
                    "IGHV3",
                    "3-23D",
                    "IGHV3-23D*01",
                    ""
                ],
                "key": "V Gene"
            },
            {
                "order": 26,
                "type": "text",
                "value": null,
                "key": "D Gene"
            },
            {
                "order": 27,
                "type": "text",
                "value": [
                    "IGHJ6",
                    "6",
                    "IGHJ6*02",
                    ""
                ],
                "key": "J Gene"
            },
            {
                "order": 28,
                "type": "text",
                "value": "1320_CRWJW_HC_Report_ForNextGenADI.csv",
                "key": "Mi Sequence File Name"
            },
            {
                "order": 29,
                "type": "numeric",
                "value": "3870 ",
                "key": "Cluster Size"
            },
            {
                "order": 30,
                "type": "text",
                "value": "[hVDJ2:03/hKAPPA1:01] [J/K]",
                "key": "Strain"
            },
            {
                "order": 31,
                "type": "text",
                "value": "530905,530908,530910,530911",
                "key": "Mouse Ids"
            },
            {
                "order": 32,
                "type": "text",
                "value": "Hybridoma Ab",
                "key": "Source"
            },
            {
                "order": 33,
                "type": "text",
                "key": "Isotype"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 1,
                        "type": "sequence",
                        "key": "Mature AA Sequence"
                    },
                    {
                        "order": 10,
                        "type": "text",
                        "key": "FR1 AA"
                    },
                    {
                        "order": 11,
                        "type": "sequence",
                        "key": "FR1 AA Sequence"
                    },
                    {
                        "order": 12,
                        "type": "text",
                        "key": "CDR1 AA"
                    },
                    {
                        "order": 13,
                        "type": "sequence",
                        "key": "CDR1 AA Sequence"
                    },
                    {
                        "order": 20,
                        "type": "text",
                        "key": "FR2 AA"
                    },
                    {
                        "order": 21,
                        "type": "sequence",
                        "key": "FR2 AA Sequence"
                    },
                    {
                        "order": 22,
                        "type": "text",
                        "key": "CDR2 AA"
                    },
                    {
                        "order": 23,
                        "type": "sequence",
                        "key": "CDR2 AA Sequence"
                    },
                    {
                        "order": 30,
                        "type": "text",
                        "key": "FR3 AA"
                    },
                    {
                        "order": 31,
                        "type": "sequence",
                        "key": "FR3 AA Sequence"
                    },
                    {
                        "order": 32,
                        "type": "text",
                        "key": "CDR3 AA"
                    },
                    {
                        "order": 33,
                        "type": "sequence",
                        "key": "CDR3 AA Sequence"
                    },
                    {
                        "order": 40,
                        "type": "text",
                        "key": "FR4 AA"
                    },
                    {
                        "order": 41,
                        "type": "sequence",
                        "key": "FR4 AA Sequence"
                    }
                ],
                "value": [
                    [
                        "EVQLLESGGGLVQPGGSLRLSCAASGFTFSSYAMSWVRQAPGKGLEWVSAISGSGGSTYYADSVKGRFTISRDNSKNTLYLQMNSLRAEDTAVYYCAKDRIITGTTNYYYYGMDVWGQGTTVTVSS",
                        "1-30",
                        "EVQLLESGGGLVQPGGSLRLSCAASGFTFS",
                        "31-35",
                        "SYAMS",
                        "36-49",
                        "WVRQAPGKGLEWVS",
                        "50-66",
                        "AISGSGGSTYYADSVKG",
                        "67-98",
                        "RFTISRDNSKNTLYLQMNSLRAEDTAVYYCAK",
                        "99-115",
                        "DRIITGTTNYYYYGMDV",
                        "116-126",
                        "WGQGTTVTVSS"
                    ]
                ],
                "key": "Sequence Details"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 2,
                        "type": "sequence",
                        "key": "Mature DNA Sequence"
                    },
                    {
                        "order": 50,
                        "type": "text",
                        "key": "DNA FR1"
                    },
                    {
                        "order": 51,
                        "type": "sequence",
                        "key": "DNA FR1 Sequence"
                    },
                    {
                        "order": 52,
                        "type": "text",
                        "key": "DNA CDR1"
                    },
                    {
                        "order": 53,
                        "type": "sequence",
                        "key": "DNA CDR1 Sequence"
                    },
                    {
                        "order": 60,
                        "type": "text",
                        "key": "DNA FR2"
                    },
                    {
                        "order": 61,
                        "type": "sequence",
                        "key": "DNA FR2 Sequence"
                    },
                    {
                        "order": 62,
                        "type": "text",
                        "key": "DNA CDR2"
                    },
                    {
                        "order": 63,
                        "type": "sequence",
                        "key": "DNA CDR2 Sequence"
                    },
                    {
                        "order": 70,
                        "type": "text",
                        "key": "DNA FR3"
                    },
                    {
                        "order": 71,
                        "type": "sequence",
                        "key": "DNA FR3 Sequence"
                    },
                    {
                        "order": 72,
                        "type": "text",
                        "key": "DNA CDR3"
                    },
                    {
                        "order": 73,
                        "type": "sequence",
                        "key": "DNA CDR3 Sequence"
                    },
                    {
                        "order": 80,
                        "type": "text",
                        "key": "DNA FR4"
                    },
                    {
                        "order": 81,
                        "type": "sequence",
                        "key": "DNA FR4 Sequence"
                    }
                ],
                "value": [
                    [
                        "GAGGTGCAGCTGTTGGAGTCTGGGGGAGGCTTGGTACAGCCTGGGGGGTCCCTGAGACTCTCCTGTGCAGCCTCTGGATTCACCTTTAGCAGCTATGCCATGAGCTGGGTCCGCCAGGCTCCAGGGAAGGGGCTGGAGTGGGTCTCAGCTATTAGTGGTAGTGGTGGTAGCACATACTACGCAGACTCCGTGAAGGGCCGGTTCACCATCTCCAGAGACAATTCCAAGAACACGCTGTATCTGCAAATGAACAGCCTGAGAGCCGAGGACACGGCCGTATATTACTGTGCGAAAGATCGAATTATAACTGGAACTACGAACTACTACTACTACGGTATGGACGTCTGGGGCCAAGGGACCACGGTCACCGTCTCCTCA",
                        "1-90",
                        "GAGGTGCAGCTGTTGGAGTCTGGGGGAGGCTTGGTACAGCCTGGGGGGTCCCTGAGACTCTCCTGTGCAGCCTCTGGATTCACCTTTAGC",
                        "91-105",
                        "AGCTATGCCATGAGC",
                        "106-147",
                        "TGGGTCCGCCAGGCTCCAGGGAAGGGGCTGGAGTGGGTCTCA",
                        "148-198",
                        "GCTATTAGTGGTAGTGGTGGTAGCACATACTACGCAGACTCCGTGAAGGGC",
                        "199-294",
                        "CGGTTCACCATCTCCAGAGACAATTCCAAGAACACGCTGTATCTGCAAATGAACAGCCTGAGAGCCGAGGACACGGCCGTATATTACTGTGCGAAA",
                        "295-345",
                        "GATCGAATTATAACTGGAACTACGAACTACTACTACTACGGTATGGACGTC",
                        "346-378",
                        "TGGGGCCAAGGGACCACGGTCACCGTCTCCTCA"
                    ]
                ],
                "key": "DNA Details"
            }
        ],
        "@timestamp": "2023-07-27T20:32:16.455432",
        "id": 23
    },
    {
        "platform_name": "ADI",
        "application_name": "Sequence",
        "entity_id": "adi-3a756f0bf8cc56eda4fa561b059a1de5",
        "entity_label": "1891.7888.19C1",
        "entity_name": "4134.VK1",
        "project number": "1891",
        "project name": "IL-3 (therapeutic)",
        "fusion": "7888",
        "published date": "2019-05-02T13:24:55.853000+00:00",
        "domain": "KappaLight",
        "species": "Human",
        "request type": "NGS",
        "v gene": [
            "IGKV3D",
            "L20",
            "IGKV3D-11*02",
            ""
        ],
        "d gene": null,
        "j gene": [
            "IGKJ5",
            "5",
            "IGKJ5*01",
            ""
        ],
        "mi sequence file name": "1210_Box37_Report_LC.csv",
        "strain": "KM [J/K]",
        "source": "Hybridoma Ab",
        "isotype": null,
        "properties": [
            {
                "value": "ADI",
                "order": 0,
                "type": "text",
                "key": "Platform Name"
            },
            {
                "value": "Sequence",
                "order": 1,
                "type": "text",
                "key": "Application Name"
            },
            {
                "value": "1891.7888.19C1",
                "id": "adi-3a756f0bf8cc56eda4fa561b059a1de5",
                "order": 2,
                "type": "identifier",
                "rule": "md5(platformName, applicationName, FusionId, Project Number, Material_Id, Chain_id, Sequence_idAA)",
                "key": "ID"
            },
            {
                "order": 3,
                "type": "text",
                "value": "4134.VK1",
                "key": "Name"
            },
            {
                "order": 9,
                "type": "text",
                "value": "1891",
                "key": "Project Number"
            },
            {
                "order": 10,
                "type": "text",
                "value": "IL-3 (therapeutic)",
                "key": "Project Name"
            },
            {
                "order": 11,
                "type": "text",
                "value": "19C1",
                "key": "Material Name"
            },
            {
                "order": 12,
                "type": "text",
                "value": "7888",
                "key": "Fusion"
            },
            {
                "order": 13,
                "type": "numeric",
                "value": "1891.7888.368112",
                "key": "Full Clone Name"
            },
            {
                "order": 14,
                "type": "date",
                "value": "2019-05-02T13:24:55.853Z",
                "key": "Published Date"
            },
            {
                "order": 16,
                "type": "text",
                "value": "KappaLight",
                "key": "Domain"
            },
            {
                "order": 17,
                "type": "text",
                "value": "Human",
                "key": "Species"
            },
            {
                "order": 18,
                "type": "numeric",
                "value": 29701,
                "key": "Sequence Id AA"
            },
            {
                "order": 19,
                "type": "numeric",
                "value": 29700,
                "key": "Sequence Id NT"
            },
            {
                "order": 20,
                "type": "sequence",
                "value": "EIVLTQSPATLSLSPGERATLSCRASQSVSSYLAWYQQKPGQAPRLLIYDASNRATGIPARFSGSGSGTDFTLTISSLEPEDFAVYYCQQRSNWLITFGQGTRLEIK",
                "key": "Sequence"
            },
            {
                "order": 21,
                "type": "sequence",
                "value": "GAAATTGTGTTGACGCAGTCTCCAGCCACCCTGTCTTTGTCTCCAGGGGAAAGAGCCACCCTCTCCTGCAGGGCCAGTCAGAGTGTTAGCAGCTACTTAGCCTGGTACCAACAGAAACCTGGCCAGGCTCCCAGGCTCCTCATCTATGATGCATCCAACAGGGCCACTGGCATCCCAGCCAGGTTCAGTGGCAGTGGGTCTGGGACAGACTTCACTCTCACCATCAGCAGCCTAGAGCCTGAAGATTTTGCAGTTTATTACTGTCAGCAGCGTAGCAACTGGCTGATCACCTTCGGCCAAGGGACACGACTGGAGATTAAA",
                "key": "DNA"
            },
            {
                "order": 22,
                "type": "numeric",
                "value": 1210,
                "key": "Master Sequence Request Id"
            },
            {
                "order": 23,
                "type": "numeric",
                "value": 4134,
                "key": "Sequence Request Id"
            },
            {
                "order": 24,
                "type": "text",
                "value": "NGS",
                "key": "Request Type"
            },
            {
                "order": 25,
                "type": "text",
                "value": [
                    "IGKV3D",
                    "L20",
                    "IGKV3D-11*02",
                    ""
                ],
                "key": "V Gene"
            },
            {
                "order": 26,
                "type": "text",
                "value": null,
                "key": "D Gene"
            },
            {
                "order": 27,
                "type": "text",
                "value": [
                    "IGKJ5",
                    "5",
                    "IGKJ5*01",
                    ""
                ],
                "key": "J Gene"
            },
            {
                "order": 28,
                "type": "text",
                "value": "1210_Box37_Report_LC.csv",
                "key": "Mi Sequence File Name"
            },
            {
                "order": 29,
                "type": "numeric",
                "value": "4868 ",
                "key": "Cluster Size"
            },
            {
                "order": 30,
                "type": "text",
                "value": "KM [J/K]",
                "key": "Strain"
            },
            {
                "order": 31,
                "type": "text",
                "value": "470121,470127",
                "key": "Mouse Ids"
            },
            {
                "order": 32,
                "type": "text",
                "value": "Hybridoma Ab",
                "key": "Source"
            },
            {
                "order": 33,
                "type": "text",
                "key": "Isotype"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 1,
                        "type": "sequence",
                        "key": "Mature AA Sequence"
                    },
                    {
                        "order": 10,
                        "type": "text",
                        "key": "FR1 AA"
                    },
                    {
                        "order": 11,
                        "type": "sequence",
                        "key": "FR1 AA Sequence"
                    },
                    {
                        "order": 12,
                        "type": "text",
                        "key": "CDR1 AA"
                    },
                    {
                        "order": 13,
                        "type": "sequence",
                        "key": "CDR1 AA Sequence"
                    },
                    {
                        "order": 20,
                        "type": "text",
                        "key": "FR2 AA"
                    },
                    {
                        "order": 21,
                        "type": "sequence",
                        "key": "FR2 AA Sequence"
                    },
                    {
                        "order": 22,
                        "type": "text",
                        "key": "CDR2 AA"
                    },
                    {
                        "order": 23,
                        "type": "sequence",
                        "key": "CDR2 AA Sequence"
                    },
                    {
                        "order": 30,
                        "type": "text",
                        "key": "FR3 AA"
                    },
                    {
                        "order": 31,
                        "type": "sequence",
                        "key": "FR3 AA Sequence"
                    },
                    {
                        "order": 32,
                        "type": "text",
                        "key": "CDR3 AA"
                    },
                    {
                        "order": 33,
                        "type": "sequence",
                        "key": "CDR3 AA Sequence"
                    },
                    {
                        "order": 40,
                        "type": "text",
                        "key": "FR4 AA"
                    },
                    {
                        "order": 41,
                        "type": "sequence",
                        "key": "FR4 AA Sequence"
                    }
                ],
                "value": [
                    [
                        "EIVLTQSPATLSLSPGERATLSCRASQSVSSYLAWYQQKPGQAPRLLIYDASNRATGIPARFSGSGSGTDFTLTISSLEPEDFAVYYCQQRSNWLITFGQGTRLEIK",
                        "1-23",
                        "EIVLTQSPATLSLSPGERATLSC",
                        "24-34",
                        "RASQSVSSYLA",
                        "35-49",
                        "WYQQKPGQAPRLLIY",
                        "50-56",
                        "DASNRAT",
                        "57-88",
                        "GIPARFSGSGSGTDFTLTISSLEPEDFAVYYC",
                        "89-97",
                        "QQRSNWLIT",
                        "98-107",
                        "FGQGTRLEIK"
                    ]
                ],
                "key": "Sequence Details"
            },
            {
                "order": 100,
                "type": "table",
                "columns": [
                    {
                        "order": 2,
                        "type": "sequence",
                        "key": "Mature DNA Sequence"
                    },
                    {
                        "order": 50,
                        "type": "text",
                        "key": "DNA FR1"
                    },
                    {
                        "order": 51,
                        "type": "sequence",
                        "key": "DNA FR1 Sequence"
                    },
                    {
                        "order": 52,
                        "type": "text",
                        "key": "DNA CDR1"
                    },
                    {
                        "order": 53,
                        "type": "sequence",
                        "key": "DNA CDR1 Sequence"
                    },
                    {
                        "order": 60,
                        "type": "text",
                        "key": "DNA FR2"
                    },
                    {
                        "order": 61,
                        "type": "sequence",
                        "key": "DNA FR2 Sequence"
                    },
                    {
                        "order": 62,
                        "type": "text",
                        "key": "DNA CDR2"
                    },
                    {
                        "order": 63,
                        "type": "sequence",
                        "key": "DNA CDR2 Sequence"
                    },
                    {
                        "order": 70,
                        "type": "text",
                        "key": "DNA FR3"
                    },
                    {
                        "order": 71,
                        "type": "sequence",
                        "key": "DNA FR3 Sequence"
                    },
                    {
                        "order": 72,
                        "type": "text",
                        "key": "DNA CDR3"
                    },
                    {
                        "order": 73,
                        "type": "sequence",
                        "key": "DNA CDR3 Sequence"
                    },
                    {
                        "order": 80,
                        "type": "text",
                        "key": "DNA FR4"
                    },
                    {
                        "order": 81,
                        "type": "sequence",
                        "key": "DNA FR4 Sequence"
                    }
                ],
                "value": [
                    [
                        "GAAATTGTGTTGACGCAGTCTCCAGCCACCCTGTCTTTGTCTCCAGGGGAAAGAGCCACCCTCTCCTGCAGGGCCAGTCAGAGTGTTAGCAGCTACTTAGCCTGGTACCAACAGAAACCTGGCCAGGCTCCCAGGCTCCTCATCTATGATGCATCCAACAGGGCCACTGGCATCCCAGCCAGGTTCAGTGGCAGTGGGTCTGGGACAGACTTCACTCTCACCATCAGCAGCCTAGAGCCTGAAGATTTTGCAGTTTATTACTGTCAGCAGCGTAGCAACTGGCTGATCACCTTCGGCCAAGGGACACGACTGGAGATTAAA",
                        "1-69",
                        "GAAATTGTGTTGACGCAGTCTCCAGCCACCCTGTCTTTGTCTCCAGGGGAAAGAGCCACCCTCTCCTGC",
                        "70-102",
                        "AGGGCCAGTCAGAGTGTTAGCAGCTACTTAGCC",
                        "103-147",
                        "TGGTACCAACAGAAACCTGGCCAGGCTCCCAGGCTCCTCATCTAT",
                        "148-168",
                        "GATGCATCCAACAGGGCCACT",
                        "169-264",
                        "GGCATCCCAGCCAGGTTCAGTGGCAGTGGGTCTGGGACAGACTTCACTCTCACCATCAGCAGCCTAGAGCCTGAAGATTTTGCAGTTTATTACTGT",
                        "265-291",
                        "CAGCAGCGTAGCAACTGGCTGATCACC",
                        "292-321",
                        "TTCGGCCAAGGGACACGACTGGAGATTAAA"
                    ]
                ],
                "key": "DNA Details"
            }
        ],
        "@timestamp": "2023-07-27T20:32:16.615433",
        "id": 24
    }
]