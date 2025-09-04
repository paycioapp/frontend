import { useTranslations } from "next-intl";

export const generalFaq = () => {
    const t = useTranslations();
    const generalInformationFaqs: FAQItem[] = [
        {
            question: t('faq_generalinfo_q0'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_generalinfo_a0_p0'),
                },
                {
                    type: 'list',
                    title: t('faq_generalinfo_a0_l0_title'),
                    items: [
                        t('faq_generalinfo_a0_l0_item0'),
                        t('faq_generalinfo_a0_l0_item1'),
                        t('faq_generalinfo_a0_l0_item2'),
                        t('faq_generalinfo_a0_l0_item3'),
                        t('faq_generalinfo_a0_l0_item4'),
                    ],
                },
                {
                    type: 'paragraph',
                    content: t('faq_generalinfo_a0_p1'),
                },
            ],
        },
        {
            question: t('faq_generalinfo_q1'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_generalinfo_a1_p0'),
                },
                {
                    type: 'table',
                    headers: [
                        t('faq_generalinfo_a1_table_header0'),
                        t('faq_generalinfo_a1_table_header1'),
                        t('faq_generalinfo_a1_table_header2'),
                        t('faq_generalinfo_a1_table_header3'),
                    ],
                    rows: [
                        [
                            t('faq_generalinfo_a1_table_row0_col0'),
                            t('faq_generalinfo_a1_table_row0_col1'),
                            t('faq_generalinfo_a1_table_row0_col2'),
                            t('faq_generalinfo_a1_table_row0_col3'),
                        ],
                        [
                            t('faq_generalinfo_a1_table_row1_col0'),
                            t('faq_generalinfo_a1_table_row1_col1'),
                            t('faq_generalinfo_a1_table_row1_col2'),
                            t('faq_generalinfo_a1_table_row1_col3'),
                        ],
                        [
                            t('faq_generalinfo_a1_table_row2_col0'),
                            t('faq_generalinfo_a1_table_row2_col1'),
                            t('faq_generalinfo_a1_table_row2_col2'),
                            t('faq_generalinfo_a1_table_row2_col3'),
                        ],
                        [
                            t('faq_generalinfo_a1_table_row3_col0'),
                            t('faq_generalinfo_a1_table_row3_col1'),
                            t('faq_generalinfo_a1_table_row3_col2'),
                            t('faq_generalinfo_a1_table_row3_col3'),
                        ],
                    ],
                },
            ],
        },
        {
            question: t('faq_generalinfo_q2'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_generalinfo_a2_p0'),
                },
                {
                    type: 'list',
                    title: t('faq_generalinfo_a2_l0_title'),
                    items: [
                        t('faq_generalinfo_a2_l0_item0'),
                        t('faq_generalinfo_a2_l0_item1'),
                        t('faq_generalinfo_a2_l0_item2'),
                        t('faq_generalinfo_a2_l0_item3'),
                        t('faq_generalinfo_a2_l0_item4'),
                        t('faq_generalinfo_a2_l0_item5'),
                    ],
                },
                {
                    type: 'paragraph',
                    content: t('faq_generalinfo_a2_p1'),
                },
            ],
        },
    ];
    return generalInformationFaqs
}




