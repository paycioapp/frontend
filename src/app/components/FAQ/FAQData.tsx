import { useTranslations } from "next-intl";

export function useFaqContent() {
  const t = useTranslations()
  const Generals = [
    {
      questionKey: t('faqpagetext_line1'),
      answerKey: [t('faqpagetext_line2')],
      answerKeyli: [],
      answertitle: [],
      linetext: '',
    },
    {
      questionKey: t('faqpagetext_line3'),
      answerKey: [],
      answerKeyli: [],
      table: [
        { left: t('faqpagetext_line4'), right: t('faqpagetext_line5') },
        { left: t('faqpagetext_line8'), right: t('faqpagetext_line6'), extra: t('faqpagetext_line7') },
        { left: t('faqpagetext_line11'), right: t('faqpagetext_line10') },
        { left: t('faqpagetext_line12'), right: t('faqpagetext_line13') },
        { left: t('faqpagetext_line15'), right: t('faqpagetext_line14') },
        { left: t('faqpagetext_line16'), right: t('faqpagetext_line16') },
        { left: t('faqpagetext_line19'), right: t('faqpagetext_line18') },
      ],
      linetext: '',
      answertitle: [],
    },
    {
      questionKey: t('faqpagetext_line20'),
      answerKey: [t('faqpagetext_line21')],
      answerKeyli: [],
      answertitle: [],
      linetext: '',
    },
    {
      questionKey: t('faqpagetext_line22'),
      answerKey: [t('faqpagetext_line23')],
      answerKeyli: [],
      answertitle: [],
      linetext: '',
    },
    {
      questionKey: t('faqpagetext_line24'),
      answerKey: [t('faqpagetext_line25')],
      answerKeyli: [],
      answertitle: [],
      linetext: '',
    },
  ];

  const identityVerification = [
    {
      questionKey: t('faqpagetext_line27'),
      answerKey: [t('faqpagetext_line28')],
      answerKeyli: [],
      answertitle: [],
      linetext: '',
    },
    {
      questionKey: t('faqpagetext_line29'),
      answerKey: [t('faqpagetext_line30')],
      answerKeyli: [],
      answertitle: [],
      linetext: '',
    },
    {
      questionKey: t('faqpagetext_line31'),
      answerKey: [t('faqpagetext_line31')],
      answerKeyli: [
        { key: t('faqpagetext_line33'), value: t('faqpagetext_line34') },
        { key: t('faqpagetext_line35'), value: t('faqpagetext_line36') },
        { key: t('faqpagetext_line37'), value: t('faqpagetext_line38') },
      ],
      answertitle: [],
      linetext: '',
    },
    {
      questionKey: t('faqpagetext_line39'),
      answerKey: [t('faqpagetext_line40')],
      answerKeyli: [],
      answertitle: [],
      linetext: '',
    },
    {
      questionKey: t('faqpagetext_line41'),
      answerKey: [t('faqpagetext_line42')],
      answerKeyli: [],
      answertitle: [],
      linetext: '',
    },
    {
      questionKey: t('faqpagetext_line43'),
      answerKey: [],
      answerKeyli: [
        { key: '', value: t('faqpagetext_line44') },
        { key: '', value: t('faqpagetext_line45') },
      ],
      answertitle: [],
      linetext: '',
    },
  ];

  const security = [
    {
      questionKey: t('faqpagetext_line46'),
      answertitle: [t('faqpagetext_line47')],
      answerKey: [
        t('faqpagetext_line48'),
        t('faqpagetext_line59'),
        t('faqpagetext_line60'),
        t('faqpagetext_line61'),
        t('faqpagetext_line61'),
        t('faqpagetext_line63'),
      ],
      answerKeyli: [],
      linetext: '',
    },
    {
      questionKey: t('faqpagetext_line64'),
      answertitle: [t('faqpagetext_line65')],
      answerKey: [],
      answerKeyli: [
        { key: t('faqpagetext_line66'), value: t('faqpagetext_line67') },
        { key: t('faqpagetext_line68'), value: t('faqpagetext_line69') },
      ],
      linetext: t('faqpagetext_line70'),
    },
    {
      questionKey: t('faqpagetext_line71'),
      answerKey: [t('faqpagetext_line72')],
      answerKeyli: [],
      answertitle: [],
      linetext: '',
    },
    {
      questionKey: t('faqpagetext_line73'),
      answerKey: [t('faqpagetext_line74')],
      answerKeyli: [],
      answertitle: [],
      linetext: '',
    },
    {
      questionKey: t('faqpagetext_line75'),
      answertitle: [t('faqpagetext_line76')],
      answerKey: [
        t('faqpagetext_line77'),
        t('faqpagetext_line78'),
        t('faqpagetext_line79'),
        t('faqpagetext_line80'),
        t('faqpagetext_line81'),
        t('faqpagetext_line82'),
        t('faqpagetext_line83'),
      ],
      answerKeyli: [],
      linetext: '',
    },
  ];

  const payments = [
    {
      questionKey: t('faqpagetext_line84'),
      answertitle: [t('faqpagetext_line85')],
      answerKey: [
        t('faqpagetext_line86'),
        t('faqpagetext_line87'),
        t('faqpagetext_line88'),
        t('faqpagetext_line89'),
        t('faqpagetext_line90'),
        t('faqpagetext_line91'),
      ],
      answerKeyli: [],
      linetext: '',
    },
    {
      questionKey: t('faqpagetext_line92'),
      answerKey: [t('faqpagetext_line93')],
      answerKeyli: [],
      answertitle: [],
      linetext: '',
    },
    {
      questionKey: t('faqpagetext_line94'),
      answerKey: [t('faqpagetext_line95')],
      answerKeyli: [],
      answertitle: [],
      linetext: '',
    },
    {
      questionKey: t('faqpagetext_line96'),
      answerKey: [t('faqpagetext_line97')],
      answerKeyli: [],
      answertitle: [],
      linetext: '',
    },
    {
      questionKey: t('faqpagetext_line98'),
      answerKey: [t('faqpagetext_line99')],
      answerKeyli: [],
      answertitle: [],
      linetext: '',
    },
  ];

  const fees = [
    {
      questionKey: t('faqpagetext_line100'),
      answerKey: [t('faqpagetext_line101')],
      answerKeyli: [],
      answertitle: [],
      linetext: '',
    },
    {
      questionKey: t('faqpagetext_line102'),
      answerKey: [t('faqpagetext_line103')],
      answerKeyli: [],
      answertitle: [],
      linetext: '',
    },
    {
      questionKey: t('faqpagetext_line104'),
      answerKey: [t('faqpagetext_line105')],
      answerKeyli: [],
      answertitle: [],
      linetext: '',
    },
    {
      questionKey: t('faqpagetext_line106'),
      answerKey: [t('faqpagetext_line107')],
      answerKeyli: [],
      answertitle: [],
      linetext: '',
    },
    {
      questionKey: t('faqpagetext_line108'),
      answerKey: [t('faqpagetext_line109')],
      answerKeyli: [],
      answertitle: [],
      linetext: '',
    },
  ];

  const ucpi = [
    {
      questionKey: t('faqpagetext_line110'),
      answertitle: [t('faqpagetext_line111')],
      answerKey: [t('faqpagetext_line112'), t('faqpagetext_line113'), t('faqpagetext_line114')],
      answerKeyli: [],
      linetext: t('faqpagetext_line115'),
      mail: 'support@paycio.com',
    },
    {
      questionKey: t('faqpagetext_line117'),
      answerKey: [t('faqpagetext_line118')],
      answerKeyli: [],
      answertitle: [],
      linetext: '',
    },
    {
      questionKey: t('faqpagetext_line119'),
      answerKey: [t('faqpagetext_line120')],
      answerKeyli: [],
      answertitle: [],
      linetext: '',
      mail: 'support@paycio.com',
    },
    {
      questionKey: t('faqpagetext_line121'),
      answerKey: [t('faqpagetext_line122')],
      answerKeyli: [],
      answertitle: [],
      linetext: '',
    },
  ];
 return { Generals, identityVerification, security, payments, fees, ucpi };
}