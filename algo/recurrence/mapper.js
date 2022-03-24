const data = {
  data: {
    flexReports: [
      {
        id: "crn:1:flexreports/313260c9-cfd2-40c6-a5b4-20afd81ffff2",
        name: "srushti-test-metadata-11",
        description: null,
        createdBy: "Srushti Bhoyar",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "COMPLETED",
          reportUpdatedOn: "2022-02-01T13:29:19Z",
          contents: [
            {
              preSignedUrl:
                "https://cht-reports-staging-virginia-1.s3.amazonaws.com/custom-report/110oDk9cSEDRt92jgkgEnTnLKJX8LSRb/vVKD8Vx2Nr8JCJLQY85q9pjH4cKIC4IQ/srushti-test-metadata-11/srushti-test-metadata-11_part001.csv",
              __typename: "FlexReportS3Response",
            },
          ],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "Bill_PayerAccountId", __typename: "DataSourceColumnInfo" },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            {
              name: "Pricing_PurchaseOption",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "Pricing_OfferingClass",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "Pricing_LeaseContractLength",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "bill_payeraccountid",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "pricing_purchaseoption",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "pricing_offeringclass",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "pricing_leasecontractlength",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/fa777d70-0378-4ed2-b766-56ffaf6a8e8e",
        name: "Test one",
        description: null,
        createdBy: "Ranjeet Gautam",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2022-01-31T07:03:14Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(lineItem_NetUnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_BlendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Day", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(lineItem_BlendedRate)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_NetUnblendedRate)",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_netunblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_blendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(lineitem_blendedrate)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_netunblendedrate)",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/18336157-9b4d-4e81-b062-6475929ce13f",
        name: "Report Name 12",
        description: null,
        createdBy: "Ranjeet Gautam",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2022-01-17T08:32:49Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "LineItem_LineItemType",
              __typename: "DataSourceColumnInfo",
            },
            { name: "LineItem_UsageType", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(lineItem_NetUnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_BlendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "LineItem_TaxType", __typename: "DataSourceColumnInfo" },
            { name: "Day", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(lineItem_BlendedRate)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_NetUnblendedRate)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_AvailabilityZone",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "lineitem_lineitemtype",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_usagetype",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_netunblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_blendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_taxtype",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(lineitem_blendedrate)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_netunblendedrate)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_availabilityzone",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/440396c1-4947-4b9c-b75e-b6f3f0ca372a",
        name: "sdsadasdasdasd",
        description: null,
        createdBy: "Ranjeet Gautam",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2022-01-16T10:53:57Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "LineItem_ProductCode",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_LineItemType",
              __typename: "DataSourceColumnInfo",
            },
            { name: "LineItem_UsageType", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(lineItem_NetUnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_BlendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(lineItem_BlendedRate)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_NetUnblendedRate)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_AvailabilityZone",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "lineitem_productcode",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_lineitemtype",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_usagetype",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_netunblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_blendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(lineitem_blendedrate)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_netunblendedrate)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_availabilityzone",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/fd316ea1-0a58-4e01-8ddb-95ff89e9eacb",
        name: "srushti-test-metadata-6",
        description: null,
        createdBy: "Srushti Bhoyar",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2022-01-13T10:39:27Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(lineItem_BlendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Day", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_blendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/d1b690c4-9907-4b0e-964c-7cc3a6026554",
        name: "srushti-test-metadata-5",
        description: null,
        createdBy: "Srushti Bhoyar",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2022-01-12T17:19:19Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(lineItem_BlendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_blendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/0c22a16b-f1be-4a5c-96ff-e36ad5c08f74",
        name: "srushti-test-metadata-3",
        description: null,
        createdBy: "Srushti Bhoyar",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2022-01-12T16:08:02Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(lineItem_BlendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_blendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/01ce01e3-bc38-4940-b74c-6b7e4961f611",
        name: "Test2",
        description: "Created FlexReport from Ccli Digest: Demonstration",
        createdBy: "Siva Pratheep S",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2022-01-11T12:08:00Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(lineItem_UnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Day", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_unblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/46922bf8-56d2-4a7f-9639-0fb07b853a1f",
        name: "Test1",
        description: "Created FlexReport from Ccli Digest: Demonstration",
        createdBy: "Siva Pratheep S",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2022-01-11T12:06:23Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(lineItem_UnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Day", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_unblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/29c52b59-ff0d-4393-8dea-844ca088255d",
        name: "srushti-test-metadata-2",
        description: null,
        createdBy: "Srushti Bhoyar",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2022-01-10T05:33:29Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(lineItem_UnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Product_region", __typename: "DataSourceColumnInfo" },
            { name: "Bill_PayerAccountId", __typename: "DataSourceColumnInfo" },
            {
              name: "SavingsPlan_PaymentOption",
              __typename: "DataSourceColumnInfo",
            },
            { name: "SavingsPlanCount", __typename: "DataSourceColumnInfo" },
            { name: "PurchaseYearMonth", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/99e40f6d-24d2-45de-999f-caa4982ba60d",
        name: "srushti-test-metadata-1",
        description: null,
        createdBy: "Srushti Bhoyar",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2022-01-10T05:11:37Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(lineItem_UnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Product_region", __typename: "DataSourceColumnInfo" },
            { name: "Bill_PayerAccountId", __typename: "DataSourceColumnInfo" },
            {
              name: "SavingsPlan_PaymentOption",
              __typename: "DataSourceColumnInfo",
            },
            { name: "SavingsPlanCount", __typename: "DataSourceColumnInfo" },
            { name: "PurchaseYearMonth", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/e41c4bc3-b60f-4e3a-b13f-97af41503c02",
        name: "Testttt",
        description: null,
        createdBy: "Ranjeet Gautam",
        query: {
          dataset: "CX_GCP_BILLING_EXPORT_USAGE_TEST",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2022-01-03T06:02:07Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "gcp_Project_Labels_Map_ 'instance_group_01'",
              __typename: "DataSourceColumnInfo",
            },
            { name: "SUM(Consumption)", __typename: "DataSourceColumnInfo" },
            { name: "SUM(Cost)", __typename: "DataSourceColumnInfo" },
            {
              name: "gcp_Project_Labels_Map_ 'project'",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "gcp_project_labels_map_ 'instance_group_01'",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(consumption)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "sum(cost)", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "gcp_project_labels_map_ 'project'",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/a523ffda-afb5-4926-905f-03d9bfdc0f8c",
        name: "report-query-without-alias",
        description: null,
        createdBy: "Ashutosh Dwivedi",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "FAILED",
          reportUpdatedOn: "2022-01-03T06:01:52Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "Product_instance", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(lineItem_NetUnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "product_region", __typename: "DataSourceColumnInfo" },
            { name: "Product_ProductName", __typename: "DataSourceColumnInfo" },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            { name: "product_category", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/599d278d-08fb-4a2f-872b-4ea443a28a5c",
        name: "test-migration-2",
        description: null,
        createdBy: "Yash Bhatnagar",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-12-25T13:05:20Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(lineItem_NetUnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_netunblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/b51de990-f9d3-44a1-a58e-a022c8618ecf",
        name: "Test drill",
        description: null,
        createdBy: "Ranjeet Gautam",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-12-22T11:01:39Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(lineItem_UnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_ProductCode",
              __typename: "DataSourceColumnInfo",
            },
            { name: "LineItem_UsageType", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(lineItem_NetUnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_BlendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_CurrencyCode",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_NormalizationFactor",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            {
              name: "LineItem_UsageAccountId",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_BlendedRate)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_NetUnblendedRate)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_AvailabilityZone",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_unblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_productcode",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_usagetype",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_netunblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_blendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_currencycode",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_normalizationfactor",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "lineitem_usageaccountid",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_blendedrate)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_netunblendedrate)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_availabilityzone",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/b19dd435-4c95-47be-87f8-e560f9a185fb",
        name: "test-migration",
        description: null,
        createdBy: "Yash Bhatnagar",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-12-22T07:44:01Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(lineItem_NetUnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            {
              name: "LineItem_AvailabilityZone",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_netunblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "lineitem_availabilityzone",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/b585b830-9e7e-4a99-a40e-5ded0f7c470f",
        name: "Copy of - Monthly Amortized cost of Alibaba Cloud Reserved Instances",
        description:
          "Provides the  monthly amortized cost of reserved instances distributing lumpsum amount over the months for the duration of service period",
        createdBy: "Ranjeet Gautam",
        query: {
          dataset: "ALICLOUD_INSTANCE_BILL",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-12-21T09:23:52Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "OutstandingAmount", __typename: "DataSourceColumnInfo" },
            { name: "InstanceConfig", __typename: "DataSourceColumnInfo" },
            { name: "PaymentAmount", __typename: "DataSourceColumnInfo" },
            { name: "Item", __typename: "DataSourceColumnInfo" },
            {
              name: "AmortizedAmountForRI",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            { name: "ServiceDuration", __typename: "DataSourceColumnInfo" },
            { name: "InstanceName", __typename: "DataSourceColumnInfo" },
            { name: "InstanceID", __typename: "DataSourceColumnInfo" },
            { name: "ProductType", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "outstandingamount",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "instanceconfig",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "paymentamount",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "item", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "amortizedamountforri",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "serviceduration",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "instancename", __typename: "ColumnCardinalityInfo" },
            { columnName: "instanceid", __typename: "ColumnCardinalityInfo" },
            { columnName: "producttype", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/03549c61-edad-4cad-bd85-331542bf65e7",
        name: "ipl-test-1",
        description: null,
        createdBy: "Aneesh Neelam",
        query: { dataset: "CX_IPL", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-12-21T07:29:34Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "Venue", __typename: "DataSourceColumnInfo" },
            { name: "Player_of_match", __typename: "DataSourceColumnInfo" },
            { name: "Winner", __typename: "DataSourceColumnInfo" },
            { name: "AwayTeam", __typename: "DataSourceColumnInfo" },
            { name: "HomeTeam", __typename: "DataSourceColumnInfo" },
            { name: "SUM(result_margin)", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            { columnName: "venue", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "player_of_match",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "winner", __typename: "ColumnCardinalityInfo" },
            { columnName: "awayteam", __typename: "ColumnCardinalityInfo" },
            { columnName: "hometeam", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(result_margin)",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/b50c8973-e928-4476-874f-28d5bfebc53a",
        name: "map name issue",
        description: null,
        createdBy: "Ranjeet Gautam",
        query: {
          dataset: "CX_GCP_BILLING_EXPORT_USAGE_TEST",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-12-20T06:42:51Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "gcp_Labels_Map_ 'app'",
              __typename: "DataSourceColumnInfo",
            },
            { name: "SUM(Cost)", __typename: "DataSourceColumnInfo" },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            {
              name: "gcp_Labels_Map_ 'alabel'",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "gcp_labels_map_ 'app'",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "sum(cost)", __typename: "ColumnCardinalityInfo" },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "gcp_labels_map_ 'alabel'",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/a16bdb5d-e2ee-4c90-80b0-d83d3ec84cf3",
        name: "Keerthanaa-test-300",
        description: null,
        createdBy: "Keerthanaa K",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-12-17T11:02:29Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "Reservation_ReservationARN",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "Reservation_ModificationStatus",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "Reservation_StartTime",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(pricing_publicOnDemandRate)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(reservation_NetUpfrontValue)",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "reservation_reservationarn",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "reservation_modificationstatus",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "reservation_starttime",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(pricing_publicondemandrate)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(reservation_netupfrontvalue)",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/1fa42941-3b73-4634-b0e3-2012c4f163fe",
        name: "Srini",
        description:
          "Provides the list of AWS storage snapshots with no usage recorded in the current and past month and can be reviewed for optimization opportunities",
        createdBy: "Srinivasa Murthy",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-12-14T17:45:06Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "Product_ProductName", __typename: "DataSourceColumnInfo" },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            {
              name: "LineItem_UsageAmount",
              __typename: "DataSourceColumnInfo",
            },
            { name: "LineItem_ResourceId", __typename: "DataSourceColumnInfo" },
            {
              name: "Product_ProductFamily",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "product_productname",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "lineitem_usageamount",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_resourceid",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "product_productfamily",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/bac6e343-5133-4c0f-ac38-b29e728d2cac",
        name: "Aneesh-SimpleTransformer-Parquet-Test",
        description: null,
        createdBy: "Aneesh Neelam",
        query: {
          dataset: "CX_PRICING_AWS_ELB_TEST",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-12-06T06:58:26Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(DiscountedPricing)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Derived_region", __typename: "DataSourceColumnInfo" },
            { name: "SUM(PricePerUnit)", __typename: "DataSourceColumnInfo" },
            { name: "PriceDescription", __typename: "DataSourceColumnInfo" },
            { name: "ProductFamily", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(discountedpricing)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "derived_region",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(priceperunit)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "pricedescription",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "productfamily",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/27471772-9717-4fa1-b1e3-56ea6f6a3ce5",
        name: "Aneesh-DefaultParquet-MtdBill-Test-1",
        description: null,
        createdBy: "Aneesh Neelam",
        query: {
          dataset: "CX_MOCK_MTD_DATASET_TEST",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-24T11:12:54Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(gcp_Credits_#_discount)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(gcp_Credits_#_consumedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "gcp_Credits_Map, 'consumedcost'",
              __typename: "DataSourceColumnInfo",
            },
            { name: "SUM(Cost)", __typename: "DataSourceColumnInfo" },
            { name: "BillingAccountId", __typename: "DataSourceColumnInfo" },
            {
              name: "gcp_Credits_Map, 'discount'",
              __typename: "DataSourceColumnInfo",
            },
            { name: "ProjectId", __typename: "DataSourceColumnInfo" },
            {
              name: "Organization.suborgname",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(gcp_Credits_#_upfrontCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "gcp_Credits_Map, 'upfrontcost'",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/9155925f-68b4-4c48-92d4-49fd7adf9c6f",
        name: "Aneesh-ORC-MtdBill-Perf-Test-1",
        description: null,
        createdBy: "Aneesh Neelam",
        query: {
          dataset: "CX_TEST_AWS_CUR_ORC_BLOOMFILTER_SORT",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-24T10:01:56Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "TimeInterval_Month", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(lineItem_UnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Day", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "timeinterval_month",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_unblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/531211a5-d800-48c0-8d01-1d3f223e868d",
        name: "srushti-9Feb-test-2",
        description: null,
        createdBy: "Srushti Bhoyar",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-23T14:34:28Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(lineItem_UnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Product_ProductName", __typename: "DataSourceColumnInfo" },
            { name: "Month", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_unblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "product_productname",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/821be5ef-71cd-4c69-a37c-3adad001803b",
        name: "srushti-9Feb-test-1",
        description: null,
        createdBy: "Srushti Bhoyar",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-22T16:26:54Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(lineItem_UnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Product_ProductName", __typename: "DataSourceColumnInfo" },
            { name: "Month", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_unblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "product_productname",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/1bba968e-9d0b-456d-b030-e41fe30e73c0",
        name: "Copy of - Total number of New Savings Plan Purchases",
        description:
          "Provides the total # of savings plans purchased and show associated Payer Account ID, Region, and Savings Plan type (Upfront, Partial, No Upfront), for last 12 months",
        createdBy: "Ashutosh Dwivedi",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-16T16:55:14Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(lineItem_UnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Product_region", __typename: "DataSourceColumnInfo" },
            { name: "Bill_PayerAccountId", __typename: "DataSourceColumnInfo" },
            {
              name: "SavingsPlan_PaymentOption",
              __typename: "DataSourceColumnInfo",
            },
            { name: "SavingsPlanCount", __typename: "DataSourceColumnInfo" },
            { name: "PurchaseYearMonth", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/2b10fb77-338a-41ec-bdbd-170336cfd4b9",
        name: "ashutosh-test-32211111111",
        description: null,
        createdBy: "Ashutosh Dwivedi",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-16T14:07:09Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "LineItem_ProductCode",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_NetUnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Product_ProductName", __typename: "DataSourceColumnInfo" },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            { name: "Product_category", __typename: "DataSourceColumnInfo" },
            { name: "Bill_billtype", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "lineitem_productcode",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_netunblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "product_productname",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "product_category",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "bill_billtype",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/3ee5796d-fe68-44bd-9c1c-2374a6c1f292",
        name: "thisisanAuditTest3",
        description: null,
        createdBy: "Yash Bhatnagar",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-14T14:09:52Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(lineItem_UnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_unblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/01ccba2c-cdd0-47f2-a454-92ec7e115920",
        name: "thisisanAuditTest2",
        description: null,
        createdBy: "Yash Bhatnagar",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-14T14:00:45Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(lineItem_UnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_unblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/75408fcc-a045-4b4e-88ab-5704a5391912",
        name: "thisisanAuditTest",
        description: null,
        createdBy: "Yash Bhatnagar",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-14T13:59:46Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "Reservation_ReservationARN",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_UnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SavingsPlan_SavingsPlanARN",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "reservation_reservationarn",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_unblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "savingsplan_savingsplanarn",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/9e31c6b4-b28a-4e35-80d4-b4dbf7c9220e",
        name: "SJ CTAS 222222222",
        description: null,
        createdBy: "Yash Bhatnagar",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-14T13:58:21Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "Reservation_ReservationARN",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_UnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SavingsPlan_SavingsPlanARN",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "reservation_reservationarn",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_unblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "savingsplan_savingsplanarn",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/bf1693ae-d680-4ef6-96ed-55c94f4e81e3",
        name: "erwqerwerwe",
        description: null,
        createdBy: "Ranjeet Gautam",
        query: {
          dataset: "CX_AZURE_MARKETPLACE",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-12T10:59:44Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "SUM(ExtendedCost)", __typename: "DataSourceColumnInfo" },
            {
              name: "azure_AdditionalInfo_Map, 'vcpus'",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            {
              name: "azure_AdditionalInfo_Map, 'vmname'",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/bc962727-b725-4dca-8f2b-ebf0adb15aa5",
        name: "dsfdsd",
        description: null,
        createdBy: "Ranjeet Gautam",
        query: {
          dataset: "CX_AZURE_MARKETPLACE",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-11T20:56:54Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "SUM(ExtendedCost)", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(ConsumedQuantity)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            {
              name: "azure_AdditionalInfo_Map, 'vmproperties'",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "azure_AdditionalInfo_Map, 'vmname'",
              __typename: "DataSourceColumnInfo",
            },
            { name: "ConsumedService", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/6cfb498c-0ef9-4a3e-b0db-d0f4ea643632",
        name: "ytdtytctytt",
        description: null,
        createdBy: "Ranjeet Gautam",
        query: {
          dataset: "CX_AZURE_MARKETPLACE",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-11T20:30:10Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "(azure_AdditionalInfo_Map, 'vmproperties')",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "(azure_AdditionalInfo_Map, 'vmname')",
              __typename: "DataSourceColumnInfo",
            },
            { name: "SUM(ExtendedCost)", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(ConsumedQuantity)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/710996bd-0389-4930-9b27-add9a187b1ce",
        name: "dfsddfsdfsdf",
        description: null,
        createdBy: "Ranjeet Gautam",
        query: {
          dataset: "CX_AZURE_MARKETPLACE",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-11T19:37:35Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "(azure_AdditionalInfo_Map, 'vmname'",
              __typename: "DataSourceColumnInfo",
            },
            { name: "SUM(ExtendedCost)", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(ConsumedQuantity)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Day", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "(azure_additionalinfo_map, 'vmname'",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(extendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(consumedquantity)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/eb5292fe-86d6-4e6c-843c-469c253aac31",
        name: "tests currencyyyyy",
        description: "asdasdasd",
        createdBy: "Ranjeet Gautam",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-11T14:54:13Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "lineItem_BlendedCost",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "lineItem_UnblendedRate",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_UnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "lineItem_NetUnblendedCost",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_UsageAmount)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(lineItem_NormalizedUsageAmount)",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "lineitem_blendedcost",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_unblendedrate",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_unblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_netunblendedcost",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_usageamount)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(lineitem_normalizedusageamount)",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/df9344cb-3944-4601-a492-a89b016444f3",
        name: "FlexDashBoard - MultiYAxis",
        description: null,
        createdBy: "Satyanarayana Swami Jonnalagadda",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-10T05:35:49Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(lineItem_UnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_ProductCode",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(savingsPlan_SavingsPlanEffectiveCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_LineItemType",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(edp_NetUnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Day", __typename: "DataSourceColumnInfo" },
            {
              name: "LineItem_UsageAccountId",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_unblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_productcode",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(savingsplan_savingsplaneffectivecost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_lineitemtype",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(edp_netunblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "lineitem_usageaccountid",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/f5b5d490-52fc-429e-9371-bdac92b385b5",
        name: "FlexDashBoard - Cost By FlexOrgs",
        description: null,
        createdBy: "Satyanarayana Swami Jonnalagadda",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-09T18:49:21Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(lineItem_UnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "Organization.suborgid",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "Organization.accountname",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_unblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "organization.suborgid",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "organization.accountname",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/e8c03106-409b-4edb-8eca-cc1499fee9e9",
        name: "FlexDashBoard - Custom Report IPL",
        description: null,
        createdBy: "Satyanarayana Swami Jonnalagadda",
        query: { dataset: "CX_IPL", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-09T18:43:37Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "Venue", __typename: "DataSourceColumnInfo" },
            { name: "Toss_decision", __typename: "DataSourceColumnInfo" },
            { name: "Date", __typename: "DataSourceColumnInfo" },
            { name: "Method", __typename: "DataSourceColumnInfo" },
            { name: "Eliminator", __typename: "DataSourceColumnInfo" },
            { name: "HomeTeam", __typename: "DataSourceColumnInfo" },
            { name: "Neutral_venue", __typename: "DataSourceColumnInfo" },
            { name: "Result", __typename: "DataSourceColumnInfo" },
            { name: "Player_of_match", __typename: "DataSourceColumnInfo" },
            { name: "Winner", __typename: "DataSourceColumnInfo" },
            { name: "AwayTeam", __typename: "DataSourceColumnInfo" },
            { name: "Umpire2", __typename: "DataSourceColumnInfo" },
            { name: "Umpire1", __typename: "DataSourceColumnInfo" },
            { name: "SUM(result_margin)", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            { columnName: "venue", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "toss_decision",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "date", __typename: "ColumnCardinalityInfo" },
            { columnName: "method", __typename: "ColumnCardinalityInfo" },
            { columnName: "eliminator", __typename: "ColumnCardinalityInfo" },
            { columnName: "hometeam", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "neutral_venue",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "result", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "player_of_match",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "winner", __typename: "ColumnCardinalityInfo" },
            { columnName: "awayteam", __typename: "ColumnCardinalityInfo" },
            { columnName: "umpire2", __typename: "ColumnCardinalityInfo" },
            { columnName: "umpire1", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(result_margin)",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/008ae266-2aa0-4d20-97cf-c2f0ee6c6cd7",
        name: "FlexDashBoard - QTD",
        description: null,
        createdBy: "Satyanarayana Swami Jonnalagadda",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-09T18:26:35Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "Cost($)", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            { columnName: "cost($)", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/d5ae09fd-7a6b-43b2-9fd5-74d2e1ee4a49",
        name: "FlexDashBoard - Oct 2021",
        description: null,
        createdBy: "Satyanarayana Swami Jonnalagadda",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-09T18:19:00Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(edp_NetUnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(edp_netunblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/10107717-3e86-461f-afe5-679565cb460b",
        name: "FlexDashBoard - MoM Cost",
        description: null,
        createdBy: "Satyanarayana Swami Jonnalagadda",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-09T18:18:09Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(edp_NetUnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(edp_netunblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/fa808565-6710-45b9-8093-2b03afb37374",
        name: "FlexDashBoard - IAM Root User Access Keys Enabled",
        description: null,
        createdBy: "Satyanarayana Swami Jonnalagadda",
        query: { dataset: "CX_AWS_CREDENTIALS", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-09T16:51:59Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "IAMUserCount", __typename: "DataSourceColumnInfo" },
            { name: "Access Key 1", __typename: "DataSourceColumnInfo" },
            { name: "User", __typename: "DataSourceColumnInfo" },
            { name: "Access Key 2", __typename: "DataSourceColumnInfo" },
            { name: "Account", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            { columnName: "iamusercount", __typename: "ColumnCardinalityInfo" },
            { columnName: "access key 1", __typename: "ColumnCardinalityInfo" },
            { columnName: "user", __typename: "ColumnCardinalityInfo" },
            { columnName: "access key 2", __typename: "ColumnCardinalityInfo" },
            { columnName: "account", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/1e63ce48-cf19-4685-b413-2127f50d403f",
        name: "FlexDashboard - Perspective Team Spend",
        description: null,
        createdBy: "Srushti Bhoyar",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-09T15:00:00Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(lineItem_UnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            { name: "Perspective.Team", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_unblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "perspective.team",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/3ea444a0-d98c-4d77-8366-0bd14278cde6",
        name: "FlexDashboard - Service Heat Map",
        description: null,
        createdBy: "Srushti Bhoyar",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-09T14:54:38Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(lineItem_UnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Product_ProductName", __typename: "DataSourceColumnInfo" },
            { name: "Month", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_unblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "product_productname",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/267c25b7-e547-4293-b8ad-73dc919f3bd6",
        name: "FlexDashBoard - Cost By Perspective Team",
        description: null,
        createdBy: "Satyanarayana Swami Jonnalagadda",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-09T13:29:35Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(lineItem_UnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            { name: "Perspective.Team", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_unblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "perspective.team",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/e94683ba-8607-4773-a5a1-30af9a0f65d4",
        name: "FlexDashboard - MFA Status On Accounts",
        description: null,
        createdBy: "Satyanarayana Swami Jonnalagadda",
        query: { dataset: "CX_AWS_CREDENTIALS", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-09T13:27:34Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "IAMUserCount", __typename: "DataSourceColumnInfo" },
            { name: "MFA", __typename: "DataSourceColumnInfo" },
            { name: "Account Type", __typename: "DataSourceColumnInfo" },
            { name: "Account", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            { columnName: "iamusercount", __typename: "ColumnCardinalityInfo" },
            { columnName: "mfa", __typename: "ColumnCardinalityInfo" },
            { columnName: "account type", __typename: "ColumnCardinalityInfo" },
            { columnName: "account", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/3bfacb0d-72f7-4c99-8b2a-dfb2bfc5927e",
        name: "FlexDashBoard - IAM AccessKeyAge Status",
        description: null,
        createdBy: "Satyanarayana Swami Jonnalagadda",
        query: { dataset: "CX_AWS_CREDENTIALS", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-09T13:19:50Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "KeyLastRotated", __typename: "DataSourceColumnInfo" },
            { name: "AccessKey", __typename: "DataSourceColumnInfo" },
            { name: "Reason", __typename: "DataSourceColumnInfo" },
            { name: "User", __typename: "DataSourceColumnInfo" },
            { name: "STATUS", __typename: "DataSourceColumnInfo" },
            { name: "AccountID", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "keylastrotated",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "accesskey", __typename: "ColumnCardinalityInfo" },
            { columnName: "reason", __typename: "ColumnCardinalityInfo" },
            { columnName: "user", __typename: "ColumnCardinalityInfo" },
            { columnName: "status", __typename: "ColumnCardinalityInfo" },
            { columnName: "accountid", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/76eb721c-2131-4b89-8e48-bef6fc32448e",
        name: "FlexDashboard - IAM Password Age",
        description: null,
        createdBy: "Satyanarayana Swami Jonnalagadda",
        query: { dataset: "CX_AWS_CREDENTIALS", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-09T12:47:26Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "IAMUserCount", __typename: "DataSourceColumnInfo" },
            {
              name: '"Last LoggedIn Time"',
              __typename: "DataSourceColumnInfo",
            },
            { name: "Reason", __typename: "DataSourceColumnInfo" },
            { name: "Password Age", __typename: "DataSourceColumnInfo" },
            { name: "Account", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            { columnName: "iamusercount", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "last loggedin time",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "reason", __typename: "ColumnCardinalityInfo" },
            { columnName: "password age", __typename: "ColumnCardinalityInfo" },
            { columnName: "account", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/ed5a898e-bf87-4ae1-95c0-6beac6034baa",
        name: "FlexDashboard - IAM User Count Flagged by Account",
        description: null,
        createdBy: "Satyanarayana Swami Jonnalagadda",
        query: { dataset: "CX_AWS_CREDENTIALS", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-09T11:47:43Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "KeyLastRotated", __typename: "DataSourceColumnInfo" },
            { name: "IAMUserCount", __typename: "DataSourceColumnInfo" },
            { name: "AccessKey", __typename: "DataSourceColumnInfo" },
            { name: "Reason", __typename: "DataSourceColumnInfo" },
            { name: "Status", __typename: "DataSourceColumnInfo" },
            { name: "AccountId", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "keylastrotated",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "iamusercount", __typename: "ColumnCardinalityInfo" },
            { columnName: "accesskey", __typename: "ColumnCardinalityInfo" },
            { columnName: "reason", __typename: "ColumnCardinalityInfo" },
            { columnName: "status", __typename: "ColumnCardinalityInfo" },
            { columnName: "accountid", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/cb0382ad-8ad1-4995-b79f-86ab8dbcc400",
        name: "hack key rotation report",
        description: null,
        createdBy: "Srushti Bhoyar",
        query: { dataset: "CX_AWS_CREDENTIALS", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-09T10:25:31Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "KeyLastRotated", __typename: "DataSourceColumnInfo" },
            { name: "AccessKey", __typename: "DataSourceColumnInfo" },
            { name: "Reason", __typename: "DataSourceColumnInfo" },
            { name: "User", __typename: "DataSourceColumnInfo" },
            { name: "STATUS", __typename: "DataSourceColumnInfo" },
            { name: "AccountID", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "keylastrotated",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "accesskey", __typename: "ColumnCardinalityInfo" },
            { columnName: "reason", __typename: "ColumnCardinalityInfo" },
            { columnName: "user", __typename: "ColumnCardinalityInfo" },
            { columnName: "status", __typename: "ColumnCardinalityInfo" },
            { columnName: "accountid", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/8bd15973-f567-4030-8c22-e5b456183881",
        name: "FlexDashBoard - IAM Aged Access Keys",
        description: null,
        createdBy: "Satyanarayana Swami Jonnalagadda",
        query: { dataset: "CX_AWS_CREDENTIALS", __typename: "FlexReportQuery" },
        result: {
          status: "FAILED",
          reportUpdatedOn: "2021-11-09T10:11:21Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "AccessKey", __typename: "DataSourceColumnInfo" },
            { name: "User", __typename: "DataSourceColumnInfo" },
            { name: "STATUS", __typename: "DataSourceColumnInfo" },
            { name: "Account", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/c2d4627c-1420-4a8f-add8-1e91cdffe8a6",
        name: "IAM Aged ACCESS KEYS",
        description: null,
        createdBy: "Satyanarayana Swami Jonnalagadda",
        query: { dataset: "CX_AWS_CREDENTIALS", __typename: "FlexReportQuery" },
        result: {
          status: "FAILED",
          reportUpdatedOn: "2021-11-09T10:01:26Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "AccessKey", __typename: "DataSourceColumnInfo" },
            { name: "User", __typename: "DataSourceColumnInfo" },
            { name: "STATUS", __typename: "DataSourceColumnInfo" },
            { name: "Account", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/b016c0ae-6460-49a2-8f53-fec4da3bc63c",
        name: "heatmap hack",
        description: null,
        createdBy: "Ranjeet Gautam",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-09T07:30:38Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "LineItem_ProductCode",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_NetUnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(lineItem_NetUnblendedRate)",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "lineitem_productcode",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_netunblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(lineitem_netunblendedrate)",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/d9f16c64-4f24-4992-b656-79accda4310e",
        name: "asfasfasfasfasf",
        description: null,
        createdBy: "Ranjeet Gautam",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-09T04:26:06Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(lineItem_UnblendedRate)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(lineItem_BlendedRate)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_NetUnblendedRate)",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_unblendedrate)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(lineitem_blendedrate)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_netunblendedrate)",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/1ae84e8b-293d-41fe-b3e0-e1e118b2047e",
        name: "FD - MFA ROOT ACCOUNTS WITH PASSWORD ENABLED",
        description:
          "This report tells details about the Root aws accounts which have password enabled which is a security threat",
        createdBy: "Satyanarayana Swami Jonnalagadda",
        query: { dataset: "CX_AWS_CREDENTIALS", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-08T11:14:38Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "AccountId", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            { columnName: "accountid", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/4ca9a6f2-ca2d-42e9-bc18-5defa13cf068",
        name: "MFA Disabled IAM Report",
        description: null,
        createdBy: "Satyanarayana Swami Jonnalagadda",
        query: { dataset: "CX_AWS_CREDENTIALS", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-08T10:19:54Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "IamUserCount", __typename: "DataSourceColumnInfo" },
            { name: "User_created_at", __typename: "DataSourceColumnInfo" },
            { name: "mfa_enabled", __typename: "DataSourceColumnInfo" },
            { name: "user", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/eb16a869-8a72-4ecb-ab23-de62f46dae9d",
        name: "teteteteetetteteettet",
        description: null,
        createdBy: "Ranjeet Gautam",
        query: {
          dataset: "CX_MTD_DATASET_TEST_MAP_MEASURES",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-08T08:24:41Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(ELEMENT_AT(gcp_Credits_Map, 'upfrontcost'))",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(ELEMENT_AT(gcp_Credits_Map, 'discount'))",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/fcfcb11b-4174-4031-bb9a-0f296c9b4fa3",
        name: "tetetettetette",
        description: null,
        createdBy: "Ranjeet Gautam",
        query: {
          dataset: "CX_MTD_DATASET_TEST_MAP_MEASURES",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-08T07:05:01Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(element_at(gcp_Credits_Map, 'upfrontcost'))",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Day", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(element_at(gcp_Credits_Map, 'discount'))",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(element_at(gcp_credits_map, 'upfrontcost'))",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(element_at(gcp_credits_map, 'discount'))",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/b24a6fae-e3f5-4d91-a0d9-7f3e37172c13",
        name: "sdfgsdfgsdfsdfsdfsdf",
        description: null,
        createdBy: "Ranjeet Gautam",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-03T05:43:23Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(lineItem_BlendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Day", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(lineItem_BlendedRate)",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_blendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(lineitem_blendedrate)",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/7646355d-9259-47b1-829c-ebcbb1ae0d8b",
        name: "Copy of - Daily Cost by AWS Product Region",
        description:
          "Provides the total Daily Unblended Cost by AWS Product Region, for last 30 Days",
        createdBy: "Satyanarayana Swami Jonnalagadda",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-03T04:59:47Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(lineItem_NetUnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_UsageAmount)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Pricing_term", __typename: "DataSourceColumnInfo" },
            {
              name: "Pricing_OfferingClass",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "Pricing_LeaseContractLength",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "Product_productFamily",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_UnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Bill_PayerAccountId", __typename: "DataSourceColumnInfo" },
            { name: "Product_ProductName", __typename: "DataSourceColumnInfo" },
            {
              name: "Bill_CloudHealthGeneratedAccountId",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Day", __typename: "DataSourceColumnInfo" },
            {
              name: "Pricing_PurchaseOption",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Pricing_unit", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_netunblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_usageamount)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "pricing_term", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "pricing_offeringclass",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "pricing_leasecontractlength",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "product_productfamily",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_unblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "bill_payeraccountid",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "product_productname",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "bill_cloudhealthgeneratedaccountid",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "pricing_purchaseoption",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "pricing_unit", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/3a4f4bab-8eff-4140-a713-bafebdb72ec6",
        name: "Iron Man 1",
        description: null,
        createdBy: "Satyanarayana Swami Jonnalagadda",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-11-03T04:59:39Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "LineItem_ProductCode",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_LineItemType",
              __typename: "DataSourceColumnInfo",
            },
            { name: "LineItem_UsageType", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(lineItem_NetUnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Bill_PayerAccountId", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(edp_NetUnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            {
              name: "LineItem_UsageAccountId",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(discount_TotalDiscount)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "Product_productFamily",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "lineitem_productcode",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_lineitemtype",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_usagetype",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_netunblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "bill_payeraccountid",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(edp_netunblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "lineitem_usageaccountid",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(discount_totaldiscount)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "product_productfamily",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/fac19daa-4bbf-4d5b-a6ee-8cad300b6dc7",
        name: "test 123",
        description: null,
        createdBy: "Ranjeet Gautam",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-10-29T07:04:37Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(lineItem_BlendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Day", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_blendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/eb513469-12e4-4919-a63d-6ebf6e389a15",
        name: "Tests charts flow",
        description: null,
        createdBy: "Ranjeet Gautam",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-10-27T09:49:12Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "LineItem_Operation", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(lineItem_UnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_ProductCode",
              __typename: "DataSourceColumnInfo",
            },
            { name: "LineItem_UsageType", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(lineItem_UnblendedRate)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_BlendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_CurrencyCode",
              __typename: "DataSourceColumnInfo",
            },
            { name: "LineItem_TaxType", __typename: "DataSourceColumnInfo" },
            { name: "Day", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(lineItem_BlendedRate)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_AvailabilityZone",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "lineitem_operation",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_unblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_productcode",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_usagetype",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_unblendedrate)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_blendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_currencycode",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_taxtype",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(lineitem_blendedrate)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_availabilityzone",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/1ec887da-4563-442e-b476-48b43c3219db",
        name: "sfasdasdasd",
        description: "asdsadasdasd",
        createdBy: "Ranjeet Gautam",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-10-26T12:20:42Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "LineItem_Operation", __typename: "DataSourceColumnInfo" },
            {
              name: "LineItem_ProductCode",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_LineItemType",
              __typename: "DataSourceColumnInfo",
            },
            { name: "LineItem_UsageType", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(lineItem_NetUnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_BlendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Day", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(lineItem_BlendedRate)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_AvailabilityZone",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "lineitem_operation",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_productcode",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_lineitemtype",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_usagetype",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_netunblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_blendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(lineitem_blendedrate)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_availabilityzone",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/146dda26-0089-4128-8449-f10ad1d66fa3",
        name: "test-live-mode-time-range-filter",
        description: null,
        createdBy: "Ashutosh Dwivedi",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-10-22T07:57:55Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(lineItem_NetUnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Product_region", __typename: "DataSourceColumnInfo" },
            { name: "Day", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_netunblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "product_region",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/e41240b0-ef38-4874-a785-a1d0f1769044",
        name: "Copy of - Copy of - GCE Compute Usage (v1)",
        description: null,
        createdBy: "Satyanarayana Swami Jonnalagadda",
        query: {
          dataset: "CX_2017_GCE_USAGE_REPORT",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-10-21T11:53:42Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "Machine_Series", __typename: "DataSourceColumnInfo" },
            { name: "Machine_Type", __typename: "DataSourceColumnInfo" },
            { name: "Project_Id", __typename: "DataSourceColumnInfo" },
            { name: "Calculated_Cores", __typename: "DataSourceColumnInfo" },
            { name: "Billing_Account_Id", __typename: "DataSourceColumnInfo" },
            {
              name: "Calculated_RAM_In_GB",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            { name: "Region", __typename: "DataSourceColumnInfo" },
            { name: "Machine_Family", __typename: "DataSourceColumnInfo" },
            { name: "Coverage_Type", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/4d679a7c-b81e-489f-9e0e-b7df7568b7dc",
        name: "Copy of - GCE Compute Usage (v1)",
        description: null,
        createdBy: "Ashutosh Dwivedi",
        query: {
          dataset: "CX_2017_GCE_USAGE_REPORT",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-10-20T03:11:49Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "Machine_Series", __typename: "DataSourceColumnInfo" },
            { name: "Machine_Type", __typename: "DataSourceColumnInfo" },
            { name: "Project_Id", __typename: "DataSourceColumnInfo" },
            { name: "Calculated_Cores", __typename: "DataSourceColumnInfo" },
            { name: "Billing_Account_Id", __typename: "DataSourceColumnInfo" },
            {
              name: "Calculated_RAM_In_GB",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            { name: "Region", __typename: "DataSourceColumnInfo" },
            { name: "Machine_Family", __typename: "DataSourceColumnInfo" },
            { name: "Coverage_Type", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/feee1299-295a-4684-83ae-c2c0b76c6c29",
        name: "GCE Compute Usage (v1)",
        description: null,
        createdBy: "Sandeep Pathak",
        query: {
          dataset: "CX_2017_GCE_USAGE_REPORT",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-10-19T21:18:37Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "Machine_Series", __typename: "DataSourceColumnInfo" },
            { name: "Machine_Type", __typename: "DataSourceColumnInfo" },
            { name: "Project_Id", __typename: "DataSourceColumnInfo" },
            { name: "Calculated_Cores", __typename: "DataSourceColumnInfo" },
            { name: "Billing_Account_Id", __typename: "DataSourceColumnInfo" },
            {
              name: "Calculated_RAM_In_GB",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            { name: "Region", __typename: "DataSourceColumnInfo" },
            { name: "Machine_Family", __typename: "DataSourceColumnInfo" },
            { name: "Coverage_Type", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "machine_series",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "machine_type", __typename: "ColumnCardinalityInfo" },
            { columnName: "project_id", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "calculated_cores",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "billing_account_id",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "calculated_ram_in_gb",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            { columnName: "region", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "machine_family",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "coverage_type",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/64167211-a271-4680-b089-13ebb2dd5dd3",
        name: "Test chartsssssss",
        description: null,
        createdBy: "Ranjeet Gautam",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-10-19T03:32:26Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(edp_NetUnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            {
              name: "Resourcetags_user:cht_env",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "Resourcetags_user:cht_function",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "Product_productFamily",
              __typename: "DataSourceColumnInfo",
            },
            { name: "LineItem_Operation", __typename: "DataSourceColumnInfo" },
            {
              name: "Resourcetags_user:name",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "Resourcetags_user:cht_tower",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Product_ProductName", __typename: "DataSourceColumnInfo" },
            { name: "Product_servicename", __typename: "DataSourceColumnInfo" },
            {
              name: "LineItem_UsageAccountId",
              __typename: "DataSourceColumnInfo",
            },
            { name: "LineItem_ResourceId", __typename: "DataSourceColumnInfo" },
            {
              name: "Resourcetags_user:cht_subfunction",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "Resourcetags_user:cht_owner",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(edp_netunblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "resourcetags_user:cht_env",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "resourcetags_user:cht_function",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "product_productfamily",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_operation",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "resourcetags_user:name",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "resourcetags_user:cht_tower",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "product_productname",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "product_servicename",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_usageaccountid",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_resourceid",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "resourcetags_user:cht_subfunction",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "resourcetags_user:cht_owner",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/131ab1b4-b225-4f0a-ae66-0bb49c110845",
        name: "Copy of - Monthly Total cost of Alibaba Cloud Pay-as-you-go Instances",
        description:
          "Provides the monthly total cost of pay-as-you-go usage summing up both Payment amount and Outstanding Amount, considering tax rate",
        createdBy: "Guru Raj Vaishnav",
        query: {
          dataset: "ALICLOUD_INSTANCE_BILL",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-10-11T12:27:26Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "OutstandingAmount", __typename: "DataSourceColumnInfo" },
            { name: "PaymentAmount", __typename: "DataSourceColumnInfo" },
            { name: "SubscriptionType", __typename: "DataSourceColumnInfo" },
            { name: "ProductName", __typename: "DataSourceColumnInfo" },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            { name: "FinalAmount", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "outstandingamount",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "paymentamount",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "subscriptiontype",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "productname", __typename: "ColumnCardinalityInfo" },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            { columnName: "finalamount", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/14c8170b-5739-4e91-b37b-b6cfc2c9b4e4",
        name: "Alicloud - Dataset - verification",
        description: null,
        createdBy: "Guru Raj Vaishnav",
        query: {
          dataset: "ALICLOUD_INSTANCE_BILL",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-10-11T10:59:55Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "OutstandingAmount", __typename: "DataSourceColumnInfo" },
            { name: "PaymentAmount", __typename: "DataSourceColumnInfo" },
            { name: "SubscriptionType", __typename: "DataSourceColumnInfo" },
            { name: "ProductName", __typename: "DataSourceColumnInfo" },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            { name: "FinalAmount", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "outstandingamount",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "paymentamount",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "subscriptiontype",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "productname", __typename: "ColumnCardinalityInfo" },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            { columnName: "finalamount", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/5787a758-c60c-4037-a222-f2ebf82d5824",
        name: "Guru - Template - Total Cost - Daily",
        description: null,
        createdBy: "Guru Raj Vaishnav",
        query: {
          dataset: "CX_ALICLOUD_SUPERARTIFACT_TEST_2",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-10-11T10:59:04Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "OutstandingAmount", __typename: "DataSourceColumnInfo" },
            { name: "PaymentAmount", __typename: "DataSourceColumnInfo" },
            { name: "SubscriptionType", __typename: "DataSourceColumnInfo" },
            { name: "ProductName", __typename: "DataSourceColumnInfo" },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            { name: "FinalAmount", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "outstandingamount",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "paymentamount",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "subscriptiontype",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "productname", __typename: "ColumnCardinalityInfo" },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            { columnName: "finalamount", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/6dcdaad5-2a7b-4098-88a2-82d2429064c6",
        name: "GCE Compute Usage (v2)",
        description: null,
        createdBy: "Sandeep Pathak",
        query: {
          dataset: "CX_2017_GCE_USAGE_REPORT",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-10-08T06:58:19Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "Machine_Series", __typename: "DataSourceColumnInfo" },
            { name: "Machine_Type", __typename: "DataSourceColumnInfo" },
            { name: "Project_Id", __typename: "DataSourceColumnInfo" },
            { name: "Calculated_Cores", __typename: "DataSourceColumnInfo" },
            { name: "Billing_Account_Id", __typename: "DataSourceColumnInfo" },
            {
              name: "Calculated_RAM_In_GB",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Day", __typename: "DataSourceColumnInfo" },
            { name: "Region", __typename: "DataSourceColumnInfo" },
            { name: "Machine_Family", __typename: "DataSourceColumnInfo" },
            { name: "Coverage_Type", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "machine_series",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "machine_type", __typename: "ColumnCardinalityInfo" },
            { columnName: "project_id", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "calculated_cores",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "billing_account_id",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "calculated_ram_in_gb",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
            { columnName: "region", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "machine_family",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "coverage_type",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/69820480-0e96-4aa5-a1a4-8c96f4ab5765",
        name: "Testtsss",
        description: null,
        createdBy: "Ranjeet Gautam",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-10-07T14:23:45Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "LineItem_ProductCode",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_LineItemType",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_NetUnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_BlendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_CurrencyCode",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(lineItem_NetUnblendedRate)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_AvailabilityZone",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "lineitem_productcode",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_lineitemtype",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_netunblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_blendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_currencycode",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(lineitem_netunblendedrate)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_availabilityzone",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/9879b265-24b0-49a2-9abc-4c90d98eee04",
        name: "Copy of - Guru - Template - Total Cost - RI",
        description: null,
        createdBy: "Ashutosh Dwivedi",
        query: {
          dataset: "CX_ALICLOUD_SUPERARTIFACT_TEST_2",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-10-06T02:24:17Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "OutstandingAmount", __typename: "DataSourceColumnInfo" },
            { name: "InstanceConfig", __typename: "DataSourceColumnInfo" },
            { name: "PaymentAmount", __typename: "DataSourceColumnInfo" },
            { name: "Item", __typename: "DataSourceColumnInfo" },
            {
              name: "AmortizedAmountForRI",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            { name: "ServiceDuration", __typename: "DataSourceColumnInfo" },
            { name: "InstanceName", __typename: "DataSourceColumnInfo" },
            { name: "InstanceID", __typename: "DataSourceColumnInfo" },
            { name: "ProductType", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "outstandingamount",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "instanceconfig",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "paymentamount",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "item", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "amortizedamountforri",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "serviceduration",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "instancename", __typename: "ColumnCardinalityInfo" },
            { columnName: "instanceid", __typename: "ColumnCardinalityInfo" },
            { columnName: "producttype", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/fe0bb822-bfea-4b39-8324-a625a63a0205",
        name: "Guru - Template - Total Cost - RI",
        description: null,
        createdBy: "Guru Raj Vaishnav",
        query: {
          dataset: "CX_ALICLOUD_SUPERARTIFACT_TEST_2",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-10-06T02:00:30Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "OutstandingAmount", __typename: "DataSourceColumnInfo" },
            { name: "InstanceConfig", __typename: "DataSourceColumnInfo" },
            { name: "PaymentAmount", __typename: "DataSourceColumnInfo" },
            { name: "Item", __typename: "DataSourceColumnInfo" },
            {
              name: "AmortizedAmountForRI",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            { name: "ServiceDuration", __typename: "DataSourceColumnInfo" },
            { name: "InstanceName", __typename: "DataSourceColumnInfo" },
            { name: "InstanceID", __typename: "DataSourceColumnInfo" },
            { name: "ProductType", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "outstandingamount",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "instanceconfig",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "paymentamount",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "item", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "amortizedamountforri",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "serviceduration",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "instancename", __typename: "ColumnCardinalityInfo" },
            { columnName: "instanceid", __typename: "ColumnCardinalityInfo" },
            { columnName: "producttype", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/ea416d3e-3857-4527-8a99-34a987bad048",
        name: "sadasdsadasd",
        description: "asdasdasdsd",
        createdBy: "Ranjeet Gautam",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-10-05T16:19:38Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "LineItem_ProductCode",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_LineItemType",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_NetUnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_BlendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_CurrencyCode",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(lineItem_BlendedRate)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_AvailabilityZone",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "lineitem_productcode",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_lineitemtype",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_netunblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_blendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_currencycode",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(lineitem_blendedrate)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_availabilityzone",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/afd1ada0-d287-4218-98ab-918ae8fa329b",
        name: "Test dataset",
        description: "asdasd",
        createdBy: "Ranjeet Gautam",
        query: {
          dataset: "CX_1_GCE_USAGE_REPORT",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-10-04T19:25:42Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "SUM(Consumption)", __typename: "DataSourceColumnInfo" },
            { name: "Month", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(consumption)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/571dd0cf-0cde-47d7-add0-e4a1af1e3f0a",
        name: "Guru - Template - AmortizedCost - Savings Plan",
        description: null,
        createdBy: "Guru Raj Vaishnav",
        query: {
          dataset: "CX_ALICLOUD_SUPERARTIFACT_TEST_2",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-10-04T09:19:37Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "OutstandingAmount", __typename: "DataSourceColumnInfo" },
            {
              name: "AmortizedAmountForSavingsPlan",
              __typename: "DataSourceColumnInfo",
            },
            { name: "PaymentAmount", __typename: "DataSourceColumnInfo" },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            { name: "ServiceDuration", __typename: "DataSourceColumnInfo" },
            { name: "ProductType", __typename: "DataSourceColumnInfo" },
            { name: "ProductDetail", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "outstandingamount",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "amortizedamountforsavingsplan",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "paymentamount",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "serviceduration",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "producttype", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "productdetail",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/9a8ce776-8552-4eb8-b4f5-3d561f38a616",
        name: "Guru - Template - AmortizedCost - Subscription",
        description: null,
        createdBy: "Guru Raj Vaishnav",
        query: {
          dataset: "CX_ALICLOUD_SUPERARTIFACT_TEST_2",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-10-04T09:17:24Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "OutstandingAmount", __typename: "DataSourceColumnInfo" },
            {
              name: "AmortizedAmountForSavingsPlan",
              __typename: "DataSourceColumnInfo",
            },
            { name: "PaymentAmount", __typename: "DataSourceColumnInfo" },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            { name: "ServiceDuration", __typename: "DataSourceColumnInfo" },
            { name: "ProductType", __typename: "DataSourceColumnInfo" },
            { name: "ProductDetail", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "outstandingamount",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "amortizedamountforsavingsplan",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "paymentamount",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "serviceduration",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "producttype", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "productdetail",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/464d7ce9-7b2e-4537-8109-5a1f8156b2da",
        name: "TestReport_Map_Measures_daily_legacy_map_select",
        description:
          "Testing Map Measures in Daily Granularity by Selecting Map Columns in Legacy fashion",
        createdBy: "Aneesh Neelam",
        query: {
          dataset: "CX_MTD_DATASET_TEST_MAP_MEASURES",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-10-04T07:06:30Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(gcp_Credits_#_discount)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(gcp_Credits_#_consumedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(CreditsMap_UpfrontCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(CreditsMap_Discount)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "SUM(Cost)", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(CreditsMap_ConsumedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "BillingAccountId", __typename: "DataSourceColumnInfo" },
            { name: "Day", __typename: "DataSourceColumnInfo" },
            { name: "ProjectId", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(gcp_Credits_#_upfrontCost)",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(gcp_credits_#_discount)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(gcp_credits_#_consumedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(creditsmap_upfrontcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(creditsmap_discount)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "sum(cost)", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(creditsmap_consumedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "billingaccountid",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
            { columnName: "projectid", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(gcp_credits_#_upfrontcost)",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/4dbd9b74-82cb-4ee7-885a-af2efda1a54a",
        name: "TestReport_Map_Measures_monthly",
        description: "Testing Map Measures in Monthly Granularity",
        createdBy: "Aneesh Neelam",
        query: {
          dataset: "CX_MTD_DATASET_TEST_MAP_MEASURES",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-10-04T06:58:42Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(gcp_Credits_#_discount)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(gcp_Credits_#_consumedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(CreditsMap_UpfrontCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(CreditsMap_Discount)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "SUM(Cost)", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(CreditsMap_ConsumedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "BillingAccountId", __typename: "DataSourceColumnInfo" },
            { name: "ProjectId", __typename: "DataSourceColumnInfo" },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(gcp_Credits_#_upfrontCost)",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(gcp_credits_#_discount)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(gcp_credits_#_consumedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(creditsmap_upfrontcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(creditsmap_discount)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "sum(cost)", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(creditsmap_consumedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "billingaccountid",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "projectid", __typename: "ColumnCardinalityInfo" },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(gcp_credits_#_upfrontcost)",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/3a967b13-636b-46ce-823e-29a8f0597de7",
        name: "TestReport_Map_Measures_daily",
        description: "Testing Map Measures in Daily Granularity",
        createdBy: "Aneesh Neelam",
        query: {
          dataset: "CX_MTD_DATASET_TEST_MAP_MEASURES",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-10-04T06:56:39Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "SUM(gcp_Credits_#_discount)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(gcp_Credits_#_consumedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(CreditsMap_UpfrontCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(CreditsMap_Discount)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "SUM(Cost)", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(CreditsMap_ConsumedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "BillingAccountId", __typename: "DataSourceColumnInfo" },
            { name: "Day", __typename: "DataSourceColumnInfo" },
            { name: "ProjectId", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(gcp_Credits_#_upfrontCost)",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(gcp_credits_#_discount)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(gcp_credits_#_consumedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(creditsmap_upfrontcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(creditsmap_discount)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "sum(cost)", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(creditsmap_consumedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "billingaccountid",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
            { columnName: "projectid", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(gcp_credits_#_upfrontcost)",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/29455f6a-8a41-42ca-b987-6b8fc528249c",
        name: "sdfsdf",
        description: "sdfdsf",
        createdBy: "Ranjeet Gautam",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-09-30T06:50:20Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "Day", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(edp_NetAmortizedUpfrontCommitmentForBillingPeriod)",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
            {
              columnName:
                "sum(edp_netamortizedupfrontcommitmentforbillingperiod)",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/71b9cd73-6f18-456d-9119-35bb29eb7cf8",
        name: "TestReport-CustomDataset",
        description: "Testing FlexReport Query for custom Dataset",
        createdBy: "Aneesh Neelam",
        query: { dataset: "CX_IPL", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-09-29T17:15:46Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "venue", __typename: "DataSourceColumnInfo" },
            { name: "toss_decision", __typename: "DataSourceColumnInfo" },
            { name: "date", __typename: "DataSourceColumnInfo" },
            { name: "method", __typename: "DataSourceColumnInfo" },
            { name: "eliminator", __typename: "DataSourceColumnInfo" },
            { name: "hometeam", __typename: "DataSourceColumnInfo" },
            { name: "neutral_venue", __typename: "DataSourceColumnInfo" },
            { name: "result", __typename: "DataSourceColumnInfo" },
            { name: "player_of_match", __typename: "DataSourceColumnInfo" },
            { name: "winner", __typename: "DataSourceColumnInfo" },
            { name: "awayteam", __typename: "DataSourceColumnInfo" },
            { name: "umpire2", __typename: "DataSourceColumnInfo" },
            { name: "umpire1", __typename: "DataSourceColumnInfo" },
            { name: "sum(result_margin)", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            { columnName: "venue", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "toss_decision",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "date", __typename: "ColumnCardinalityInfo" },
            { columnName: "method", __typename: "ColumnCardinalityInfo" },
            { columnName: "eliminator", __typename: "ColumnCardinalityInfo" },
            { columnName: "hometeam", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "neutral_venue",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "result", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "player_of_match",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "winner", __typename: "ColumnCardinalityInfo" },
            { columnName: "awayteam", __typename: "ColumnCardinalityInfo" },
            { columnName: "umpire2", __typename: "ColumnCardinalityInfo" },
            { columnName: "umpire1", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(result_margin)",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/d4b2270b-f54d-4576-8c04-dc5d4d3455a7",
        name: "Guru Alicloud Superartifact Ingestion Test",
        description:
          "Ingested Superartifact that was generated using stealthgen pipeline",
        createdBy: "Guru Raj Vaishnav",
        query: {
          dataset: "CX_ALICLOUD_SUPERARTIFACT_TEST",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-09-29T15:26:23Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "BillingID", __typename: "DataSourceColumnInfo" },
            { name: "BillingItem", __typename: "DataSourceColumnInfo" },
            { name: "SUM(PaymentAmount)", __typename: "DataSourceColumnInfo" },
            { name: "BillingCycle", __typename: "DataSourceColumnInfo" },
            { name: "SUM(PretaxAmount)", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(DeductedByCashCoupons)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(PretaxGrossAmount)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "SUM(ItemDiscount)", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(InvoiceDiscount)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Day", __typename: "DataSourceColumnInfo" },
            { name: "BillingType", __typename: "DataSourceColumnInfo" },
            { name: "InstanceTags", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(OutstandingAmount)",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            { columnName: "billingid", __typename: "ColumnCardinalityInfo" },
            { columnName: "billingitem", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(paymentamount)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "billingcycle", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(pretaxamount)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(deductedbycashcoupons)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(pretaxgrossamount)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(itemdiscount)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(invoicediscount)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
            { columnName: "billingtype", __typename: "ColumnCardinalityInfo" },
            { columnName: "instancetags", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(outstandingamount)",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/137bb204-cf87-4518-809a-1e95cb376351",
        name: "Sandeep_Test_Usage_Report_Monthly",
        description:
          "This report is used to analyze monthly consumption of cores and RAM by compute engines.",
        createdBy: "Sandeep Pathak",
        query: {
          dataset: "CX_1_GCE_USAGE_REPORT",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-09-29T15:06:51Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "Machine_Series", __typename: "DataSourceColumnInfo" },
            { name: "Machine_Type", __typename: "DataSourceColumnInfo" },
            { name: "Project_Id", __typename: "DataSourceColumnInfo" },
            { name: "Calculated_Cores", __typename: "DataSourceColumnInfo" },
            { name: "Billing_Account_Id", __typename: "DataSourceColumnInfo" },
            {
              name: "Calculated_RAM_In_GB",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            { name: "Region", __typename: "DataSourceColumnInfo" },
            { name: "Machine_Family", __typename: "DataSourceColumnInfo" },
            { name: "Coverage_Type", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "machine_series",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "machine_type", __typename: "ColumnCardinalityInfo" },
            { columnName: "project_id", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "calculated_cores",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "billing_account_id",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "calculated_ram_in_gb",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            { columnName: "region", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "machine_family",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "coverage_type",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/e6674d40-69b2-4302-b6e3-019575051be2",
        name: "test-report-month",
        description: null,
        createdBy: "Ashutosh Dwivedi",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-09-29T06:04:43Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "TimeInterval_Month", __typename: "DataSourceColumnInfo" },
            {
              name: "Product_instanceFamily",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_NetUnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_CurrencyCode",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Day", __typename: "DataSourceColumnInfo" },
            { name: "Product_category", __typename: "DataSourceColumnInfo" },
            {
              name: "Product_productFamily",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "timeinterval_month",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "product_instancefamily",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_netunblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_currencycode",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "product_category",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "product_productfamily",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/a65242b1-b8bd-4f90-8302-3c2c2d4c94d3",
        name: "Copy of - Test casing1",
        description: null,
        createdBy: "Ashutosh Dwivedi",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-09-29T06:02:29Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "LineItem_Operation", __typename: "DataSourceColumnInfo" },
            {
              name: "LineItem_ProductCode",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_LineItemType",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_NetUnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_BlendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            {
              name: "LineItem_LineItemDescription",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_BlendedRate)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "LineItem_ResourceId", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(lineItem_NetUnblendedRate)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_AvailabilityZone",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "lineitem_operation",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_productcode",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_lineitemtype",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_netunblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_blendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "lineitem_lineitemdescription",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_blendedrate)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_resourceid",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_netunblendedrate)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_availabilityzone",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/fd636155-d789-40f5-bfc0-59be7785991f",
        name: "Copy of - Test casing",
        description: null,
        createdBy: "Ranjeet Gautam",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-09-29T05:50:06Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "LineItem_LineItemType",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_NetUnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_BlendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            {
              name: "LineItem_LineItemDescription",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_BlendedRate)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_AvailabilityZone",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "lineitem_lineitemtype",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_netunblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_blendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "lineitem_lineitemdescription",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_blendedrate)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_availabilityzone",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/d7c3c81f-9c43-4e89-9df6-6b2749d50c33",
        name: "Test casing",
        description: null,
        createdBy: "Ranjeet Gautam",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-09-29T05:47:44Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "LineItem_Operation", __typename: "DataSourceColumnInfo" },
            {
              name: "LineItem_ProductCode",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_LineItemType",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_NetUnblendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_BlendedCost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            {
              name: "LineItem_LineItemDescription",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "SUM(lineItem_BlendedRate)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "LineItem_ResourceId", __typename: "DataSourceColumnInfo" },
            {
              name: "SUM(lineItem_NetUnblendedRate)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "LineItem_AvailabilityZone",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "lineitem_operation",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_productcode",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_lineitemtype",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_netunblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_blendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "lineitem_lineitemdescription",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_blendedrate)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_resourceid",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_netunblendedrate)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_availabilityzone",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/c55418dc-1d0e-4866-8ae5-7eca02c4c51f",
        name: "Aggregate MAP_VALUES with UNNEST CROSS JOIN",
        description:
          "Example to aggregate all Map Values in an SQL Map Column using MAP_VALUES, UNNEST and CROSS JOIN",
        createdBy: "Aneesh Neelam",
        query: {
          dataset: "CX_5575_GCP_BILLING_EXPORT_USAGE_TEST",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-09-29T05:24:11Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "UsageEndTime", __typename: "DataSourceColumnInfo" },
            { name: "UsageStartTime", __typename: "DataSourceColumnInfo" },
            { name: "TotalCredit", __typename: "DataSourceColumnInfo" },
            { name: "SUM(Total_Cost)", __typename: "DataSourceColumnInfo" },
            { name: "SUM(Cost)", __typename: "DataSourceColumnInfo" },
            { name: "BillingAccountId", __typename: "DataSourceColumnInfo" },
            { name: "ProjectId", __typename: "DataSourceColumnInfo" },
            { name: "Units", __typename: "DataSourceColumnInfo" },
            { name: "Month", __typename: "DataSourceColumnInfo" },
            { name: "Region", __typename: "DataSourceColumnInfo" },
            { name: "MachineType", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            { columnName: "usageendtime", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "usagestarttime",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "totalcredit", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(total_cost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "sum(cost)", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "billingaccountid",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "projectid", __typename: "ColumnCardinalityInfo" },
            { columnName: "units", __typename: "ColumnCardinalityInfo" },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            { columnName: "region", __typename: "ColumnCardinalityInfo" },
            { columnName: "machinetype", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/df2380ff-c9c7-4d44-8709-6caa688e95a9",
        name: "Copy of - Sandeep_Test_Usage_Report_RAM",
        description:
          "This report provides RAM consumed (in GB) by GCP compute engines.",
        createdBy: "Ashutosh Dwivedi",
        query: {
          dataset: "CX_1_GCE_USAGE_REPORT",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-09-29T05:22:17Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "Machine_Series", __typename: "DataSourceColumnInfo" },
            { name: "Machine_Type", __typename: "DataSourceColumnInfo" },
            { name: "Project_Id", __typename: "DataSourceColumnInfo" },
            { name: "Calculated_Cores", __typename: "DataSourceColumnInfo" },
            { name: "Billing_Account_Id", __typename: "DataSourceColumnInfo" },
            { name: "Day", __typename: "DataSourceColumnInfo" },
            { name: "Region", __typename: "DataSourceColumnInfo" },
            { name: "Machine_Family", __typename: "DataSourceColumnInfo" },
            { name: "Coverage_Type", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "machine_series",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "machine_type", __typename: "ColumnCardinalityInfo" },
            { columnName: "project_id", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "calculated_cores",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "billing_account_id",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
            { columnName: "region", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "machine_family",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "coverage_type",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/66acea1d-69d6-47ea-ae6f-668211482a0d",
        name: "cost anomaly report",
        description: null,
        createdBy: "Vani Chugh",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-09-28T14:15:40Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "lineitem_productcode",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "lineitem_netunblendedcost",
              __typename: "DataSourceColumnInfo",
            },
            { name: "bill_payeraccountid", __typename: "DataSourceColumnInfo" },
            { name: "day", __typename: "DataSourceColumnInfo" },
            {
              name: "lineitem_usageaccountid",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "lineitem_productcode",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_netunblendedcost",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "bill_payeraccountid",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "lineitem_usageaccountid",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/62a672eb-04c1-48fb-b59a-6ff4eb2e14da",
        name: "Guru_Alicloud_test_report_1",
        description: "Alicloud report - directly ingested from processor",
        createdBy: "Guru Raj Vaishnav",
        query: {
          dataset: "CX_ALICLOUD_INSTANCE_BILL_TEST_2",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-09-28T14:14:52Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "sum(usage)", __typename: "DataSourceColumnInfo" },
            { name: "sum(usageunit)", __typename: "DataSourceColumnInfo" },
            { name: "item", __typename: "DataSourceColumnInfo" },
            { name: "sum(paymentamount)", __typename: "DataSourceColumnInfo" },
            { name: "month", __typename: "DataSourceColumnInfo" },
            { name: "sum(pretaxamount)", __typename: "DataSourceColumnInfo" },
            { name: "instanceid", __typename: "DataSourceColumnInfo" },
            {
              name: "sum(deductedbycashcoupons)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "sum(pretaxgrossamount)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "sum(invoicediscount)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "sum(listprice)", __typename: "DataSourceColumnInfo" },
            { name: "currency", __typename: "DataSourceColumnInfo" },
            { name: "accountname", __typename: "DataSourceColumnInfo" },
            {
              name: "sum(deductedbyprepaidcard)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "sum(outstandingamount)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "accountid", __typename: "DataSourceColumnInfo" },
            { name: "sum(listpriceunit)", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            { columnName: "sum(usage)", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(usageunit)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "item", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(paymentamount)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(pretaxamount)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "instanceid", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(deductedbycashcoupons)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(pretaxgrossamount)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(invoicediscount)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(listprice)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "currency", __typename: "ColumnCardinalityInfo" },
            { columnName: "accountname", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(deductedbyprepaidcard)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(outstandingamount)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "accountid", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(listpriceunit)",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/00254645-a944-4d28-9f08-a6e27913f2bb",
        name: "Report with Chart: Aggregate Map Column Values: CROSS JOIN with UNNEST and MAP_VALUES",
        description:
          "Simple Example to aggregate SQL Map Column Values with the help of CROSS JOIN, and MAP_VALUES and UNNEST Functions",
        createdBy: "Aneesh Neelam",
        query: {
          dataset: "CX_5575_GCP_BILLING_EXPORT_USAGE_TEST",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-09-28T13:59:03Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "total_credit", __typename: "DataSourceColumnInfo" },
            { name: "cost", __typename: "DataSourceColumnInfo" },
            { name: "project_id", __typename: "DataSourceColumnInfo" },
            { name: "billing_account_id", __typename: "DataSourceColumnInfo" },
            { name: "month", __typename: "DataSourceColumnInfo" },
            { name: "consumption", __typename: "DataSourceColumnInfo" },
            { name: "total_cost", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            { columnName: "total_credit", __typename: "ColumnCardinalityInfo" },
            { columnName: "cost", __typename: "ColumnCardinalityInfo" },
            { columnName: "project_id", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "billing_account_id",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            { columnName: "consumption", __typename: "ColumnCardinalityInfo" },
            { columnName: "total_cost", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/4c626441-8529-417b-8957-145e41f364db",
        name: "Report Only: Aggregate Map Column Values: CROSS JOIN with UNNEST and MAP_VALUES",
        description:
          "Simple Example to aggregate SQL Map Column Values with the help of CROSS JOIN, and MAP_VALUES and UNNEST Functions",
        createdBy: "Aneesh Neelam",
        query: {
          dataset: "CX_5575_GCP_BILLING_EXPORT_USAGE_TEST",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-09-28T13:58:28Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "total_credit", __typename: "DataSourceColumnInfo" },
            { name: "cost", __typename: "DataSourceColumnInfo" },
            { name: "project_id", __typename: "DataSourceColumnInfo" },
            { name: "billing_account_id", __typename: "DataSourceColumnInfo" },
            { name: "month", __typename: "DataSourceColumnInfo" },
            { name: "consumption", __typename: "DataSourceColumnInfo" },
            { name: "total_cost", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            { columnName: "total_credit", __typename: "ColumnCardinalityInfo" },
            { columnName: "cost", __typename: "ColumnCardinalityInfo" },
            { columnName: "project_id", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "billing_account_id",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            { columnName: "consumption", __typename: "ColumnCardinalityInfo" },
            { columnName: "total_cost", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/639ee349-7482-4754-8e00-ab0640b3a7e7",
        name: "Sandeep_Test_Usage_Report_Daily",
        description:
          "This report is used to analyze daily core and RAM consumption for compute engines.",
        createdBy: "Sandeep Pathak",
        query: {
          dataset: "CX_1_GCE_USAGE_REPORT",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-09-28T13:16:41Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "machine_series", __typename: "DataSourceColumnInfo" },
            { name: "machine_type", __typename: "DataSourceColumnInfo" },
            { name: "project_id", __typename: "DataSourceColumnInfo" },
            { name: "calculated_cores", __typename: "DataSourceColumnInfo" },
            { name: "billing_account_id", __typename: "DataSourceColumnInfo" },
            {
              name: "calculated_ram_in_gb",
              __typename: "DataSourceColumnInfo",
            },
            { name: "day", __typename: "DataSourceColumnInfo" },
            { name: "region", __typename: "DataSourceColumnInfo" },
            { name: "machine_family", __typename: "DataSourceColumnInfo" },
            { name: "coverage_type", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "machine_series",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "machine_type", __typename: "ColumnCardinalityInfo" },
            { columnName: "project_id", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "calculated_cores",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "billing_account_id",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "calculated_ram_in_gb",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
            { columnName: "region", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "machine_family",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "coverage_type",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/fc25405a-90d1-4144-b1b3-b641afa3cec1",
        name: "Sandeep_Test_Usage_Report_RAM",
        description:
          "This report provides RAM consumed (in GB) by GCP compute engines.",
        createdBy: "Sandeep Pathak",
        query: {
          dataset: "CX_1_GCE_USAGE_REPORT",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-09-28T07:09:08Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "machine_series", __typename: "DataSourceColumnInfo" },
            { name: "machine_type", __typename: "DataSourceColumnInfo" },
            { name: "project_id", __typename: "DataSourceColumnInfo" },
            { name: "billing_account_id", __typename: "DataSourceColumnInfo" },
            {
              name: "calculated_ram_in_gb",
              __typename: "DataSourceColumnInfo",
            },
            { name: "day", __typename: "DataSourceColumnInfo" },
            { name: "region", __typename: "DataSourceColumnInfo" },
            { name: "machine_family", __typename: "DataSourceColumnInfo" },
            { name: "coverage_type", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "machine_series",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "machine_type", __typename: "ColumnCardinalityInfo" },
            { columnName: "project_id", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "billing_account_id",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "calculated_ram_in_gb",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
            { columnName: "region", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "machine_family",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "coverage_type",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/9232e03c-6716-4823-b2cd-b0be8e4415b5",
        name: "Sandeep_Test_Usage_Report_Cores",
        description:
          "This report provides number of cores consumed by GCP compute engines.",
        createdBy: "Sandeep Pathak",
        query: {
          dataset: "CX_1_GCE_USAGE_REPORT",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-09-28T01:38:09Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "machine_series", __typename: "DataSourceColumnInfo" },
            { name: "machine_type", __typename: "DataSourceColumnInfo" },
            { name: "project_id", __typename: "DataSourceColumnInfo" },
            { name: "calculated_cores", __typename: "DataSourceColumnInfo" },
            { name: "billing_account_id", __typename: "DataSourceColumnInfo" },
            { name: "day", __typename: "DataSourceColumnInfo" },
            { name: "region", __typename: "DataSourceColumnInfo" },
            { name: "machine_family", __typename: "DataSourceColumnInfo" },
            { name: "coverage_type", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "machine_series",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "machine_type", __typename: "ColumnCardinalityInfo" },
            { columnName: "project_id", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "calculated_cores",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "billing_account_id",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
            { columnName: "region", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "machine_family",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "coverage_type",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/3fbbe175-63fd-408a-889f-8371b8443a80",
        name: "Custom Report Dataset chart without timerange",
        description: null,
        createdBy: "Satyanarayana Swami Jonnalagadda",
        query: { dataset: "CX_IPL", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-09-27T08:08:34Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "venue", __typename: "DataSourceColumnInfo" },
            { name: "result", __typename: "DataSourceColumnInfo" },
            { name: "player_of_match", __typename: "DataSourceColumnInfo" },
            { name: "winner", __typename: "DataSourceColumnInfo" },
            { name: "method", __typename: "DataSourceColumnInfo" },
            { name: "awayteam", __typename: "DataSourceColumnInfo" },
            { name: "hometeam", __typename: "DataSourceColumnInfo" },
            { name: "umpire2", __typename: "DataSourceColumnInfo" },
            { name: "umpire1", __typename: "DataSourceColumnInfo" },
            { name: "sum(result_margin)", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            { columnName: "venue", __typename: "ColumnCardinalityInfo" },
            { columnName: "result", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "player_of_match",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "winner", __typename: "ColumnCardinalityInfo" },
            { columnName: "method", __typename: "ColumnCardinalityInfo" },
            { columnName: "awayteam", __typename: "ColumnCardinalityInfo" },
            { columnName: "hometeam", __typename: "ColumnCardinalityInfo" },
            { columnName: "umpire2", __typename: "ColumnCardinalityInfo" },
            { columnName: "umpire1", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(result_margin)",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/651ea72b-495a-4386-826b-1b8c44995369",
        name: "Tests this",
        description: null,
        createdBy: "Ranjeet Gautam",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-09-24T14:54:32Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "lineitem_operation", __typename: "DataSourceColumnInfo" },
            {
              name: "lineitem_lineitemtype",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "sum(lineitem_netunblendedcost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "sum(lineitem_blendedcost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "lineitem_currencycode",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "lineitem_normalizationfactor",
              __typename: "DataSourceColumnInfo",
            },
            { name: "month", __typename: "DataSourceColumnInfo" },
            {
              name: "lineitem_lineitemdescription",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "sum(lineitem_blendedrate)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "sum(lineitem_netunblendedrate)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "lineitem_availabilityzone",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "lineitem_operation",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_lineitemtype",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_netunblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_blendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_currencycode",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_normalizationfactor",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "lineitem_lineitemdescription",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_blendedrate)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_netunblendedrate)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_availabilityzone",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/3c897ecd-9a45-4d5f-b02f-39ed9a43f2be",
        name: "Copy of - Aged Snapshots",
        description:
          "Provides the list of AWS storage snapshots with no usage recorded in the current and past month and can be reviewed for optimization opportunities",
        createdBy: "Satyanarayana Swami Jonnalagadda",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-09-22T02:07:08Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "sum(lineitem_usageamount)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "product_productname", __typename: "DataSourceColumnInfo" },
            { name: "month", __typename: "DataSourceColumnInfo" },
            { name: "lineitem_resourceid", __typename: "DataSourceColumnInfo" },
            {
              name: "product_productfamily",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_usageamount)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "product_productname",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "lineitem_resourceid",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "product_productfamily",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/caa2c336-db64-4127-879a-0659773d70ec",
        name: "Copy of - dfdfvdfvdfv",
        description: null,
        createdBy: "Ashutosh Dwivedi",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-09-21T10:48:44Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "sum(lineitem_unblendedcost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "day", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_unblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/68bd2454-284a-4dfe-93c6-ca36a78d4bad",
        name: "dfggdfgfdg",
        description: "vffdgdf",
        createdBy: "Ranjeet Gautam",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-09-08T09:40:11Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "sum(reservation_amortizedupfrontfeeforbillingperiod)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "month", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName:
                "sum(reservation_amortizedupfrontfeeforbillingperiod)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/78018b19-8cc5-4f48-bfb3-5130554a8669",
        name: "test-my3-1",
        description: null,
        createdBy: "Maithri Shetty",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-09-02T09:18:56Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "sum(lineitem_unblendedcost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "month", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_unblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/f3442b3e-912b-45e9-b4ea-0fc95626e352",
        name: "Daily Marketplace No Agg Pie Chart",
        description: null,
        createdBy: "Satyanarayana Swami Jonnalagadda",
        query: {
          dataset: "CX_AZURE_MARKETPLACE",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-08-30T19:02:55Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "consumedquantity", __typename: "DataSourceColumnInfo" },
            { name: "timeinterval_month", __typename: "DataSourceColumnInfo" },
            { name: "resourcegroup", __typename: "DataSourceColumnInfo" },
            { name: "offername", __typename: "DataSourceColumnInfo" },
            { name: "service", __typename: "DataSourceColumnInfo" },
            { name: "publishername", __typename: "DataSourceColumnInfo" },
            { name: "day", __typename: "DataSourceColumnInfo" },
            {
              name: "azure_additionalinfo_map['vmname']",
              __typename: "DataSourceColumnInfo",
            },
            { name: "consumedservice", __typename: "DataSourceColumnInfo" },
            { name: "planname", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "consumedquantity",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "timeinterval_month",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "resourcegroup",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "offername", __typename: "ColumnCardinalityInfo" },
            { columnName: "service", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "publishername",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "day", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "azure_additionalinfo_map['vmname']",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "consumedservice",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "planname", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/37cc98aa-30d4-4159-8bcb-58cd8bfa2806",
        name: "Custom Dataset MTD Azure MarketPlace",
        description: null,
        createdBy: "Satyanarayana Swami Jonnalagadda",
        query: {
          dataset: "CX_AZURE_MARKETPLACE",
          __typename: "FlexReportQuery",
        },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-08-30T18:28:16Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "resourcegroup", __typename: "DataSourceColumnInfo" },
            { name: "sum(extendedcost)", __typename: "DataSourceColumnInfo" },
            {
              name: "sum(consumedquantity)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "subscriptionname", __typename: "DataSourceColumnInfo" },
            { name: "month", __typename: "DataSourceColumnInfo" },
            { name: "region", __typename: "DataSourceColumnInfo" },
            { name: "instanceid", __typename: "DataSourceColumnInfo" },
            { name: "sum(resourcerate)", __typename: "DataSourceColumnInfo" },
            { name: "subscriptionguid", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "resourcegroup",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(extendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(consumedquantity)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "subscriptionname",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            { columnName: "region", __typename: "ColumnCardinalityInfo" },
            { columnName: "instanceid", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(resourcerate)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "subscriptionguid",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/380348f9-2f1a-49af-97ab-bef3abd9a43f",
        name: "cvvffg",
        description: null,
        createdBy: "Ashutosh Dwivedi",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-08-25T07:55:23Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "sum(lineitem_unblendedcost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "month", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_unblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/0e377d36-cc97-40cc-bcb6-3a8962c3ab6f",
        name: "dfdvdfvdfvdf",
        description: null,
        createdBy: "Ashutosh Dwivedi",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-08-25T05:30:39Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "sum(lineitem_unblendedcost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "month", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_unblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/db8e3aa8-31d0-4128-98a2-b91aed75322b",
        name: "est111ss",
        description: null,
        createdBy: "Ashutosh Dwivedi",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-08-16T12:27:47Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            {
              name: "sum(lineitem_unblendedcost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "product_instancefamily",
              __typename: "DataSourceColumnInfo",
            },
            { name: "month", __typename: "DataSourceColumnInfo" },
            { name: "product_category", __typename: "DataSourceColumnInfo" },
          ],
          columnCardinalityInfo: [
            {
              columnName: "sum(lineitem_unblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "product_instancefamily",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "product_category",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/61efd6de-4e60-4c74-959a-fa0eb496a1a9",
        name: "dgryry56",
        description: null,
        createdBy: "Ashutosh Dwivedi",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-08-15T04:56:49Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [
            { name: "lineitem_operation", __typename: "DataSourceColumnInfo" },
            {
              name: "sum(lineitem_unblendedcost)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "lineitem_productcode",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "lineitem_lineitemtype",
              __typename: "DataSourceColumnInfo",
            },
            { name: "lineitem_usagetype", __typename: "DataSourceColumnInfo" },
            {
              name: "sum(lineitem_blendedcost)",
              __typename: "DataSourceColumnInfo",
            },
            { name: "month", __typename: "DataSourceColumnInfo" },
            {
              name: "sum(lineitem_blendedrate)",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "lineitem_availabilityzone",
              __typename: "DataSourceColumnInfo",
            },
            {
              name: "sum(lineitem_normalizedusageamount)",
              __typename: "DataSourceColumnInfo",
            },
          ],
          columnCardinalityInfo: [
            {
              columnName: "lineitem_operation",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_unblendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_productcode",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_lineitemtype",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_usagetype",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_blendedcost)",
              __typename: "ColumnCardinalityInfo",
            },
            { columnName: "month", __typename: "ColumnCardinalityInfo" },
            {
              columnName: "sum(lineitem_blendedrate)",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "lineitem_availabilityzone",
              __typename: "ColumnCardinalityInfo",
            },
            {
              columnName: "sum(lineitem_normalizedusageamount)",
              __typename: "ColumnCardinalityInfo",
            },
          ],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/366e4690-62c6-4e31-b450-d2ee83908dd0",
        name: "LineItem_Unblended Cost per Month",
        description: "Cost per Month",
        createdBy: "Aneesh Neelam",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-08-15T04:51:04Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [],
          columnCardinalityInfo: [],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/cadb71e4-ea1d-4059-9023-1e01174e576d",
        name: "FR Save and Run Report",
        description: null,
        createdBy: "Satyanarayana Swami Jonnalagadda",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-08-15T04:50:59Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [],
          columnCardinalityInfo: [],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/d5cc604f-a508-4e07-aad1-a13d572aa9bb",
        name: "Test chart",
        description: null,
        createdBy: "Ranjeet Gautam",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-08-15T04:50:48Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [],
          columnCardinalityInfo: [],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/ad1cc737-2938-47a9-855e-7a40e34564c3",
        name: "Testtt b",
        description: null,
        createdBy: "Ranjeet Gautam",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-08-15T04:50:22Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [],
          columnCardinalityInfo: [],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/f636e42f-975f-4ee5-8d4e-cd4bdd74280a",
        name: "test no chart",
        description: null,
        createdBy: "Ranjeet Gautam",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-08-15T04:50:04Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: {
          columnInfos: [],
          columnCardinalityInfo: [],
          __typename: "FlexReportMetadata",
        },
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/5de33688-ea29-4ec6-a061-f5754a48ed95",
        name: "srushti-test-metadata",
        description: null,
        createdBy: "Srushti Bhoyar",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-08-02T13:04:09Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: null,
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/7e406367-a05b-4b1e-b70e-bd981225186c",
        name: "test-my3",
        description: null,
        createdBy: "Maithri Shetty",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-07-13T06:16:09Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: null,
        __typename: "FlexReport",
      },
      {
        id: "crn:1:flexreports/9c690559-de34-4bff-8298-52b252adb912",
        name: "Copy of - Run",
        description: null,
        createdBy: "Satyanarayana Swami Jonnalagadda",
        query: { dataset: "AWS_CUR", __typename: "FlexReportQuery" },
        result: {
          status: "EXPIRED",
          reportUpdatedOn: "2021-07-02T11:53:03Z",
          contents: [],
          __typename: "FlexReportQueryResponse",
        },
        metadata: null,
        __typename: "FlexReport",
      },
    ],
  },
};


const newEle = data.data.flexReports.map((ele) => ele.result.reportUpdatedOn);

console.log(newEle);