export const onboardingFaq = () => {
    const t = useTranslations();
    const onboardingProcessFaqs: FAQItem[] = [
        {
            question: t('faq_onboardingFaqs_question_1'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_onboardingFaqs_answer_1_paragraph_1'),
                },
                {
                    type: 'table',
                    headers: [
                        t('faq_onboardingFaqs_answer_1_table_header_1'),
                        t('faq_onboardingFaqs_answer_1_table_header_2'),
                        t('faq_onboardingFaqs_answer_1_table_header_3'),
                        t('faq_onboardingFaqs_answer_1_table_header_4'),
                    ],
                    rows: [
                        [
                            t('faq_onboardingFaqs_answer_1_table_row_1_col_1'),
                            t('faq_onboardingFaqs_answer_1_table_row_1_col_2'),
                            t('faq_onboardingFaqs_answer_1_table_row_1_col_3'),
                            t('faq_onboardingFaqs_answer_1_table_row_1_col_4'),
                        ],
                        [
                            t('faq_onboardingFaqs_answer_1_table_row_2_col_1'),
                            t('faq_onboardingFaqs_answer_1_table_row_2_col_2'),
                            t('faq_onboardingFaqs_answer_1_table_row_2_col_3'),
                            t('faq_onboardingFaqs_answer_1_table_row_2_col_4'),
                        ],
                        [
                            t('faq_onboardingFaqs_answer_1_table_row_3_col_1'),
                            t('faq_onboardingFaqs_answer_1_table_row_3_col_2'),
                            t('faq_onboardingFaqs_answer_1_table_row_3_col_3'),
                            t('faq_onboardingFaqs_answer_1_table_row_3_col_4'),
                        ],
                        [
                            t('faq_onboardingFaqs_answer_1_table_row_4_col_1'),
                            t('faq_onboardingFaqs_answer_1_table_row_4_col_2'),
                            t('faq_onboardingFaqs_answer_1_table_row_4_col_3'),
                            t('faq_onboardingFaqs_answer_1_table_row_4_col_4'),
                        ],
                    ],
                },
                {
                    type: 'highlight',
                    title: t('faq_onboardingFaqs_answer_1_highlight_title'),
                    content: t('faq_onboardingFaqs_answer_1_highlight_content'),
                },
            ],
        },
        {
            question: t('faq_onboardingFaqs_question_2'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_onboardingFaqs_answer_2_paragraph_1'),
                },
                {
                    type: 'list',
                    title: t('faq_onboardingFaqs_answer_2_list_1_title'),
                    items: [
                        t('faq_onboardingFaqs_answer_2_list_1_item_1'),
                        t('faq_onboardingFaqs_answer_2_list_1_item_2'),
                        t('faq_onboardingFaqs_answer_2_list_1_item_3'),
                        t('faq_onboardingFaqs_answer_2_list_1_item_4'),
                        t('faq_onboardingFaqs_answer_2_list_1_item_5'),
                        t('faq_onboardingFaqs_answer_2_list_1_item_6'),
                    ],
                },
                {
                    type: 'list',
                    title: t('faq_onboardingFaqs_answer_2_list_2_title'),
                    style: 'warning',
                    items: [
                        t('faq_onboardingFaqs_answer_2_list_2_item_1'),
                        t('faq_onboardingFaqs_answer_2_list_2_item_2'),
                        t('faq_onboardingFaqs_answer_2_list_2_item_3'),
                        t('faq_onboardingFaqs_answer_2_list_2_item_4'),
                    ],
                },
                {
                    type: 'paragraph',
                    content: t('faq_onboardingFaqs_answer_2_paragraph_2'),
                },
            ],
        },
    ];
    return onboardingProcessFaqs
}


export const pricingFaq = () => {
    const t = useTranslations();
    const pricingAndFeesFaqs: FAQItem[] = [
        {
            question: t('faq_pricing_q1'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_pricing_q1_a1_p'),
                },
                {
                    type: 'table',
                    headers: [
                        t('faq_pricing_q1_a2_table_header0'),
                        t('faq_pricing_q1_a2_table_header1'),
                        t('faq_pricing_q1_a2_table_header2'),
                        t('faq_pricing_q1_a2_table_header3'),
                        t('faq_pricing_q1_a2_table_header4'),
                    ],
                    rows: [
                        [
                            t('faq_pricing_q1_a2_table_row0_col0'),
                            t('faq_pricing_q1_a2_table_row0_col1'),
                            t('faq_pricing_q1_a2_table_row0_col2'),
                            t('faq_pricing_q1_a2_table_row0_col3'),
                            t('faq_pricing_q1_a2_table_row0_col4'),
                        ],
                        [
                            t('faq_pricing_q1_a2_table_row1_col0'),
                            t('faq_pricing_q1_a2_table_row1_col1'),
                            t('faq_pricing_q1_a2_table_row1_col2'),
                            t('faq_pricing_q1_a2_table_row1_col3'),
                            t('faq_pricing_q1_a2_table_row1_col4'),
                        ],
                        [
                            t('faq_pricing_q1_a2_table_row2_col0'),
                            t('faq_pricing_q1_a2_table_row2_col1'),
                            t('faq_pricing_q1_a2_table_row2_col2'),
                            t('faq_pricing_q1_a2_table_row2_col3'),
                            t('faq_pricing_q1_a2_table_row2_col4'),
                        ],
                    ],
                },
                {
                    type: 'highlight',
                    title: t('faq_pricing_q1_a3_highlight_title'),
                    items: [
                        t('faq_pricing_q1_a3_highlight_item0'),
                        t('faq_pricing_q1_a3_highlight_item1'),
                        t('faq_pricing_q1_a3_highlight_item2'),
                        t('faq_pricing_q1_a3_highlight_item3'),
                    ],
                },
            ],
        },
        {
            question: t('faq_pricing_q2'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_pricing_q2_a1_p'),
                },
                {
                    type: 'list',
                    title: t('faq_pricing_q2_a2_list_title'),
                    items: [
                        t('faq_pricing_q2_a2_list_item0'),
                        t('faq_pricing_q2_a2_list_item1'),
                        t('faq_pricing_q2_a2_list_item2'),
                        t('faq_pricing_q2_a2_list_item3'),
                        t('faq_pricing_q2_a2_list_item4'),
                        t('faq_pricing_q2_a2_list_item5'),
                    ],
                },
                {
                    type: 'list',
                    title: t('faq_pricing_q2_a3_list_title'),
                    style: 'warning', // 'warning'
                    items: [
                        t('faq_pricing_q2_a3_list_item0'),
                        t('faq_pricing_q2_a3_list_item1'),
                        t('faq_pricing_q2_a3_list_item2'),
                        t('faq_pricing_q2_a3_list_item3'),
                        t('faq_pricing_q2_a3_list_item4'),
                    ],
                },
            ],
        },
        {
            question: t('faq_pricing_q3'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_pricing_q3_a1_p'),
                },
                {
                    type: 'table',
                    headers: [
                        t('faq_pricing_q3_a2_table_header0'),
                        t('faq_pricing_q3_a2_table_header1'),
                        t('faq_pricing_q3_a2_table_header2'),
                        t('faq_pricing_q3_a2_table_header3'),
                    ],
                    rows: [
                        [
                            t('faq_pricing_q3_a2_table_row0_col0'),
                            t('faq_pricing_q3_a2_table_row0_col1'),
                            t('faq_pricing_q3_a2_table_row0_col2'),
                            t('faq_pricing_q3_a2_table_row0_col3'),
                        ],
                        [
                            t('faq_pricing_q3_a2_table_row1_col0'),
                            t('faq_pricing_q3_a2_table_row1_col1'),
                            t('faq_pricing_q3_a2_table_row1_col2'),
                            t('faq_pricing_q3_a2_table_row1_col3'),
                        ],
                        [
                            t('faq_pricing_q3_a2_table_row2_col0'),
                            t('faq_pricing_q3_a2_table_row2_col1'),
                            t('faq_pricing_q3_a2_table_row2_col2'),
                            t('faq_pricing_q3_a2_table_row2_col3'),
                        ],
                    ],
                },
                {
                    type: 'highlight',
                    title: t('faq_pricing_q3_a3_highlight_title'),
                    items: [
                        t('faq_pricing_q3_a3_highlight_item0'),
                        t('faq_pricing_q3_a3_highlight_item1'),
                        t('faq_pricing_q3_a3_highlight_item2'),
                        t('faq_pricing_q3_a3_highlight_item3'),
                        t('faq_pricing_q3_a3_highlight_item4'),
                        t('faq_pricing_q3_a3_highlight_item5'),
                        t('faq_pricing_q3_a3_highlight_item6'),
                    ],
                },
            ],
        },
    ];
    return pricingAndFeesFaqs
}




