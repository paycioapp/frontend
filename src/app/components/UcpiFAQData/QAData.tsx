import { useTranslations } from "next-intl";
import { FAQItem } from "../merchantqa/Faqdata";

export const businessFaq = () => {
    const t = useTranslations();
    const businessStrategyFAQs: FAQItem[] = [
        {
            question: t("faq_businessStrategy_q0"),
            answer: [
                {
                    type: "paragraph",
                    content: t("faq_businessStrategy_a0_p0")
                },
                {
                    type: "highlight",
                    title: t("faq_businessStrategy_a0_h0_title"),
                    list: [
                        t("faq_businessStrategy_a0_h0_item0"),
                        t("faq_businessStrategy_a0_h0_item1"),
                        t("faq_businessStrategy_a0_h0_item2"),
                        t("faq_businessStrategy_a0_h0_item3")
                    ]
                },
                {
                    type: "paragraph",
                    content: t("faq_businessStrategy_a0_p1")
                }
            ]
        },
        {
            question: t("faq_businessStrategy_q1"),
            answer: [
                {
                    type: "paragraph",
                    content: t("faq_businessStrategy_a1_p0")
                },
                {
                    type: "table",
                    headers: [t("faq_businessStrategy_a1_t0_header0"), t("faq_businessStrategy_a1_t0_header1")],
                    rows: [
                        [t("faq_businessStrategy_a1_t0_row0_col0"), t("faq_businessStrategy_a1_t0_row0_col1")],
                        [t("faq_businessStrategy_a1_t0_row1_col0"), t("faq_businessStrategy_a1_t0_row1_col1")],
                        [t("faq_businessStrategy_a1_t0_row2_col0"), t("faq_businessStrategy_a1_t0_row2_col1")],
                        [t("faq_businessStrategy_a1_t0_row3_col0"), t("faq_businessStrategy_a1_t0_row3_col1")]
                    ]
                },
                {
                    type: "highlight",
                    title: t("faq_businessStrategy_a1_h0_title"),
                    list: [
                        t("faq_businessStrategy_a1_h0_item0"),
                        t("faq_businessStrategy_a1_h0_item1"),
                        t("faq_businessStrategy_a1_h0_item2"),
                        t("faq_businessStrategy_a1_h0_item3"),
                        t("faq_businessStrategy_a1_h0_item4")
                    ]
                }
            ]
        },
        {
            question: t("faq_businessStrategy_q2"),
            answer: [
                {
                    type: "paragraph",
                    content: t("faq_businessStrategy_a2_p0")
                },
                {
                    type: "highlight",
                    title: t("faq_businessStrategy_a2_h0_title"),
                    list: [
                        t("faq_businessStrategy_a2_h0_item0"),
                        t("faq_businessStrategy_a2_h0_item1"),
                        t("faq_businessStrategy_a2_h0_item2"),
                        t("faq_businessStrategy_a2_h0_item3"),
                        t("faq_businessStrategy_a2_h0_item4")
                    ]
                },
                {
                    type: "table",
                    headers: [t("faq_businessStrategy_a2_t0_header0"), t("faq_businessStrategy_a2_t0_header1")],
                    rows: [
                        [t("faq_businessStrategy_a2_t0_row0_col0"), t("faq_businessStrategy_a2_t0_row0_col1")],
                        [t("faq_businessStrategy_a2_t0_row1_col0"), t("faq_businessStrategy_a2_t0_row1_col1")],
                        [t("faq_businessStrategy_a2_t0_row2_col0"), t("faq_businessStrategy_a2_t0_row2_col1")],
                        [t("faq_businessStrategy_a2_t0_row3_col0"), t("faq_businessStrategy_a2_t0_row3_col1")]
                    ]
                }
            ]
        }
    ];
    return businessStrategyFAQs
}

