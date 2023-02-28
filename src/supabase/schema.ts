export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      class: {
        Row: {
          created_at: string;
          end_month: string;
          id: number;
          name: string;
          school: number;
          start_month: string;
        };
        Insert: {
          created_at?: string;
          end_month: string;
          id?: number;
          name: string;
          school: number;
          start_month: string;
        };
        Update: {
          created_at?: string;
          end_month?: string;
          id?: number;
          name?: string;
          school?: number;
          start_month?: string;
        };
      };
      profiles: {
        Row: {
          id: string;
          name: string;
        };
        Insert: {
          id: string;
          name: string;
        };
        Update: {
          id?: string;
          name?: string;
        };
      };
      school: {
        Row: {
          created_at: string | null;
          id: number;
          name: string;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          name: string;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          name?: string;
        };
      };
      students: {
        Row: {
          class: number | null;
          created_at: string | null;
          email: string | null;
          id: number;
          name: string | null;
        };
        Insert: {
          class?: number | null;
          created_at?: string | null;
          email?: string | null;
          id?: number;
          name?: string | null;
        };
        Update: {
          class?: number | null;
          created_at?: string | null;
          email?: string | null;
          id?: number;
          name?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