export const technicalMercahntFaq = () => {
    const t = useTranslations();
    const technicalIntegrationFaqs: FAQItem[] = [
        {
            question: t('faq_technical_a1'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_technical_q1_a1_paragraph'),
                },
                {
                    type: 'table',
                    headers: [
                        t('faq_technical_q1_a2_table_header0'),
                        t('faq_technical_q1_a2_table_header1'),
                        t('faq_technical_q1_a2_table_header2'),
                        t('faq_technical_q1_a2_table_header3'),
                        t('faq_technical_q1_a2_table_header4'),
                    ],
                    rows: [
                        [
                            t('faq_technical_q1_a2_table_row0_col0'),
                            t('faq_technical_q1_a2_table_row0_col1'),
                            t('faq_technical_q1_a2_table_row0_col2'),
                            t('faq_technical_q1_a2_table_row0_col3'),
                            t('faq_technical_q1_a2_table_row0_col4'),
                        ],
                        [
                            t('faq_technical_q1_a2_table_row1_col0'),
                            t('faq_technical_q1_a2_table_row1_col1'),
                            t('faq_technical_q1_a2_table_row1_col2'),
                            t('faq_technical_q1_a2_table_row1_col3'),
                            t('faq_technical_q1_a2_table_row1_col4'),
                        ],
                        [
                            t('faq_technical_q1_a2_table_row2_col0'),
                            t('faq_technical_q1_a2_table_row2_col1'),
                            t('faq_technical_q1_a2_table_row2_col2'),
                            t('faq_technical_q1_a2_table_row2_col3'),
                            t('faq_technical_q1_a2_table_row2_col4'),
                        ],
                        [
                            t('faq_technical_q1_a2_table_row3_col0'),
                            t('faq_technical_q1_a2_table_row3_col1'),
                            t('faq_technical_q1_a2_table_row3_col2'),
                            t('faq_technical_q1_a2_table_row3_col3'),
                            t('faq_technical_q1_a2_table_row3_col4'),
                        ],
                    ],
                },
                {
                    type: 'highlight',
                    title: t('faq_technical_q1_a3_highlight_title'),
                    items: [
                        t('faq_technical_q1_a3_highlight_item0'),
                        t('faq_technical_q1_a3_highlight_item1'),
                        t('faq_technical_q1_a3_highlight_item2'),
                        t('faq_technical_q1_a3_highlight_item3'),
                    ],
                },
            ],
        },
        {
            question: t('faq_technical_a2'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_technical_q2_a1_paragraph'),
                },
                {
                    type: 'list',
                    title: t('faq_technical_q2_a2_list_title'),
                    items: [
                        t('faq_technical_q2_a2_list_item0'),
                        t('faq_technical_q2_a2_list_item1'),
                        t('faq_technical_q2_a2_list_item2'),
                    ],
                },
                {
                    type: 'list',
                    title: t('faq_technical_q2_a3_list_title'),
                    style: 'warning',
                    items: [
                        t('faq_technical_q2_a3_list_item0'),
                        t('faq_technical_q2_a3_list_item1'),
                        t('faq_technical_q2_a3_list_item2'),
                    ],
                },
                {
                    type: 'list',
                    title: t('faq_technical_q2_a4_list_title'),
                    items: [
                        t('faq_technical_q2_a4_list_item0'),
                        t('faq_technical_q2_a4_list_item1'),
                        t('faq_technical_q2_a4_list_item2'),
                        t('faq_technical_q2_a4_list_item3'),
                    ],
                },
            ],
        },
        {
            question: t('faq_technical_a3'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_technical_q3_a1_paragraph'),
                },
                {
                    type: 'code-block',
                    content: '// Sandbox API endpoint\nPOST https://sandbox-api.paycio.com/v1/payments/create\n\n// Test credentials provided:\nAPI_KEY: \"test_pk_1234567890abcdef\"\nWEBHOOK_SECRET: \"whsec_test_abcdef1234567890\"',
                },
                {
                    type: 'highlight',
                    title: t('faq_technical_q3_a3_highlight_title'),
                    items: [
                        t('faq_technical_q3_a3_highlight_item0'),
                        t('faq_technical_q3_a3_highlight_item1'),
                        t('faq_technical_q3_a3_highlight_item2'),
                        t('faq_technical_q3_a3_highlight_item3'),
                        t('faq_technical_q3_a3_highlight_item4'),
                        t('faq_technical_q3_a3_highlight_item5'),
                        t('faq_technical_q3_a3_highlight_item6'),
                    ],
                },
                {
                    type: 'list',
                    title: t('faq_technical_q3_a4_list_title'),
                    items: [
                        t('faq_technical_q3_a4_list_item0'),
                        t('faq_technical_q3_a4_list_item1'),
                        t('faq_technical_q3_a4_list_item2'),
                        t('faq_technical_q3_a4_list_item3'),
                        t('faq_technical_q3_a4_list_item4'),
                    ],
                },
            ],
        },
        {
            question: t('faq_technical_a4'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_technical_q4_a1_paragraph'),
                },
                {
                    type: 'highlight',
                    title: t('faq_technical_q4_a2_highlight_title'),
                    items: [
                        t('faq_technical_q4_a2_highlight_item0'),
                        t('faq_technical_q4_a2_highlight_item1'),
                        t('faq_technical_q4_a2_highlight_item2'),
                        t('faq_technical_q4_a2_highlight_item3'),
                        t('faq_technical_q4_a2_highlight_item4'),
                    ],
                },
                {
                    type: 'code-block',
                    content: t('faq_technical_q4_a3_codeblock'),
                },
                {
                    type: 'list',
                    title: t('faq_technical_q4_a4_list_title'),
                    items: [
                        t('faq_technical_q4_a4_list_item0'),
                        t('faq_technical_q4_a4_list_item1'),
                        t('faq_technical_q4_a4_list_item2'),
                        t('faq_technical_q4_a4_list_item3'),
                        t('faq_technical_q4_a4_list_item4'),
                    ],
                },
            ],
        },
    ];
    return technicalIntegrationFaqs
}