export const technicalFaq = () => {
    const t = useTranslations();
    const technicalFAQs: FAQItem[] = [
        {
            question: t("faq_technical_q0"),
            answer: [
                {
                    type: "paragraph",
                    content: t("faq_technical_a0_p0")
                },
                {
                    type: "highlight",
                    title: t("faq_technical_a0_h0_title"),
                    list: [
                        t("faq_technical_a0_h0_item0"),
                        t("faq_technical_a0_h0_item1"),
                        t("faq_technical_a0_h0_item2"),
                        t("faq_technical_a0_h0_item3"),
                        t("faq_technical_a0_h0_item4")
                    ]
                },
                {
                    type: "code-block",
                    content: "Simple UCPI integration example\nconst ucpi = new UCPIClient({\n  apiKey: 'your-white-label-api-key',\n  environment: 'production',\n  branding: {\n    companyName: 'YourCompany',\n    logo: 'your-logo-url',\n    colors: { primary: '#your-brand-color' }\n  }\n});\n\n// Process crypto payment\nconst payment = await ucpi.processPayment({\n  amount: 100.00,\n  currency: 'USD',\n  cryptoType: 'auto', // Smart routing\n  merchantId: 'merchant-123'\n});"
                },
                {
                    type: "paragraph",
                    content: t("faq_technical_a0_p1")
                }
            ]
        },
        {
            question: t("faq_technical_q1"),
            answer: [
                {
                    type: "paragraph",
                    content: t("faq_technical_a1_p0")
                },
                {
                    type: "list",
                    title: t("faq_technical_a1_l0_title"),
                    items: [
                        t("faq_technical_a1_l0_item0"),
                        t("faq_technical_a1_l0_item1"),
                        t("faq_technical_a1_l0_item2"),
                        t("faq_technical_a1_l0_item3")
                    ]
                },
                {
                    type: "list",
                    title: t("faq_technical_a1_l1_title"),
                    items: [
                        t("faq_technical_a1_l1_item0"),
                        t("faq_technical_a1_l1_item1"),
                        t("faq_technical_a1_l1_item2")
                    ]
                },
                {
                    type: "list",
                    title: t("faq_technical_a1_l2_title"),
                    items: [
                        t("faq_technical_a1_l2_item0"),
                        t("faq_technical_a1_l2_item1"),
                        t("faq_technical_a1_l2_item2"),
                        t("faq_technical_a1_l2_item3")
                    ]
                },
                {
                    type: "list",
                    title: t("faq_technical_a1_l3_title"),
                    items: [
                        t("faq_technical_a1_l3_item0"),
                        t("faq_technical_a1_l3_item1"),
                        t("faq_technical_a1_l3_item2")
                    ]
                },
                {
                    type: "highlight",
                    title: t("faq_technical_a1_h0_title"),
                    list: [
                        t("faq_technical_a1_h0_item0"),
                        t("faq_technical_a1_h0_item1"),
                        t("faq_technical_a1_h0_item2"),
                        t("faq_technical_a1_h0_item3"),
                        t("faq_technical_a1_h0_item4")
                    ]
                },
                {
                    type: "paragraph",
                    content: t("faq_technical_a1_p1")
                }
            ]
        },
        {
            question: t("faq_technical_q2"),
            answer: [
                {
                    type: "paragraph",
                    content: t("faq_technical_a2_p0")
                },
                {
                    type: "list",
                    title: t("faq_technical_a2_l0_title"),
                    items: [
                        t("faq_technical_a2_l0_item0"),
                        t("faq_technical_a2_l0_item1"),
                        t("faq_technical_a2_l0_item2"),
                        t("faq_technical_a2_l0_item3"),
                        t("faq_technical_a2_l0_item4"),
                        t("faq_technical_a2_l0_item5")
                    ]
                },
                {
                    type: "paragraph",
                    content: t("faq_technical_a2_p1")
                }
            ]
        },
        {
            question: t("faq_technical_q3"),
            answer: [
                {
                    type: "paragraph",
                    content: t("faq_technical_a3_p0")
                },
                {
                    type: "highlight",
                    title: t("faq_technical_a3_h0_title"),
                    list: [
                        t("faq_technical_a3_h0_item0"),
                        t("faq_technical_a3_h0_item1"),
                        t("faq_technical_a3_h0_item2")
                    ]
                },
                {
                    type: "list",
                    title: t("faq_technical_a3_l0_title"),
                    items: [t("faq_technical_a3_l0_item0")]
                },
                {
                    type: "list",
                    title: t("faq_technical_a3_l1_title"),
                    items: [t("faq_technical_a3_l1_item0")]
                },
                {
                    type: "list",
                    title: t("faq_technical_a3_l2_title"),
                    items: [t("faq_technical_a3_l2_item0")]
                },
                {
                    type: "paragraph",
                    content: t("faq_technical_a3_p1")
                }
            ]
        }
    ];
    return technicalFAQs
}

