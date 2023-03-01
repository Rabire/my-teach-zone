export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      formations: {
        Row: {
          end: string
          form_id: number
          id: number
          lesson_id: number
          start: string
          teacher_id: string
        }
        Insert: {
          end: string
          form_id: number
          id?: number
          lesson_id: number
          start: string
          teacher_id?: string
        }
        Update: {
          end?: string
          form_id?: number
          id?: number
          lesson_id?: number
          start?: string
          teacher_id?: string
        }
      }
      forms: {
        Row: {
          end: string
          id: number
          name: string
          school_id: number
          start: string
        }
        Insert: {
          end: string
          id?: number
          name: string
          school_id: number
          start: string
        }
        Update: {
          end?: string
          id?: number
          name?: string
          school_id?: number
          start?: string
        }
      }
      lessons: {
        Row: {
          content: string | null
          id: number
          name: string
        }
        Insert: {
          content?: string | null
          id?: number
          name: string
        }
        Update: {
          content?: string | null
          id?: number
          name?: string
        }
      }
      schools: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
      }
      students: {
        Row: {
          content: string | null
          form_id: number | null
          id: number
          name: string
        }
        Insert: {
          content?: string | null
          form_id?: number | null
          id?: number
          name: string
        }
        Update: {
          content?: string | null
          form_id?: number | null
          id?: number
          name?: string
        }
      }
      teachers: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