export const complianceMerchantFaq = () => {
    const t = useTranslations()
    const complianceSecurityFaqs: FAQItem[] = [
        {
            question: t('faq_compliance_a1'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_compliance_q1_a1_paragraph'),
                },
                {
                    type: 'table',
                    headers: [
                        t('faq_compliance_q1_a2_header0'),
                        t('faq_compliance_q1_a2_header1'),
                        t('faq_compliance_q1_a2_header2'),
                        t('faq_compliance_q1_a2_header3'),
                    ],
                    rows: [
                        [
                            t('faq_compliance_q1_a2_row0_col0'),
                            t('faq_compliance_q1_a2_row0_col1'),
                            t('faq_compliance_q1_a2_row0_col2'),
                            t('faq_compliance_q1_a2_row0_col3'),
                        ],
                        [
                            t('faq_compliance_q1_a2_row1_col0'),
                            t('faq_compliance_q1_a2_row1_col1'),
                            t('faq_compliance_q1_a2_row1_col2'),
                            t('faq_compliance_q1_a2_row1_col3'),
                        ],
                        [
                            t('faq_compliance_q1_a2_row2_col0'),
                            t('faq_compliance_q1_a2_row2_col1'),
                            t('faq_compliance_q1_a2_row2_col2'),
                            t('faq_compliance_q1_a2_row2_col3'),
                        ],
                        [
                            t('faq_compliance_q1_a2_row3_col0'),
                            t('faq_compliance_q1_a2_row3_col1'),
                            t('faq_compliance_q1_a2_row3_col2'),
                            t('faq_compliance_q1_a2_row3_col3'),
                        ],
                    ],
                },
                {
                    type: 'highlight',
                    title: t('faq_compliance_q1_a3_highlight_title'),
                    items: [
                        t('faq_compliance_q1_a3_item0'),
                        t('faq_compliance_q1_a3_item1'),
                        t('faq_compliance_q1_a3_item2'),
                        t('faq_compliance_q1_a3_item3'),
                    ],
                },
            ],
        },
        {
            question: t('faq_compliance_a2'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_compliance_q2_a1_paragraph'),
                },
                {
                    type: 'info',
                    title: t('faq_compliance_q2_a2_info_title'),
                    items: [
                        t('faq_compliance_q2_a2_item0'),
                        t('faq_compliance_q2_a2_item1'),
                        t('faq_compliance_q2_a2_item2'),
                        t('faq_compliance_q2_a2_item3'),
                        t('faq_compliance_q2_a2_item4'),
                    ],
                },
                {
                    type: 'warning',
                    title: t('faq_compliance_q2_a3_warning_title'),
                    items: [
                        t('faq_compliance_q2_a3_item0'),
                        t('faq_compliance_q2_a3_item1'),
                        t('faq_compliance_q2_a3_item2'),
                        t('faq_compliance_q2_a3_item3'),
                        t('faq_compliance_q2_a3_item4'),
                    ],
                },
                {
                    type: 'list',
                    title: t('faq_compliance_q2_a4_list_title'),
                    items: [
                        t('faq_compliance_q2_a4_item0'),
                        t('faq_compliance_q2_a4_item1'),
                        t('faq_compliance_q2_a4_item2'),
                    ],
                },
            ],
        },
        {
            question: t('faq_compliance_a3'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_compliance_q3_a1_paragraph'),
                },
                {
                    type: 'highlight',
                    title: t('faq_compliance_q3_a2_highlight_title'),
                    items: [
                        t('faq_compliance_q3_a2_item0'),
                        t('faq_compliance_q3_a2_item1'),
                        t('faq_compliance_q3_a2_item2'),
                        t('faq_compliance_q3_a2_item3'),
                        t('faq_compliance_q3_a2_item4'),
                    ],
                },
                {
                    type: 'info',
                    title: t('faq_compliance_q3_a3_info_title'),
                    items: [
                        t('faq_compliance_q3_a3_item0'),
                        t('faq_compliance_q3_a3_item1'),
                        t('faq_compliance_q3_a3_item2'),
                        t('faq_compliance_q3_a3_item3'),
                        t('faq_compliance_q3_a3_item4'),
                    ],
                },
                {
                    type: 'paragraph',
                    content: t('faq_compliance_q3_a4_paragraph'),
                },
            ],
        },
    ];
    return complianceSecurityFaqs
}