export const commercialFaq = () => {
    const t = useTranslations()
    const commercialFaqData: FAQItem[] = [
        {
            question: t("faq_commercial_q0"),
            answer: [
                {
                    type: "paragraph",
                    content: t("faq_commercial_a0_p0")
                },
                {
                    type: "table",
                    headers: [
                        t("faq_commercial_a0_table_header0"),
                        t("faq_commercial_a0_table_header1"),
                        t("faq_commercial_a0_table_header2")
                    ],
                    rows: [
                        [t("faq_commercial_a0_table_row0_col0"), t("faq_commercial_a0_table_row0_col1"), t("faq_commercial_a0_table_row0_col2")],
                        [t("faq_commercial_a0_table_row1_col0"), t("faq_commercial_a0_table_row1_col1"), t("faq_commercial_a0_table_row1_col2")],
                        [t("faq_commercial_a0_table_row2_col0"), t("faq_commercial_a0_table_row2_col1"), t("faq_commercial_a0_table_row2_col2")],
                        [t("faq_commercial_a0_table_row3_col0"), t("faq_commercial_a0_table_row3_col1"), t("faq_commercial_a0_table_row3_col2")]
                    ]
                },
                {
                    type: "highlight",
                    title: t("faq_commercial_a0_h0_title"),
                    list: [
                        t("faq_commercial_a0_h0_item0"),
                        t("faq_commercial_a0_h0_item1"),
                        t("faq_commercial_a0_h0_item2")
                    ],
                    content: t("faq_commercial_a0_h0_content")
                }
            ]
        },
        {
            question: t("faq_commercial_q1"),
            answer: [
                {
                    type: "paragraph",
                    content: t("faq_commercial_a1_p0")
                },
                {
                    type: "list",
                    title: t("faq_commercial_a1_l0_title"),
                    items: [
                        t("faq_commercial_a1_l0_item0"),
                        t("faq_commercial_a1_l0_item1"),
                        t("faq_commercial_a1_l0_item2"),
                        t("faq_commercial_a1_l0_item3")
                    ]
                },
                {
                    type: "highlight",
                    title: t("faq_commercial_a1_h0_title"),
                    list: [
                        t("faq_commercial_a1_h0_item0"),
                        t("faq_commercial_a1_h0_item1"),
                        t("faq_commercial_a1_h0_item2"),
                        t("faq_commercial_a1_h0_item3"),
                        t("faq_commercial_a1_h0_item4")
                    ]
                }
            ]
        },
        {
            question: t("faq_commercial_q2"),
            answer: [
                {
                    type: "paragraph",
                    content: t("faq_commercial_a2_p0")
                },
                {
                    type: "list",
                    title: t("faq_commercial_a2_l0_title"),
                    items: [
                        t("faq_commercial_a2_l0_item0"),
                        t("faq_commercial_a2_l0_item1"),
                        t("faq_commercial_a2_l0_item2"),
                        t("faq_commercial_a2_l0_item3")
                    ]
                },
                {
                    type: "highlight",
                    title: t("faq_commercial_a2_h0_title"),
                    list: [
                        t("faq_commercial_a2_h0_item0"),
                        t("faq_commercial_a2_h0_item1"),
                        t("faq_commercial_a2_h0_item2"),
                        t("faq_commercial_a2_h0_item3")
                    ],
                    content: t("faq_commercial_a2_h0_content")
                },
                {
                    type: "paragraph",
                    content: t("faq_commercial_a2_p1")
                }
            ]
        },
        {
            question: t("faq_commercial_q3"),
            answer: [
                {
                    type: "paragraph",
                    content: t("faq_commercial_a3_p0")
                },
                {
                    type: "table",
                    headers: [
                        t("faq_commercial_a3_table_header0"),
                        t("faq_commercial_a3_table_header1"),
                        t("faq_commercial_a3_table_header2"),
                        t("faq_commercial_a3_table_header3")
                    ],
                    rows: [
                        [
                            t("faq_commercial_a3_table_row0_col0"),
                            t("faq_commercial_a3_table_row0_col1"),
                            t("faq_commercial_a3_table_row0_col2"),
                            t("faq_commercial_a3_table_row0_col3")
                        ],
                        [
                            t("faq_commercial_a3_table_row1_col0"),
                            t("faq_commercial_a3_table_row1_col1"),
                            t("faq_commercial_a3_table_row1_col2"),
                            t("faq_commercial_a3_table_row1_col3")
                        ],
                        [
                            t("faq_commercial_a3_table_row2_col0"),
                            t("faq_commercial_a3_table_row2_col1"),
                            t("faq_commercial_a3_table_row2_col2"),
                            t("faq_commercial_a3_table_row2_col3")
                        ],
                        [
                            t("faq_commercial_a3_table_row3_col0"),
                            t("faq_commercial_a3_table_row3_col1"),
                            t("faq_commercial_a3_table_row3_col2"),
                            t("faq_commercial_a3_table_row3_col3")
                        ]
                    ]
                },
                {
                    type: "highlight",
                    title: t("faq_commercial_a3_h0_title"),
                    list: [
                        t("faq_commercial_a3_h0_item0"),
                        t("faq_commercial_a3_h0_item1"),
                        t("faq_commercial_a3_h0_item2"),
                        t("faq_commercial_a3_h0_item3"),
                        t("faq_commercial_a3_h0_item4")
                    ]
                }
            ]
        }
    ];
    return commercialFaqData
}

