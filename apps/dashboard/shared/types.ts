export interface User {
    id?: string;
    name?: string;
    phone_number?: string | null;
    is_2fa_enabled?: boolean;
    is_active?: boolean;
    activated_at?: string | null;
    last_logged_in_at?: string;
    last_logged_in_ip?: string;
    last_logged_in_location?: {
        latitude?: string;
        longitude?: string;
    },
    created_at?: string;
    updated_at?: string;
}