export const settlementMerchantFaq = () => {
    const t = useTranslations();
    const settlementFaqs: FAQItem[] = [
        {
            question: t('faq_settlement_q1'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_settlement_q1_a1_paragraph'),
                },
                {
                    type: 'table',
                    headers: [
                        t('faq_settlement_q1_a2_header0'),
                        t('faq_settlement_q1_a2_header1'),
                        t('faq_settlement_q1_a2_header2'),
                        t('faq_settlement_q1_a2_header3'),
                    ],
                    rows: [
                        [
                            t('faq_settlement_q1_a2_row0_col0'),
                            t('faq_settlement_q1_a2_row0_col1'),
                            t('faq_settlement_q1_a2_row0_col2'),
                            t('faq_settlement_q1_a2_row0_col3'),
                        ],
                        [
                            t('faq_settlement_q1_a2_row1_col0'),
                            t('faq_settlement_q1_a2_row1_col1'),
                            t('faq_settlement_q1_a2_row1_col2'),
                            t('faq_settlement_q1_a2_row1_col3'),
                        ],
                        [
                            t('faq_settlement_q1_a2_row2_col0'),
                            t('faq_settlement_q1_a2_row2_col1'),
                            t('faq_settlement_q1_a2_row2_col2'),
                            t('faq_settlement_q1_a2_row2_col3'),
                        ],
                    ],
                },
                {
                    type: 'highlight',
                    title: t('faq_settlement_q1_a3_highlight_title'),
                    list: [
                        t('faq_settlement_q1_a3_item0'),
                        t('faq_settlement_q1_a3_item1'),
                        t('faq_settlement_q1_a3_item2'),
                        t('faq_settlement_q1_a3_item3'),
                    ],
                },
            ],
        },
        {
            question: t('faq_settlement_q2'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_settlement_q2_a1_paragraph'),
                },
                {
                    type: 'info',
                    title: t('faq_settlement_q2_a2_info_title'),
                    list: [
                        t('faq_settlement_q2_a2_item0'),
                        t('faq_settlement_q2_a2_item1'),
                        t('faq_settlement_q2_a2_item2'),
                        t('faq_settlement_q2_a2_item3'),
                    ],
                },
                {
                    type: 'warning',
                    title: t('faq_settlement_q2_a3_warning_title'),
                    list: [
                        t('faq_settlement_q2_a3_item0'),
                        t('faq_settlement_q2_a3_item1'),
                        t('faq_settlement_q2_a3_item2'),
                    ],
                },
                {
                    type: 'table',
                    headers: [
                        t('faq_settlement_q2_a4_header0'),
                        t('faq_settlement_q2_a4_header1'),
                        t('faq_settlement_q2_a4_header2'),
                        t('faq_settlement_q2_a4_header3'),
                    ],
                    rows: [
                        [
                            t('faq_settlement_q2_a4_row0_col0'),
                            t('faq_settlement_q2_a4_row0_col1'),
                            t('faq_settlement_q2_a4_row0_col2'),
                            t('faq_settlement_q2_a4_row0_col3'),
                        ],
                        [
                            t('faq_settlement_q2_a4_row1_col0'),
                            t('faq_settlement_q2_a4_row1_col1'),
                            t('faq_settlement_q2_a4_row1_col2'),
                            t('faq_settlement_q2_a4_row1_col3'),
                        ],
                        [
                            t('faq_settlement_q2_a4_row2_col0'),
                            t('faq_settlement_q2_a4_row2_col1'),
                            t('faq_settlement_q2_a4_row2_col2'),
                            t('faq_settlement_q2_a4_row2_col3'),
                        ],
                        [
                            t('faq_settlement_q2_a4_row3_col0'),
                            t('faq_settlement_q2_a4_row3_col1'),
                            t('faq_settlement_q2_a4_row3_col2'),
                            t('faq_settlement_q2_a4_row3_col3'),
                        ],
                    ],
                },
            ],
        },
        {
            question: t('faq_settlement_q3'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_settlement_q3_a1_paragraph'),
                },
                {
                    type: 'highlight',
                    title: t('faq_settlement_q3_a2_highlight_title'),
                    list: [
                        t('faq_settlement_q3_a2_item0'),
                        t('faq_settlement_q3_a2_item1'),
                    ],
                },
                {
                    type: 'code',
                    content: '// Example: Rate lock configuration\n{\n  \"settlement_preferences\": {\n    \"currency\": \"USD\",\n    \"rate_lock\": \"payment_time\",\n    \"fallback_currency\": \"USDC\",\n    \"minimum_rate\": 0.95,\n    \"hedging_enabled\": true\n  }\n}',
                },
                {
                    type: 'paragraph',
                    content: t('faq_settlement_q3_a4_paragraph'),
                },
                {
                    type: 'paragraph',
                    content: t('faq_settlement_q3_a5_paragraph'),
                },
            ],
        },
    ];
    return settlementFaqs

}


