export enum Role {
    USER = "USER",
    ADMIN = "ADMIN",
}

export type TemplateQuery = {
    id: string | null,
    headerPrimary: string | null,
    backgroundColor: string | null,
    buttonColor: string | null,
    buttonTextColor: string | null,
    hasHeader: boolean | null,
    hasConcept: boolean | null,
    hasReference: boolean | null,
    commerce: {
        id: string | null,
        allowForProduction: boolean | null,
        companyName: string | null,
        user: {
            id?: string | null;
            role: Role | null;
            email?: string | null;
            address?: {
                address1?: string | null;
                city?: string | null;
                country?: string | null;
                postalCode?: number | null;
                state?: string | null;
            } | null;
        } | null,
        publicid: string | null,
        fiscalAddress: {
            address1?: string | null;
            city?: string | null;
            country?: string | null;
            postalCode?: number | null;
            state?: string | null;
        } | null;
    } | null,
}