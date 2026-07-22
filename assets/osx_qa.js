js
// /assets/osx_qa.js
// 100+ preloaded Q&A for the Vaxogene AI widget.
// You can safely edit text, add/remove items, or change order.

window.OSX_QA = [
  /* =========================
   * GENERAL (15)
   * ========================= */
  {id:'gen-01', q:'What is Vaxogene?', a:'Vaxogene provides AI-powered multi-omics software and services for immunotherapy, vaccine development, and translational research.', tags:['general'], keywords:['vaxogene','company','what is']},
  {id:'gen-02', q:'Who uses Vaxogene?', a:'Biotech and pharma R&D teams, academic labs, and hospital translational groups working on immuno-oncology, vaccines, and diagnostics.', tags:['general'], keywords:['customers','who uses','audience']},
  {id:'gen-03', q:'Do you support academic labs?', a:'Yes—academic pricing and lightweight onboarding are available for PIs, cores, and student teams.', tags:['general','pricing'], keywords:['academic','university','discount']},
  {id:'gen-04', q:'Can you handle clinical samples?', a:'Yes—our pipelines support clinical-grade QC, de-identification workflows, and exportable audit trails.', tags:['general','clinical'], keywords:['clinical','samples','audit']},
  {id:'gen-05', q:'Do you offer custom development?', a:'We offer custom pipelines, integrations, dashboards, and annotation logic on a statement-of-work basis.', tags:['general','services'], keywords:['custom','development','integration']},
  {id:'gen-06', q:'Where is data processed?', a:'Deployments can be cloud-hosted (region-selectable) or on-prem. We also support private VPC configurations.', tags:['general','security'], keywords:['cloud','on-prem','region','vpc']},
  {id:'gen-07', q:'What onboarding help do you provide?', a:'We include a project kickoff, sample templates, and pipeline presets; Enterprise plans add white-glove onboarding.', tags:['general','success'], keywords:['onboarding','kickoff','support']},
  {id:'gen-08', q:'Do you have documentation?', a:'Yes—platform docs, pipeline guides, and API references are available at /resources/platform/.', tags:['general','docs'], keywords:['docs','documentation','api']},
  {id:'gen-09', q:'Do you provide training sessions?', a:'We offer live training for new users and recorded modules for self-serve onboarding.', tags:['general','success'], keywords:['training','enablement']},
  {id:'gen-10', q:'How fast is typical turnaround?', a:'Turnaround depends on data size and compute tier; small RNA-seq runs complete in hours, WES/WGS in hours to a day.', tags:['general','performance'], keywords:['turnaround','speed','runtime']},
  {id:'gen-11', q:'Which file formats do you accept?', a:'We accept FASTQ, BAM/CRAM, VCF, GTF/GFF, and common expression matrices (CSV/TSV, MTX).', tags:['general','io'], keywords:['fastq','vcf','bam','mtx','matrix']},
  {id:'gen-12', q:'Can I export results to my LIMS?', a:'Yes—CSV/JSON exports and webhooks are included; direct LIMS integrations are available on request.', tags:['general','integration'], keywords:['export','lims','json','csv','webhook']},
  {id:'gen-13', q:'Do you support notebooks?', a:'Yes—Jupyter-based analysis spaces and R/Python SDKs are available for Pro and Enterprise.', tags:['general','dev'], keywords:['notebook','jupyter','sdk','python','r']},
  {id:'gen-14', q:'How are updates delivered?', a:'Cloud users receive rolling updates; on-prem customers get versioned releases with changelogs.', tags:['general','release'], keywords:['updates','release','changelog']},
  {id:'gen-15', q:'Do you offer SLAs?', a:'Yes—Enterprise plans include uptime SLAs, support response targets, and incident communications.', tags:['general','sla'], keywords:['sla','uptime','support']},

  /* =========================
   * IMMUNOAI PLATFORM (25)
   * ========================= */
  {id:'im-01', q:'What is the ImmunoAI Platform?', a:'An end-to-end engine for neoantigen discovery and immunogenicity ranking—variant calling, HLA typing, MHC binding, and prioritization.', tags:['immunoai','product'], keywords:['neoantigen','mhc','hla','ranking']},
  {id:'im-02', q:'Which inputs does ImmunoAI need?', a:'Tumor/normal DNA (WES/WGS) and tumor RNA-seq are ideal; HLA can be inferred or provided.', tags:['immunoai'], keywords:['inputs','wes','wgs','rna']},
  {id:'im-03', q:'Do you support tumor-only workflows?', a:'Yes—tumor-only is supported with conservative filtering and panel-of-normals options.', tags:['immunoai'], keywords:['tumor-only','pon','filtering']},
  {id:'im-04', q:'How is HLA typing performed?', a:'We use best-practice tools for class I/II HLA typing from DNA/RNA with confidence scores.', tags:['immunoai'], keywords:['hla typing','class i','class ii']},
  {id:'im-05', q:'Which MHC binding predictors are used?', a:'Multiple predictors are ensembled to reduce model bias; you can pin a specific backend if needed.', tags:['immunoai'], keywords:['mhc','binding','predictor','ensemble']},
  {id:'im-06', q:'Do you rank by presentation and immunogenicity?', a:'Yes—presentation likelihood, expression support, clonality, and immunogenicity features contribute to the final score.', tags:['immunoai'], keywords:['presentation','immunogenicity','ranking']},
  {id:'im-07', q:'Can ImmunoAI handle fusion neoantigens?', a:'Yes—RNA fusions and junctions are detected and evaluated for candidates.', tags:['immunoai'], keywords:['fusion','rna','junction']},
  {id:'im-08', q:'Do you support indels and frameshifts?', a:'Yes—indels, frameshifts, and splice variants are incorporated into candidate generation.', tags:['immunoai'], keywords:['indel','frameshift','splice']},
  {id:'im-09', q:'What peptide lengths are considered?', a:'Configurable; common settings include 8–11mers (class I) and 13–25mers (class II).', tags:['immunoai'], keywords:['peptide length','class i','class ii']},
  {id:'im-10', q:'Is TCR repertoire integrated?', a:'Optional TCR-seq inputs can add evidence for clonality and expansion.', tags:['immunoai'], keywords:['tcr','repertoire','clonality']},
  {id:'im-11', q:'Do you support vaccine design handoff?', a:'Yes—exports include peptide lists, synthesis-ready FASTA, and constraints for manufacturing.', tags:['immunoai','vaccine'], keywords:['vaccine','peptide','fasta']},
  {id:'im-12', q:'How are false positives reduced?', a:'Multi-evidence scoring, blacklist filters, and expression confirmation reduce spurious calls.', tags:['immunoai'], keywords:['false positive','filter','qc']},
  {id:'im-13', q:'Can I bring my own caller?', a:'Yes—BYO VCFs are accepted, and you can bypass upstream calling.', tags:['immunoai'], keywords:['vcf','caller','byo']},
  {id:'im-14', q:'What QC metrics are surfaced?', a:'Coverage, mapping rate, duplication, purity/ploidy, and RNA integrity; all exported to reports.', tags:['immunoai'], keywords:['qc','coverage','purity','ploidy']},
  {id:'im-15', q:'Do you support HLA loss of heterozygosity?', a:'Yes—HLA LOH checks are included where tumor/normal is available.', tags:['immunoai'], keywords:['hla loh']},
  {id:'im-16', q:'Is there a visual dashboard?', a:'Yes—interactive candidate tables, filters, QC plots, and export panels.', tags:['immunoai','ui'], keywords:['dashboard','visualization']},
  {id:'im-17', q:'How do I integrate with wet-lab synthesis?', a:'We provide CSV/JSON/FASTA exports and optional vendor templates for synthesis houses.', tags:['immunoai'], keywords:['synthesis','export','vendor']},
  {id:'im-18', q:'Can I tune ranking weights?', a:'Yes—project-level presets and fine-grained weight controls are supported for experts.', tags:['immunoai'], keywords:['weights','tuning']},
  {id:'im-19', q:'What cancer types are supported?', a:'The pipelines are tumor-type agnostic; presets exist for common solid tumors and hematologic malignancies.', tags:['immunoai'], keywords:['tumor type','cancer']},
  {id:'im-20', q:'Do you support class II specific workflows?', a:'Yes—extended peptides, antigen processing, and class II-oriented ranking are available.', tags:['immunoai'], keywords:['class ii','cd4']},
  {id:'im-21', q:'How do you handle multi-region tumors?', a:'We allow multiple regions, aggregate evidence, and region-aware prioritization.', tags:['immunoai'], keywords:['multi-region','heterogeneity']},
  {id:'im-22', q:'Is MSI or TMB reported?', a:'Yes—TMB is summarized from calls; MSI status can be inferred or imported.', tags:['immunoai'], keywords:['tmb','msi']},
  {id:'im-23', q:'Can ImmunoAI run on-prem?', a:'Yes—Kubernetes or bare-metal deployments are available; offline package mirrors are supported.', tags:['immunoai','deploy'], keywords:['on-prem','k8s','air-gapped']},
  {id:'im-24', q:'How are results validated?', a:'We benchmark against public datasets and partner feedback, with routine regression tests.', tags:['immunoai'], keywords:['benchmark','validation']},
  {id:'im-25', q:'Do you have an API?', a:'Yes—REST endpoints and signed URLs support automation and CI/CD workflows.', tags:['immunoai','api'], keywords:['api','rest','automation']},

  /* =========================
   * BIOINFORMATICS SUITE (25)
   * ========================= */
  {id:'bs-01', q:'What is the Bioinformatics Suite?', a:'A collection of curated pipelines for RNA-seq, scRNA-seq, WES/WGS, HLA typing, annotation, and immune profiling.', tags:['bioinformatics','product'], keywords:['rna-seq','scRNA','wes','wgs','hla']},
  {id:'bs-02', q:'What aligners do you support?', a:'STAR/Hisat2 for RNA-seq; BWA-MEM/DRAGEN-compatible for DNA; configurable per project.', tags:['bioinformatics'], keywords:['aligner','star','bwa']},
  {id:'bs-03', q:'Do you provide gene-level counts?', a:'Yes—featureCounts and tximport-style summaries are included with QC reports.', tags:['bioinformatics'], keywords:['counts','featurecounts','tximport']},
  {id:'bs-04', q:'Can I run differential expression?', a:'Yes—DESeq2/edgeR-style analyses with volcano plots and pathway enrichment summaries.', tags:['bioinformatics'], keywords:['deseq2','edgeR','differential']},
  {id:'bs-05', q:'Do you support single-cell RNA-seq?', a:'Yes—processing, clustering, marker calls, UMAP/t-SNE, and cell-type annotation are included.', tags:['bioinformatics','single-cell'], keywords:['scrna','umap','clustering']},
  {id:'bs-06', q:'How are batch effects handled?', a:'Combat/Seurat-style corrections and QC dashboards help assess batch and confounders.', tags:['bioinformatics'], keywords:['batch','combat','seurat']},
  {id:'bs-07', q:'Can I run immune deconvolution?', a:'Yes—CIBERSORT-like deconvolution and immune signatures are supported.', tags:['bioinformatics','immune'], keywords:['deconvolution','immune signatures']},
  {id:'bs-08', q:'Do you annotate variants?', a:'Yes—VEP/ANNOVAR-style annotations, COSMIC/ClinVar tagging, and consequence summaries.', tags:['bioinformatics'], keywords:['vep','annotation','cosmic','clinvar']},
  {id:'bs-09', q:'Are fusion callers included?', a:'Yes—common RNA fusion callers are available with filtration and visualization.', tags:['bioinformatics'], keywords:['fusion','rna','caller']},
  {id:'bs-10', q:'Do you support CNV calling?', a:'Yes—DNA-based CNV and RNA-based expression-derived CNV summaries are supported.', tags:['bioinformatics'], keywords:['cnv','copy number']},
  {id:'bs-11', q:'Can I bring custom reference genomes?', a:'Yes—custom FASTA/GTf bundles and patch updates can be added to your workspace.', tags:['bioinformatics'], keywords:['reference','fasta','gtf']},
  {id:'bs-12', q:'Is quality control automated?', a:'Yes—multiQC style aggregation, sample flags, and run summaries are generated automatically.', tags:['bioinformatics'], keywords:['multiqc','qc','flags']},
  {id:'bs-13', q:'Do you support targeted panels?', a:'Yes—hybrid-capture and amplicon panels are supported with appropriate callers and filters.', tags:['bioinformatics'], keywords:['panel','amplicon','hybrid capture']},
  {id:'bs-14', q:'How do I manage references and indices?', a:'We provide curated references and automatic caching; you can upload your own builds.', tags:['bioinformatics'], keywords:['index','reference','cache']},
  {id:'bs-15', q:'Is there a GUI to configure runs?', a:'Yes—form-based run builders with presets and advanced overrides.', tags:['bioinformatics','ui'], keywords:['gui','run builder','presets']},
  {id:'bs-16', q:'Can I re-run with new parameters?', a:'Yes—runs are reproducible; you can clone a run, tweak parameters, and compare results.', tags:['bioinformatics'], keywords:['re-run','parameters','reproducible']},
  {id:'bs-17', q:'How are results versioned?', a:'Each run stores config, images, and references so figures are traceable over time.', tags:['bioinformatics'], keywords:['versioning','traceability']},
  {id:'bs-18', q:'Do you support methylation data?', a:'Yes—beta value matrices, DMR calling, and annotation tracks are available on request.', tags:['bioinformatics'], keywords:['methylation','dmr']},
  {id:'bs-19', q:'Can I export count matrices?', a:'Yes—CSV/TSV/MTX exports with feature metadata and barcodes.', tags:['bioinformatics'], keywords:['export','matrix','mtx']},
  {id:'bs-20', q:'Do you have pathway analysis?', a:'Yes—GSEA-style enrichment with MSigDB-like libraries and custom gene sets.', tags:['bioinformatics'], keywords:['pathway','gsea','enrichment']},
  {id:'bs-21', q:'Are interactive plots available?', a:'Yes—UMAP, volcano, heatmaps, and CNV tracks are viewable in the web UI.', tags:['bioinformatics','ui'], keywords:['plots','heatmap','umap','volcano']},
  {id:'bs-22', q:'How do you handle multi-omics integration?', a:'We support joint views of DNA/RNA/protein and shared sample keys for cross-modal linking.', tags:['bioinformatics','multi-omics'], keywords:['multi-omics','integration']},
  {id:'bs-23', q:'Can I schedule pipelines?', a:'Yes—pipelines can be queued and triggered via API for CI/CD or nightly jobs.', tags:['bioinformatics','api'], keywords:['schedule','automation']},
  {id:'bs-24', q:'What about scalability?', a:'Auto-scaling workers handle large cohorts; quotas and concurrency are configurable.', tags:['bioinformatics','performance'], keywords:['scaling','auto-scale','concurrency']},
  {id:'bs-25', q:'Is there a command-line interface?', a:'Yes—CLI tools mirror the UI so you can script routine analyses.', tags:['bioinformatics','dev'], keywords:['cli','scripting']},

  /* =========================
   * ANTIGENS & PLASMIDS (15)
   * ========================= */
  {id:'ag-01', q:'Do you supply recombinant antigens?', a:'Yes—quality-controlled antigens for diagnostics and immunotherapy research with COA.', tags:['antigens','catalog'], keywords:['antigens','recombinant','coa']},
  {id:'ag-02', q:'Do you offer plasmids?', a:'Yes—expression vectors and custom constructs with sequence verification.', tags:['plasmids','catalog'], keywords:['plasmid','construct','expression']},
  {id:'ag-03', q:'Can you express custom antigens?', a:'Yes—custom expression and purification in bacterial or mammalian systems.', tags:['antigens','custom'], keywords:['custom expression','purification']},
  {id:'ag-04', q:'Do you provide endotoxin-tested material?', a:'Yes—endotoxin levels are measured and reported for relevant lots.', tags:['antigens','quality'], keywords:['endotoxin','quality','lot']},
  {id:'ag-05', q:'What documentation comes with orders?', a:'Certificates of Analysis and sequence maps are supplied where applicable.', tags:['antigens','docs'], keywords:['coa','sequence map','documentation']},
  {id:'ag-06', q:'What are typical lead times?', a:'Catalog items ship quickly; custom expression varies by complexity (usually weeks).', tags:['antigens','logistics'], keywords:['lead time','shipping']},
  {id:'ag-07', q:'Do you offer peptide synthesis?', a:'Yes—peptide pools or single peptides with purity options and QC.', tags:['antigens','peptides'], keywords:['peptide','synthesis','purity']},
  {id:'ag-08', q:'How are materials stored and shipped?', a:'Cold-chain shipping with appropriate buffers; storage recommendations provided.', tags:['antigens','logistics'], keywords:['shipping','storage','cold chain']},
  {id:'ag-09', q:'Can you provide bulk quantities?', a:'Yes—bulk and long-term supply agreements are available.', tags:['antigens','pricing'], keywords:['bulk','scale','supply']},
  {id:'ag-10', q:'Do you guarantee sequence accuracy?', a:'Yes—verified sequences with documentation; replacements handled per QA policy.', tags:['antigens','quality'], keywords:['sequence verified','qa']},
  {id:'ag-11', q:'Do you help select antigens?', a:'We can recommend targets based on literature context and your assay needs.', tags:['antigens','consulting'], keywords:['selection','panel','assay']},
  {id:'ag-12', q:'Are plasmids provided with maps?', a:'Yes—annotated GenBank/FASTA maps are shared for each plasmid.', tags:['plasmids','docs'], keywords:['genbank','fasta','map']},
  {id:'ag-13', q:'Can I request sterile-filtered prep?', a:'Yes—sterile filtration and low-endotoxin prep are available on request.', tags:['antigens','quality'], keywords:['sterile','low endotoxin']},
  {id:'ag-14', q:'Do you provide GMP materials?', a:'Research-use materials are standard; GMP-like documentation available on request.', tags:['antigens','quality'], keywords:['gmp','ruo']},
  {id:'ag-15', q:'How do I get a quote for antigens?', a:'Share catalog IDs and quantities at /contact/ for a formal quote.', tags:['antigens','pricing'], keywords:['quote','catalog','order']},

  /* =========================
   * PRICING & LICENSING (10)
   * ========================= */
  {id:'pr-01', q:'How does software pricing work?', a:'Starter/Pro/Enterprise tiers scale by seats, compute, and feature depth.', tags:['pricing'], keywords:['pricing','tiers']},
  {id:'pr-02', q:'How are services priced?', a:'Services are quoted per project or per sample, depending on scope and timelines.', tags:['pricing','services'], keywords:['quote','services']},
  {id:'pr-03', q:'Do you offer trials?', a:'Yes—short pilot evaluations are available; contact us to scope a pilot.', tags:['pricing','trial'], keywords:['trial','pilot']},
  {id:'pr-04', q:'Are there academic discounts?', a:'Yes—discounted plans and flexible billing for universities and institutes.', tags:['pricing','academic'], keywords:['academic','discount']},
  {id:'pr-05', q:'How is compute billed?', a:'Compute is metered by instance class and runtime; burst capacity can be capped.', tags:['pricing','compute'], keywords:['compute','billing','metered']},
  {id:'pr-06', q:'Do you support purchase orders?', a:'Yes—POs and invoicing are supported for approved customers.', tags:['pricing','billing'], keywords:['po','invoice']},
  {id:'pr-07', q:'What payment methods are accepted?', a:'Wire transfers and standard corporate cards are accepted; terms vary by plan.', tags:['pricing','billing'], keywords:['payment','card','wire']},
  {id:'pr-08', q:'Is there a free tier?', a:'We don’t offer a public free tier; pilots are the best way to evaluate.', tags:['pricing'], keywords:['free','trial','pilot']},
  {id:'pr-09', q:'Can I buy only services?', a:'Yes—analysis-only engagements are available without a software subscription.', tags:['pricing','services'], keywords:['services only']},
  {id:'pr-10', q:'How do I get a formal quote?', a:'Use /contact/ with your data size, sample counts, and timeline.', tags:['pricing','quote'], keywords:['quote','estimate']},

  /* =========================
   * SECURITY & COMPLIANCE (10)
   * ========================= */
  {id:'sec-01', q:'How is data secured in transit and at rest?', a:'TLS 1.2+ in transit and AES-256 at rest; keys are rotated per policy.', tags:['security'], keywords:['encryption','tls','aes256']},
  {id:'sec-02', q:'Do you support SSO?', a:'Yes—SAML/OIDC with role-based access controls and audit logging.', tags:['security'], keywords:['sso','saml','oidc','rbac']},
  {id:'sec-03', q:'Can we choose data region?', a:'Yes—region selection is supported for cloud deployments.', tags:['security','privacy'], keywords:['region','data residency']},
  {id:'sec-04', q:'How is PII handled?', a:'De-identification workflows, least-privilege access, and configurable data retention.', tags:['security','privacy'], keywords:['pii','retention','least privilege']},
  {id:'sec-05', q:'Do you support HIPAA/GDPR workflows?', a:'Yes—BAAs and GDPR-aligned processes are available for eligible plans.', tags:['security','compliance'], keywords:['hipaa','gdpr','baa']},
  {id:'sec-06', q:'Are logs and actions audited?', a:'Yes—project events, job runs, and exports are recorded for audit.', tags:['security','audit'], keywords:['audit','logs','events']},
  {id:'sec-07', q:'Can we deploy on-prem behind a firewall?', a:'Yes—air-gapped or restricted egress environments are supported.', tags:['security','deploy'], keywords:['on-prem','air gapped']},
  {id:'sec-08', q:'How do you handle vulnerabilities?', a:'Routine patching, dependency scanning, and incident response protocols.', tags:['security','devsecops'], keywords:['patching','scan','incident']},
  {id:'sec-09', q:'Is data backed up?', a:'Yes—versioned backups with restore testing on a defined schedule.', tags:['security','backup'], keywords:['backup','restore']},
  {id:'sec-10', q:'Can we get a security summary?', a:'Yes—security overview and questionnaires can be provided under NDA.', tags:['security','sales'], keywords:['security questionnaire','overview']},

  /* =========================
   * DEMOS, SUPPORT, WORKFLOWS (25)
   * ========================= */
  {id:'supp-01', q:'How do I schedule a demo?', a:'Visit /contact/#demo to book a personalized walkthrough.', tags:['demo'], keywords:['demo','schedule']},
  {id:'supp-02', q:'Do you migrate data from other platforms?', a:'Yes—data import, metadata mapping, and pipeline parity checks are included in migrations.', tags:['services'], keywords:['migration','import']},
  {id:'supp-03', q:'Can I tag samples and cohorts?', a:'Yes—projects, tags, and cohort sets help organize large studies.', tags:['ui','workflow'], keywords:['tags','cohorts','project']},
  {id:'supp-04', q:'Is there role-based sharing?', a:'Yes—owner, editor, and viewer roles with granular permissions.', tags:['ui','security'], keywords:['rbac','permissions']},
  {id:'supp-05', q:'Can I create project templates?', a:'Yes—presets for references, parameters, and QC thresholds can be saved.', tags:['ui','workflow'], keywords:['template','preset']},
  {id:'supp-06', q:'Do you provide API tokens?', a:'Yes—scoped tokens with expiration for automation and CI/CD.', tags:['api','dev'], keywords:['api token','ci/cd']},
  {id:'supp-07', q:'How do I monitor run progress?', a:'The run page shows live logs, resource usage, and ETA estimates.', tags:['ui','runtime'], keywords:['monitor','logs','eta']},
  {id:'supp-08', q:'Can I cancel or retry a job?', a:'Yes—cancel, retry, and resume options are available with provenance preserved.', tags:['ui','runtime'], keywords:['cancel','retry','resume']},
  {id:'supp-09', q:'How are errors reported?', a:'Clear error messages, linked docs, and suggested fixes appear in the run view.', tags:['ui','runtime'], keywords:['errors','debug']},
  {id:'supp-10', q:'Do you have sample data for evaluation?', a:'Yes—demo datasets are available to explore the UI and reports.', tags:['demo'], keywords:['sample data','demo dataset']},
  {id:'supp-11', q:'Can I restrict downloads?', a:'Yes—export permissions can be limited by role and project policy.', tags:['security','ui'], keywords:['export control','download']},
  {id:'supp-12', q:'Do you integrate with S3/GS buckets?', a:'Yes—signed URL ingest and direct-to-bucket exports are supported.', tags:['storage','integration'], keywords:['s3','gcs','bucket']},
  {id:'supp-13', q:'Can I annotate samples with clinical metadata?', a:'Yes—upload CSV/JSON metadata and link to runs and results.', tags:['workflow'], keywords:['metadata','clinical']},
  {id:'supp-14', q:'Is there a sandbox environment?', a:'Yes—staging workspaces are available for testing changes safely.', tags:['dev','qa'], keywords:['staging','sandbox']},
  {id:'supp-15', q:'Do you support multi-tenant orgs?', a:'Yes—organizations, teams, and workspaces allow structured multi-tenant setups.', tags:['ui','org'], keywords:['organization','teams','workspace']},
  {id:'supp-16', q:'How do I request a new feature?', a:'Use the feedback panel or contact support; we triage and provide timelines.', tags:['support'], keywords:['feature request','feedback']},
  {id:'supp-17', q:'What support channels are available?', a:'Email, ticket portal, and optional Slack connect for Enterprise.', tags:['support'], keywords:['support','slack']},
  {id:'supp-18', q:'Do you provide change logs?', a:'Yes—release notes are posted for every update with migration notes when needed.', tags:['release'], keywords:['release notes','changelog']},
  {id:'supp-19', q:'Can I export figures for publications?', a:'Yes—high-resolution figures and data tables export for manuscripts.', tags:['ui','export'], keywords:['publication','figure','export']},
  {id:'supp-20', q:'Do you offer success plans?', a:'Pro and Enterprise include periodic check-ins and roadmap reviews.', tags:['success'], keywords:['success','check-in']},
  {id:'supp-21', q:'How do I share results with collaborators?', a:'Invite them as viewers or export share-links with time limits.', tags:['ui','collab'], keywords:['share','collaboration']},
  {id:'supp-22', q:'Is there an audit trail for changes?', a:'Yes—project and run changes are timestamped with user attribution.', tags:['security','audit'], keywords:['audit trail','history']},
  {id:'supp-23', q:'Do you support custom scoring functions?', a:'Yes—advanced users can register custom scorers for candidate ranking.', tags:['dev','immunoai'], keywords:['custom scoring','plugin']},
  {id:'supp-24', q:'Can I export to Prism/R format?', a:'Yes—CSV exports are compatible; R templates are provided.', tags:['export','dev'], keywords:['graphpad','r','csv']},
  {id:'supp-25', q:'How do I report a bug?', a:'Open a ticket with steps to reproduce and logs; we triage within support SLAs.', tags:['support'], keywords:['bug','ticket']}
];
