/**
 * Type definitions for AccordDesk UI
 * 
 * Following backend database-driven naming conventions:
 * - Flat structures with detailed naming
 * - Prefixed column names (e.g., cla_index, con_index, sec_index)
 * - Explicit null types for optional fields
 */

// ============================================================================
// TEMPLATE TYPES
// ============================================================================

/**
 * Template type categories
 */
export type TemplateType = "SALES" | "R&D" | "PROCUREMENT";
export type TemplateLanguage = "ENGLISH" | "GERMAN" | "FRENCH";
export type TemplateLength = "SHORT" | "LONG";

/**
 * Template entity from template library
 * Represents a contract template in the drafting manager
 */
export interface Template {
  id: number;
  title: string;
  type: string[];
  author: string;
  date: string;
}

/**
 * Author templates collection
 * Groups templates by author
 */
export interface AuthorTemplates {
  authorName: string;
  templates: Template[];
}

// ============================================================================
// CONTRACT METADATA TYPES
// ============================================================================

/**
 * Contract metadata
 * Primary contract information (con_ prefix follows backend convention)
 */
export interface ContractMetadata {
  con_index: number;
  title: string;
  type: string;
  identifier: string;
  sort: string;
  version: string;
  status: string;
  created_date: string;
  last_modified: string;
  document_code: string;
  author: string;
  language: string;
  applicable_law: string;
  jurisdiction: string;
  note: string;
}

// ============================================================================
// PARTY TYPES
// ============================================================================

/**
 * Party to the agreement
 * Represents a contracting party (party_ prefix follows backend convention)
 */
export interface Party {
  party_index: number;
  con_index: number;
  party_id: string;
  party_type: string;
  party_name: string;
  party_registered_office: string;
  party_registration_number: string | null;
  party_represented_by: string;
  party_role: string;
  party_approved: boolean;
  party_signed: boolean;
}

// ============================================================================
// TERMS TYPES
// ============================================================================

/**
 * Agreement terms
 * Contract terms and conditions (term_ prefix follows backend convention)
 */
export interface Terms {
  term_index: number;
  con_index: number;
  effective_date: string;
  expiration_date: string;
  confidentiality_period: string;
  disclosure_period: string;
  termination_notice: string;
  penalty: string | null;
  confidential_information_scope: string;
  change_of_control_termination: boolean;
}

// ============================================================================
// SECTION TYPES
// ============================================================================

/**
 * Section type categories
 */
export type SectionType = "preamble" | "definitions" | "clauses" | "subsection" | "appendix";

/**
 * Section hierarchy
 * Document sections and subsections (sec_ prefix follows backend convention)
 */
export interface Section {
  sec_index: number;
  sec_con_index: number;
  sec_header: string;
  sec_parent_index: number | null;
  sec_point: string;
  sec_order: number;
  sec_type: SectionType;
}

// ============================================================================
// PREAMBLE TYPES
// ============================================================================

/**
 * Preamble type categories
 */
export type PreambleType = "whereas" | "recital" | "background";

/**
 * Preamble status
 */
export type PreambleStatus = "placeholder" | "draft" | "final" | "approved";

/**
 * Preamble item (WHEREAS clause)
 * Contract preamble/recitals (preamble_ prefix follows backend convention)
 */
export interface Preamble {
  preamble_index: number;
  preamble_con_index: number;
  preamble_sec_index: number;
  preamble_point: string;
  preamble_order: number;
  preamble_type: PreambleType;
  preamble_text: string;
  preamble_status: PreambleStatus;
  preamble_negotiable: boolean;
  preamble_short: string;
  preamble_info: string;
  preamble_meta: string;
  preamble_playbook: string;
  preamble_fallback: string | null;
  preamble_accountable: string;
  preamble_approval: boolean;
  preamble_text__vs: string | null;
  preamble_approval__vs: boolean | null;
  preamble_comment: string | null;
  preamble_comment__vs: string | null;
  preamble_compare: string | null;
  preamble_timestamp: string | null;
  preamble_updated: boolean;
}

// ============================================================================
// DEFINITION TYPES
// ============================================================================

/**
 * Definition status
 */
export type DefinitionStatus = "placeholder" | "draft" | "final" | "approved";

/**
 * Definition entry
 * Contract definitions section (def_ prefix follows backend convention)
 */
export interface Definition {
  def_index: number;
  def_con_index: number;
  def_sec_index: number;
  def_point: string;
  def_order: number;
  def_key: string;
  def_value: string;
  def_status: DefinitionStatus;
  def_negotiable: boolean;
  def_short: string;
  def_info: string;
  def_meta: string;
  def_playbook: string;
  def_fallback: string | null;
  def_accountable: string;
  def_approval: boolean;
  def_value__vs: string | null;
  def_approval__vs: boolean | null;
  def_comment: string | null;
  def_comment__vs: string | null;
  def_compare: string | null;
  def_timestamp: string | null;
  def_updated: boolean;
}

// ============================================================================
// CLAUSE TYPES
// ============================================================================

/**
 * Clause status
 */
export type ClauseStatus = "placeholder" | "draft" | "final" | "approved";

/**
 * Clause entry
 * Contract clauses (cla_ prefix follows backend convention)
 */
export interface Clause {
  cla_index: number;
  cla_sec_index: number;
  cla_con_index: number;
  cla_header: string;
  cla_point: string;
  cla_order: number;
  cla_text: string;
  cla_negotiable: boolean;
  cla_short: string;
  cla_info: string;
  cla_meta: string;
  cla_playbook: string;
  cla_fallback: string | null;
  cla_accountable: string;
  cla_approval: boolean;
  cla_text__vs: string | null;
  cla_approval__vs: boolean | null;
  cla_comment: string | null;
  cla_comment__vs: string | null;
  cla_compare: string | null;
  cla_timestamp: string | null;
  cla_updated: boolean;
}

// ============================================================================
// CONTRACT DATA AGGREGATE
// ============================================================================

/**
 * Complete contract data structure
 * Aggregates all contract-related data
 */
/**
 * Signature information
 */
export interface Signature {
  sig_index: number;
  sig_con_index: number;
  sig_party_index: number;
  sig_party_name: string;
  sig_signatory_name: string;
  sig_signatory_title: string;
  sig_date: string | null;
  sig_status: string;
  sig_ip_address: string | null;
  sig_timestamp: string | null;
}

export interface ContractData {
  metadata: ContractMetadata;
  parties: Party[];
  terms: Terms;
  sections: Section[];
  preamble: Preamble[];
  definitions: Definition[];
  clauses: Clause[];
  signatures?: Signature[];
  workflow?: any; // Optional workflow data for UI design purposes
  comments?: any; // Optional comments/discussion threads for UI design purposes
  change_history?: any; // Optional change history for UI design purposes
}

// ============================================================================
// COMPONENT PROP TYPES
// ============================================================================

/**
 * Template card component props
 */
export interface TemplateCardProps {
  template: Template;
  onClick?: () => void;
}

/**
 * Sidebar component props
 */
export interface SidebarProps {
  onCreateEmpty?: () => void;
}

/**
 * Contract viewer component props
 */
export interface ContractViewerProps {
  contractData?: ContractData;
}

// ============================================================================
// EVENT HANDLER TYPES
// ============================================================================

/**
 * Generic click handler
 */
export type ClickHandler = () => void;

/**
 * Template click handler
 */
export type TemplateClickHandler = (template: Template) => void;

/**
 * Keyboard event handler for accessibility
 */
export type KeyboardEventHandler = (event: KeyboardEvent) => void;

