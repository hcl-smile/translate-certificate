import mockjs from 'mockjs';

export default {
  'GET /api/getInfo': mockjs.mock({
    Status: '200',
    Message: '【有效请求】查询成功',
    OrderNumber: 'ECICOMPLEMENT2022030816573925429578',
    Result: {
      KeyNo: 'xxxxxxxxxxxxxxxxx',
      Name: 'xxxxxxxxxx',
      OperId: 'xxxxxxxx',
      OperName: 'xxxxxxxxx',
      Status: '存续（在营、开业、在册）',
      StartDate: '2010-03-03',
      RegistCapi: '185000万元人民币',
      RecCap: '185000万元人民币',
      CheckDate: '2021-04-27',
      OrgNo: 'xxxxxxxx',
      No: 'xxxxxxxxx',
      CreditCode: 'xxxxxxxx',
      EconKind: '有限责任公司（自然人投资或控股）',
      TermStart: '2010-03-03',
      TermEnd: '2030-03-02',
      TaxpayerType: '一般纳税人',
      BelongOrg: 'xxxxxxxxxx市场监督管理局',
      PersonScope: '10000以上',
      InsuredCount: '114',
      EnglishName: 'xxxxxxxxxx',
      IXCode: 'xxxxxxxxxx',
      Address: 'xxxxxxxxxxxxxxxxx',
      Scope: 'xxxxxxxxxxxxxxxxx',
      IsOnStock: '0',
      StockNumber: '',
      StockType: '',
      ImageUrl: 'xxxxxxxxx',
      PhoneNumber: '010-60601234',
      Email: 'xxxxxxxx',
      WebSiteUrl: 'http://www.mi.com',
      EntNature: '0',
      Area: {
        Province: '北京市',
        City: '北京市',
        County: '海淀区',
      },
      Industry: {
        IndustryCode: 'M',
        Industry: '科学研究和技术服务业',
        SubIndustryCode: '75',
        SubIndustry: '科技推广和应用服务业',
        MiddleCategoryCode: '751',
        MiddleCategory: '技术推广服务',
        SmallCategoryCode: '7519',
        SmallCategory: '其他技术推广服务',
      },
      UsedNameList: [
        {
          Name: 'xxxxxxxxxx',
          ChangeDate: '1970-01-17',
        },
      ],
      RevokeInfo: null,
      ShareHolderList: [
        {
          KeyNo: 'xxxxxxxxx',
          StockName: 'xxxxx',
        },
      ],
      EmployeeList: [
        {
          KeyNo: 'xxxxxxx',
          Name: 'xxxxxxx',
          Job: 'xxxxxxxxxx',
        },
      ],
      InvestList: [
        {
          KeyNo: 'xxxxxxxxxx',
          Name: 'xxxxxxxxxx',
          RegistCapi: '247655.7552万元人民币',
          StartDate: '2013-12-26',
          Status: '存续',
          OperName: 'xxxxxxx',
        },
      ],
      ChangeList: [
        {
          ProjectName: '经营范围',
          BeforeList: ['技术开发', '货物进出口、技术进出口、代理进出口'],
          AfterList: ['技术开发', '货物进出口、技术进出口、代理进出口'],
          ChangeDate: '1970-01-20',
        },
      ],
      ControlList: [
        {
          KeyNo: 'xxxxxxxx',
          Name: 'xxx',
          Province: '天津市',
          Industry: '金融业',
          Status: '存续',
        },
      ],
      BranchList: [
        {
          KeyNo: 'xxxxxxxxxxx',
          Name: 'xxxxxxx',
          DirectorName: 'xxx',
          Status: '存续',
        },
      ],
      ParentInfo: null,
      MoreEmailList: [],
      MoreTelList: [
        {
          Source: '2020年报',
          Value: 'xxxx',
        },
        {
          Source: '2013年报',
          Value: 'xxxxx',
        },
        {
          Source: '互联网',
          Value: 'xxxxxxx',
        },
        {
          Source: '互联网',
          Value: 'xxxxxxx',
        },
      ],
      EntTagList: [
        {
          Type: '903',
          Name: '存续',
        },
        {
          Type: '99',
          Name: '曾用名',
        },
        {
          Type: '108',
          Name: '高新技术企业',
        },
      ],
    },
  }),
};