export const supportedMerchantFaq = () => {
    const t = useTranslations();
    const supportMaintenanceFaqs: FAQItem[] = [
        {
            question: t('faq_support_q1'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_support_q1_a1_paragraph'),
                },
                {
                    type: 'table',
                    headers: [
                        t('faq_support_q1_a2_header0'),
                        t('faq_support_q1_a2_header1'),
                        t('faq_support_q1_a2_header2'),
                        t('faq_support_q1_a2_header3'),
                        t('faq_support_q1_a2_header4'),
                    ],
                    rows: [
                        [
                            t('faq_support_q1_a2_row0_col0'),
                            t('faq_support_q1_a2_row0_col1'),
                            t('faq_support_q1_a2_row0_col2'),
                            t('faq_support_q1_a2_row0_col3'),
                            t('faq_support_q1_a2_row0_col4'),
                        ],
                        [
                            t('faq_support_q1_a2_row1_col0'),
                            t('faq_support_q1_a2_row1_col1'),
                            t('faq_support_q1_a2_row1_col2'),
                            t('faq_support_q1_a2_row1_col3'),
                            t('faq_support_q1_a2_row1_col4'),
                        ],
                        [
                            t('faq_support_q1_a2_row2_col0'),
                            t('faq_support_q1_a2_row2_col1'),
                            t('faq_support_q1_a2_row2_col2'),
                            t('faq_support_q1_a2_row2_col3'),
                            t('faq_support_q1_a2_row2_col4'),
                        ],
                    ],
                },
                {
                    type: 'info',
                    title: t('faq_support_q1_a3_title'),
                    list: [
                        t('faq_support_q1_a3_item0'),
                        t('faq_support_q1_a3_item1'),
                        t('faq_support_q1_a3_item2'),
                        t('faq_support_q1_a3_item3'),
                        t('faq_support_q1_a3_item4'),
                    ],
                },
            ],
        },
        {
            question: t('faq_support_q2'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_support_q2_a1_paragraph'),
                },
                {
                    type: 'highlight',
                    title: t('faq_support_q2_a2_title'),
                    list: [
                        t('faq_support_q2_a2_item0'),
                        t('faq_support_q2_a2_item1'),
                        t('faq_support_q2_a2_item2'),
                        t('faq_support_q2_a2_item3'),
                        t('faq_support_q2_a2_item4'),
                    ],
                },
                {
                    type: 'warning',
                    title: t('faq_support_q2_a3_title'),
                    list: [
                        t('faq_support_q2_a3_item0'),
                        t('faq_support_q2_a3_item1'),
                        t('faq_support_q2_a3_item2'),
                        t('faq_support_q2_a3_item3'),
                        t('faq_support_q2_a3_item4'),
                    ],
                },
                {
                    type: 'paragraph',
                    content: t('faq_support_q2_a4_paragraph'),
                },
            ],
        },
        {
            question: t('faq_support_q3'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_support_q3_a1_paragraph'),
                },
                {
                    type: 'table',
                    headers: [
                        t('faq_support_q3_a2_header0'),
                        t('faq_support_q3_a2_header1'),
                        t('faq_support_q3_a2_header2'),
                        t('faq_support_q3_a2_header3'),
                    ],
                    rows: [
                        [
                            t('faq_support_q3_a2_row0_col0'),
                            t('faq_support_q3_a2_row0_col1'),
                            t('faq_support_q3_a2_row0_col2'),
                            t('faq_support_q3_a2_row0_col3'),
                        ],
                        [
                            t('faq_support_q3_a2_row1_col0'),
                            t('faq_support_q3_a2_row1_col1'),
                            t('faq_support_q3_a2_row1_col2'),
                            t('faq_support_q3_a2_row1_col3'),
                        ],
                        [
                            t('faq_support_q3_a2_row2_col0'),
                            t('faq_support_q3_a2_row2_col1'),
                            t('faq_support_q3_a2_row2_col2'),
                            t('faq_support_q3_a2_row2_col3'),
                        ],
                        [
                            t('faq_support_q3_a2_row3_col0'),
                            t('faq_support_q3_a2_row3_col1'),
                            t('faq_support_q3_a2_row3_col2'),
                            t('faq_support_q3_a2_row3_col3'),
                        ],
                        [
                            t('faq_support_q3_a2_row4_col0'),
                            t('faq_support_q3_a2_row4_col1'),
                            t('faq_support_q3_a2_row4_col2'),
                            t('faq_support_q3_a2_row4_col3'),
                        ],
                    ],
                },
                {
                    type: 'info',
                    title: t('faq_support_q3_a3_title'),
                    list: [
                        t('faq_support_q3_a3_item0'),
                        t('faq_support_q3_a3_item1'),
                        t('faq_support_q3_a3_item2'),
                        t('faq_support_q3_a3_item3'),
                    ],
                },
            ],
        },
    ];
    return supportMaintenanceFaqs
}