export const complianceFaq = () => {
    const t = useTranslations();
    const complianceFAQ: FAQItem[] = [
        {
            question: t('faq_compliance_q0'),
            answer: [
                { type: "paragraph", content: t('faq_compliance_a0_p0') },
                {
                    type: "highlight",
                    title: t('faq_compliance_a0_h0_title'),
                    list: [
                        t('faq_compliance_a0_h0_item0'),
                        t('faq_compliance_a0_h0_item1'),
                        t('faq_compliance_a0_h0_item2'),
                        t('faq_compliance_a0_h0_item3'),
                        t('faq_compliance_a0_h0_item4')
                    ]
                },
                { type: "info", title: t('faq_compliance_a0_i0_title'), content: t('faq_compliance_a0_i0_content') },
                { type: "info", title: t('faq_compliance_a0_i1_title'), content: t('faq_compliance_a0_i1_content') },
                { type: "info", title: t('faq_compliance_a0_i2_title'), content: t('faq_compliance_a0_i2_content') },
                { type: "info", title: t('faq_compliance_a0_i3_title'), content: t('faq_compliance_a0_i3_content') },
                { type: "paragraph", content: t('faq_compliance_a0_p1') }
            ]
        },
        {
            question: t('faq_compliance_q1'),
            answer: [
                { type: "paragraph", content: t('faq_compliance_a1_p0') },
                {
                    type: "highlight",
                    title: t('faq_compliance_a1_h0_title'),
                    list: [
                        t('faq_compliance_a1_h0_item0'),
                        t('faq_compliance_a1_h0_item1'),
                        t('faq_compliance_a1_h0_item2'),
                        t('faq_compliance_a1_h0_item3'),
                        t('faq_compliance_a1_h0_item4'),
                        t('faq_compliance_a1_h0_item5')
                    ]
                },
                {
                    type: "list",
                    title: t('faq_compliance_a1_l0_title'),
                    "items": [
                        t('faq_compliance_a1_l0_item0'),
                        t('faq_compliance_a1_l0_item1'),
                        t('faq_compliance_a1_l0_item2')
                    ]
                }
            ]
        },
        {
            question: t('faq_compliance_q2'),
            answer: [
                { type: "paragraph", content: t('faq_compliance_a2_p0') },
                {
                    type: "highlight",
                    title: t('faq_compliance_a2_h0_title'),
                    list: [
                        t('faq_compliance_a2_h0_item0'),
                        t('faq_compliance_a2_h0_item1'),
                        t('faq_compliance_a2_h0_item2'),
                        t('faq_compliance_a2_h0_item3'),
                        t('faq_compliance_a2_h0_item4')
                    ]
                },
                { type: "info", title: t('faq_compliance_a2_i0_title'), content: t('faq_compliance_a2_i0_content') },
                { type: "info", title: t('faq_compliance_a2_i1_title'), content: t('faq_compliance_a2_i1_content') },
                { type: "info", title: t('faq_compliance_a2_i2_title'), content: t('faq_compliance_a2_i2_content') },
                { type: "info", title: t('faq_compliance_a2_i3_title'), content: t('faq_compliance_a2_i3_content') },
                { type: "paragraph", content: t('faq_compliance_a2_p1') }
            ]
        },
        {
            question: t('faq_compliance_q3'),
            answer: [
                { type: "paragraph", content: t('faq_compliance_a3_p0') },
                {
                    type: "table",
                    "headers": [
                        t('faq_compliance_a3_table_header0'),
                        t('faq_compliance_a3_table_header1'),
                        t('faq_compliance_a3_table_header2')
                    ],
                    "rows": [
                        [
                            t('faq_compliance_a3_table_row0_col0'),
                            t('faq_compliance_a3_table_row0_col1'),
                            t('faq_compliance_a3_table_row0_col2')
                        ],
                        [
                            t('faq_compliance_a3_table_row1_col0'),
                            t('faq_compliance_a3_table_row1_col1'),
                            t('faq_compliance_a3_table_row1_col2')
                        ],
                        [
                            t('faq_compliance_a3_table_row2_col0'),
                            t('faq_compliance_a3_table_row2_col1'),
                            t('faq_compliance_a3_table_row2_col2')
                        ],
                        [
                            t('faq_compliance_a3_table_row3_col0'),
                            t('faq_compliance_a3_table_row3_col1'),
                            t('faq_compliance_a3_table_row3_col2')
                        ]
                    ]
                },
                {
                    type: "highlight",
                    title: t('faq_compliance_a3_h0_title'),
                    list: [
                        t('faq_compliance_a3_h0_item0'),
                        t('faq_compliance_a3_h0_item1'),
                        t('faq_compliance_a3_h0_item2'),
                        t('faq_compliance_a3_h0_item3'),
                        t('faq_compliance_a3_h0_item4')
                    ]
                },
                { type: "paragraph", content: t('faq_compliance_a3_p1') }
            ]
        }
    ];
    return complianceFAQ
}

