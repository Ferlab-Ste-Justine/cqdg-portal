export const fileMapping: Map<string, string> = new Map([
    ['savesets.file', 'file_id'],
    ['study_id_keyword', 'study.study_id_keyword'],
    ['savesets.donor', 'donors.submitter_donor_id'],
    ['gender', 'donors.gender'],
    ['ethnicity', 'donors.ethnicity'],
    ['age_at_recruitment', 'donors.age_at_recruitment'],
    ['vital_status', 'donors.vital_status'],
    ['donor_id', 'donors.donor_id'],
    ['files.file_id', 'file_id'],
    ['submitter_donor_id', 'donors.submitter_donor_id'],
    ['short_name_keyword', 'study.short_name_keyword'],
]);

export const donorMapping: Map<string, string> = new Map([
    ['donors.diagnoses.mondo_term_keyword', 'diagnoses.mondo_term_keyword'],
    ['donors.phenotypes.hpo_category_keyword', 'phenotypes.hpo_category_keyword'],
    ['donors.diagnoses.icd_category_keyword', 'diagnoses.icd_category_keyword'],
    ['population', 'study.population'],
    ['domain', 'study.domain'],
    ['study_id_keyword', 'study.study_id_keyword'],
    ['savesets.donor', 'submitter_donor_id'],
    ['savesets.file', 'files.file_id'],
    ['data_category', 'files.data_category'],
    ['data_type', 'files.data_type'],
    ['file_format', 'files.file_format'],
    ['data_access', 'files.data_access'],
    ['platform', 'files.platform'],
    ['experimental_strategy', 'files.experimental_strategy'],
    ['is_harmonized', 'files.is_harmonized'],
    ['file_id', 'files.file_id'],
    ['donors.submitter_donor_id', 'submitter_donor_id'],
    ['short_name_keyword', 'study.short_name_keyword'],
]);

export const studyMapping: Map<string, string> = new Map([]);