export interface FAQItem {
    question?: string;
    // icon?: string; // Optional icon property (commented out in the original)
    answer: AnswerBlock[];
}

export type AnswerBlock =
    | ParagraphBlock
    | ListBlock
    | TableBlock
    | HighlightBlock
    | CodeBlock
    | InfoBlock
    | WarningBlock
    | string;

interface ParagraphBlock {
    type?: "paragraph";
    content?: string;
}

interface ListBlock {
    type?: "list";
    title?: string;
    items?: string[];
    style?: "warning" | "info"; // Optional style modifier
}

interface TableBlock {
    type?: "table";
    headers?: string[];
    rows?: (string[] | string)[][];
}

interface HighlightBlock {
    type: "highlight";
    title?: string;
    items?: string[];
    content?: string;
    list?: string[]
}

interface CodeBlock {
    type?: "code-block" | "code";
    content?: string;
}

interface InfoBlock {
    type?: "info";
    title?: string;
    items?: string[];
    list?: string[];
    content?: string
}

interface WarningBlock {
    type?: "warning";
    title?: string;
    items?: string[];
    list?: string[]
}


export const seapenMerchantFaq = () => {
    const t = useTranslations();
    const seapenFAQs: FAQItem[] = [
        {
            question: t('faq_seapen_q1'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_seapen_q1_a1_p1'),
                },
                {
                    type: 'list',
                    items: [
                        t('faq_seapen_q1_a1_l1'),
                        t('faq_seapen_q1_a1_l2'),
                        t('faq_seapen_q1_a1_l3'),
                        t('faq_seapen_q1_a1_l4'),
                        t('faq_seapen_q1_a1_l5'),
                    ],
                },
            ],
        },
        {
            question: t('faq_seapen_q2'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_seapen_q2_a1_p1'),
                },
                {
                    type: 'list',
                    items: [
                        t('faq_seapen_q2_a1_l1'),
                        t('faq_seapen_q2_a1_l2'),
                        t('faq_seapen_q2_a1_l3'),
                        t('faq_seapen_q2_a1_l4'),
                        t('faq_seapen_q2_a1_l5'),
                    ],
                },
            ],
        },
        {
            question: t('faq_seapen_q3'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_seapen_q3_a1_p1'),
                },
                {
                    type: 'list',
                    items: [
                        t('faq_seapen_q3_a1_l1'),
                        t('faq_seapen_q3_a1_l2'),
                        t('faq_seapen_q3_a1_l3'),
                        t('faq_seapen_q3_a1_l4'),
                        t('faq_seapen_q3_a1_l5'),
                        t('faq_seapen_q3_a1_l6'),
                    ],
                },
            ],
        },
        {
            question: t('faq_seapen_q4'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_seapen_q4_a1_p1'),
                },
                {
                    type: 'list',
                    items: [
                        t('faq_seapen_q4_a1_l1'),
                        t('faq_seapen_q4_a1_l2'),
                        t('faq_seapen_q4_a1_l3'),
                        t('faq_seapen_q4_a1_l4'),
                        t('faq_seapen_q4_a1_l5'),
                        t('faq_seapen_q4_a1_l6'),
                    ],
                },
            ],
        },
        {
            question: t('faq_seapen_q5'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_seapen_q5_a1_p1'),
                },
                {
                    type: 'table',
                    headers: [
                        t('faq_seapen_q5_a1_t_header_0'),
                        t('faq_seapen_q5_a1_t_header_1'),
                        t('faq_seapen_q5_a1_t_header_2'),
                    ],
                    rows: [
                        [
                            t('faq_seapen_q5_a1_t_row_0_col_0'),
                            t('faq_seapen_q5_a1_t_row_0_col_1'),
                            t('faq_seapen_q5_a1_t_row_0_col_2'),
                        ],
                        [
                            t('faq_seapen_q5_a1_t_row_1_col_0'),
                            t('faq_seapen_q5_a1_t_row_1_col_1'),
                            t('faq_seapen_q5_a1_t_row_1_col_2'),
                        ],
                        [
                            t('faq_seapen_q5_a1_t_row_2_col_0'),
                            t('faq_seapen_q5_a1_t_row_2_col_1'),
                            t('faq_seapen_q5_a1_t_row_2_col_2'),
                        ],
                        [
                            t('faq_seapen_q5_a1_t_row_3_col_0'),
                            t('faq_seapen_q5_a1_t_row_3_col_1'),
                            t('faq_seapen_q5_a1_t_row_3_col_2'),
                        ],
                    ],
                },
                {
                    type: 'highlight',
                    content: t('faq_seapen_q5_a1_h1'),
                },
            ],
        },
        {
            question: t('faq_seapen_q6'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_seapen_q6_a1_p1'),
                },
                {
                    type: 'table',
                    headers: [
                        t('faq_seapen_q6_a1_t_header_0'),
                        t('faq_seapen_q6_a1_t_header_1'),
                        t('faq_seapen_q6_a1_t_header_2'),
                        t('faq_seapen_q6_a1_t_header_3'),
                    ],
                    rows: [
                        [
                            t('faq_seapen_q6_a1_t_row_0_col_0'),
                            t('faq_seapen_q6_a1_t_row_0_col_1'),
                            t('faq_seapen_q6_a1_t_row_0_col_2'),
                            t('faq_seapen_q6_a1_t_row_0_col_3'),
                        ],
                        [
                            t('faq_seapen_q6_a1_t_row_1_col_0'),
                            t('faq_seapen_q6_a1_t_row_1_col_1'),
                            t('faq_seapen_q6_a1_t_row_1_col_2'),
                            t('faq_seapen_q6_a1_t_row_1_col_3'),
                        ],
                        [
                            t('faq_seapen_q6_a1_t_row_2_col_0'),
                            t('faq_seapen_q6_a1_t_row_2_col_1'),
                            t('faq_seapen_q6_a1_t_row_2_col_2'),
                            t('faq_seapen_q6_a1_t_row_2_col_3'),
                        ],
                        [
                            t('faq_seapen_q6_a1_t_row_3_col_0'),
                            t('faq_seapen_q6_a1_t_row_3_col_1'),
                            t('faq_seapen_q6_a1_t_row_3_col_2'),
                            t('faq_seapen_q6_a1_t_row_3_col_3'),
                        ],
                    ],
                },
                {
                    type: 'highlight',
                    title: t('faq_seapen_q6_a1_h_title'),
                    items: [
                        t('faq_seapen_q6_a1_h_item_1'),
                        t('faq_seapen_q6_a1_h_item_2'),
                        t('faq_seapen_q6_a1_h_item_3'),
                    ],
                },
            ],
        },
        {
            question: t('faq_seapen_q7'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_seapen_q7_a1_p1'),
                },
                {
                    type: 'list',
                    items: [
                        t('faq_seapen_q7_a1_l1'),
                        t('faq_seapen_q7_a1_l2'),
                        t('faq_seapen_q7_a1_l3'),
                        t('faq_seapen_q7_a1_l4'),
                        t('faq_seapen_q7_a1_l5'),
                        t('faq_seapen_q7_a1_l6'),
                        t('faq_seapen_q7_a1_l7'),
                    ],
                },
            ],
        },
        {
            question: t('faq_seapen_q8'),
            answer: [
                {
                    type: 'paragraph',
                    content: t('faq_seapen_q8_a1_p1'),
                },
                {
                    type: 'list',
                    items: [
                        t('faq_seapen_q8_a1_l1'),
                        t('faq_seapen_q8_a1_l2'),
                        t('faq_seapen_q8_a1_l3'),
                        t('faq_seapen_q8_a1_l4'),
                        t('faq_seapen_q8_a1_l5'),
                        t('faq_seapen_q8_a1_l6'),
                        t('faq_seapen_q8_a1_l7'),
                    ],
                },
            ],
        },
    ];
    return seapenFAQs
}