export const ucpiFAQData = () => {
  const t = useTranslations();
  const ucpiDexFAQ:FAQItem[] = [
    {
      question: t("faq_ucpiDex_q0"),
      answer: [
        {
          type: "paragraph",
          content: t("faq_ucpiDex_a0_p0")
        },
        {
          type: "list",
          items: [
            t("faq_ucpiDex_a0_l0_item0"),
            t("faq_ucpiDex_a0_l0_item1"),
            t("faq_ucpiDex_a0_l0_item2"),
            t("faq_ucpiDex_a0_l0_item3"),
            t("faq_ucpiDex_a0_l0_item4")
          ]
        }
      ]
    },
    {
      question: t("faq_ucpiDex_q1"),
      answer: [
        {
          type: "paragraph",
          content: t("faq_ucpiDex_a1_p0")
        },
        {
          type: "list",
          items: [
            t("faq_ucpiDex_a1_l0_item0"),
            t("faq_ucpiDex_a1_l0_item1"),
            t("faq_ucpiDex_a1_l0_item2")
          ]
        }
      ]
    },
    {
      question: t("faq_ucpiDex_q2"),
      answer: [
        {
          type: "paragraph",
          content: t("faq_ucpiDex_a2_p0")
        },
        {
          type: "list",
          items: [
            t("faq_ucpiDex_a2_l0_item0")
          ]
        }
      ]
    },
    {
      question: t("faq_ucpiDex_q3"),
      answer: [
        {
          type: "paragraph",
          content: t("faq_ucpiDex_a3_p0")
        },
        {
          type: "list",
          items: [
            t("faq_ucpiDex_a3_l0_item0"),
            t("faq_ucpiDex_a3_l0_item1"),
            t("faq_ucpiDex_a3_l0_item2")
          ]
        }
      ]
    },
    {
      question: t("faq_ucpiDex_q4"),
      answer: [
        {
          type: "paragraph",
          content: t("faq_ucpiDex_a4_p0")
        },
        {
          type: "list",
          items: [
            t("faq_ucpiDex_a4_l0_item0"),
            t("faq_ucpiDex_a4_l0_item1"),
            t("faq_ucpiDex_a4_l0_item2"),
            t("faq_ucpiDex_a4_l0_item3")
          ]
        }
      ]
    },
    {
      question: t("faq_ucpiDex_q5"),
      answer: [
        {
          type: "paragraph",
          content: t("faq_ucpiDex_a5_p0")
        },
        {
          type: "list",
          items: [
            t("faq_ucpiDex_a5_l0_item0"),
            t("faq_ucpiDex_a5_l0_item1"),
            t("faq_ucpiDex_a5_l0_item2"),
            t("faq_ucpiDex_a5_l0_item3")
          ]
        }
      ]
    },
    {
      question: t("faq_ucpiDex_q6"),
      answer: [
        {
          type: "paragraph",
          content: t("faq_ucpiDex_a6_p0")
        },
        {
          type: "list",
          items: [
            t("faq_ucpiDex_a6_l0_item0"),
            t("faq_ucpiDex_a6_l0_item1"),
            t("faq_ucpiDex_a6_l0_item2"),
            t("faq_ucpiDex_a6_l0_item3")
          ]
        }
      ]
    },
    {
      question: t("faq_ucpiDex_q7"),
      answer: [
        {
          type: "paragraph",
          content: t("faq_ucpiDex_a7_p0")
        },
        {
          type: "list",
          items: [
            t("faq_ucpiDex_a7_l0_item0"),
            t("faq_ucpiDex_a7_l0_item1"),
            t("faq_ucpiDex_a7_l0_item2")
          ]
        }
      ]
    },
    {
      question: t("faq_ucpiDex_q8"),
      answer: [
        {
          type: "paragraph",
          content: t("faq_ucpiDex_a8_p0")
        },
        {
          type: "list",
          items: [
            t("faq_ucpiDex_a8_l0_item0"),
            t("faq_ucpiDex_a8_l0_item1")
          ]
        }
      ]
    }
  ];
  return ucpiDexFAQ
}
