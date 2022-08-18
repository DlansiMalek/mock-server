import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('bff/api')
export class AppController {
  constructor(private appService: AppService) {}

  @Get('notification/all')
  getNotifications(@Query('page_index') page_index: number, @Query('page_size') page_size: number): any {
    return this.appService.getNotifications(page_index, page_size);
  }
@Get('word-cloud')
  getWordCloud() {
    return [
      {
        "name": "الاوكراني",
        "weight": 40
      },
      {
        "name": "مختلف",
        "weight": 50
      },
      {
        "name": "التظاهرات",
        "weight": 8
      },
      {
        "name": "في",
        "weight": 6
      },
      {
        "name": "المحلية",
        "weight": 17
      },
      {
        "name": "تألقها",
        "weight": 9
      },
      {
        "name": "الثقافة",
        "weight": 4
      },
      {
        "name": "للسينما",
        "weight": 28
      },
      {
        "name": "الوطني",
        "weight": 31
      },
      {
        "name": "المنصرم",
        "weight": 16
      },
      {
        "name": "فبعد",
        "weight": 7
      },
      {
        "name": "بأكادير",
        "weight": 5
      },
      {
        "name": "الدور",
        "weight": 11
      },
      {
        "name": "البحث",
        "weight": 16
      },
      {
        "name": "نهاية",
        "weight": 42
      },
      {
        "name": "بمدينة",
        "weight": 38
      },
      {
        "name": "الفترة",
        "weight": 43
      },
      {
        "name": "الاتفاقيات",
        "weight": 9
      },
      {
        "name": "اجراءات",
        "weight": 5
      },
      {
        "name": "قضائية",
        "weight": 22
      },
      {
        "name": "داخلة",
        "weight": 43
      },
      {
        "name": "الحصول",
        "weight": 11
      },
      {
        "name": "التحكيم",
        "weight": 38
      },
      {
        "name": "الشعبة",
        "weight": 21
      },
      {
        "name": "نطاقات",
        "weight": 37
      },
      {
        "name": "الحسابات",
        "weight": 28
      },
      {
        "name": "نظام",
        "weight": 34
      },
      {
        "name": "المفتوح",
        "weight": 27
      },
      {
        "name": "أكتوبر",
        "weight": 15
      },
      {
        "name": "المحتوى",
        "weight": 6
      },
      {
        "name": "التدريبية",
        "weight": 32
      },
      {
        "name": "كحل",
        "weight": 42
      },
      {
        "name": "المؤسسي",
        "weight": 25
      },
      {
        "name": "والتعاون",
        "weight": 16
      },
      {
        "name": "بين",
        "weight": 19
      },
      {
        "name": "المفردات",
        "weight": 29
      },
      {
        "name": "لأصعب",
        "weight": 36
      },
      {
        "name": "البيانات",
        "weight": 23
      },
      {
        "name": "يمكنني",
        "weight": 34
      },
      {
        "name": "التفكير",
        "weight": 9
      },
      {
        "name": "لإدارة",
        "weight": 7
      },
      {
        "name": "ستتم",
        "weight": 14
      },
      {
        "name": "الدولي",
        "weight": 13
      },
      {
        "name": "تصميم",
        "weight": 26
      },
      {
        "name": "Algobrain",
        "weight": 40
      },
      {
        "name": "Elyadata",
        "weight": 70
      }
    ]
  }

  @Get('lda/bar-chart')
  getBarChart() {
    return {
      "chart": {
        "type": "bar"
      },
      "title": {
        "text": "",
        "align": null
      },
      "tooltip": {
        "valueSuffix": ""
      },
      "plotOptions": {
        "bar": {
          "dataLabels": {
            "enabled": false
          },
          "borderRadius": "5px",
          "color": "#39A9DA",
          "borderColor": "#39A9DA",
          "dashSolid": ""
        }
      },
      "legend": {
        "layout": "vertical",
        "align": "right",
        "verticalAlign": "bottom",
        "x": -40,
        "y": 80,
        "floating": true,
        "borderWidth": 1,
        "shadow": true
      },
      "credits": null,
      "series": [
        {
          "name": "Occurrence",
          "data": [
            48,
            48,
            48,
            24,
            24,
            24,
            24,
            24,
            24,
            22
          ]
        }
      ],
      "colors": [
        "#77a1e5",
        "#145388"
      ],
      "xAxis": {
        "categories": [
          "order",
          "arm",
          "harvest",
          "forming",
          "daniel",
          "combat",
          "stand",
          "psychologist",
          "sunflower",
          "معني"
        ],
        "title": null
      },
      "yAxis": {
        "min": 0,
        "title": {
          "text": "",
          "align": "high"
        },
        "labels": {
          "overflow": "justify"
        }
      }
    }
  }

  @Get('lda/packed-bubble')
  getBubbleChart() {
    return {
    "chart": {
      "type": "packedbubble",
      "height": "100%"
    },
    "title": {
      "text": "Packed Babble Chart"
    },
    "tooltip": {
      "useHTML": true,
      "pointFormat": "<b><b>"
    },
    "plotOptions": {
      "packedbubble": {
        "minSize": "30%",
        "maxSize": "100%",
        "zMin": -100,
        "zMax": 10000,
        "layoutAlgorithm": {
          "splitSeries": false,
          "gravitationalConstant": 0.03
        },
        "dataLabels": {
          "enabled": true,
          "format": "{point.name}",
          "style": {
            "color": "black",
            "textOutline": "none",
            "fontWeight": "bold"
          }
        }
      }
    },
    "series": [
      {
        "name": "Others",
        "data": [
          {
            "name": "Others",
            "color": "#41b072",
            "value": 500,
            "id": "1"
          }
        ]
      },
      {
        "name": "حرب",
        "data": [
          {
            "name": "حرب",
            "color": '#979797',
            "value": 1000,
            "id": "1"
          }
        ]
      },
      {
        "name": "سياسة",
        "data": [
          {
            "name": "سياسة",
            "color": "#fdc533",
            "value": 800,
            "id": "1"
          }
        ]
      },
      {
        "name": "war",
        "data": [
          {
            "name": "war",
            "color": "#0496FF",
            "value": 200,
            "id": "1"
          }
        ]
      },
      {
        "name": "اقتصاد",
        "data": [
          {
            "name": "اقتصاد",
            "color": "#f4951b",
            "value": 1000,
            "id": "1"
          }
        ]
      }
    ]
  }
  }

  @Get('ner')
  getNer() {
    return {
      "series": [
          {
              "name": "LOCATION",
              "data": [
                  {
                      "name": "السوري",
                      "value": 99.79636
                  },
                  {
                      "name": "الربيع",
                      "value": 44.499596
                  },
                  {
                      "name": "غصن",
                      "value": 359.557022
                  },
                  {
                      "name": "الزيتون",
                      "value": 72.34434
                  },
                  {
                      "name": "سوريا",
                      "value": 99.78081
                  },
                  {
                      "name": "سوريا",
                      "value": 999.68121
                  },
                  {
                      "name": "نهر",
                      "value": 98.90931
                  },
                  {
                      "name": "الفرات",
                      "value": 99.845055
                  },
                  {
                      "name": "حلب",
                      "value": 979.35676
                  },
                  {
                      "name": "أبيض",
                      "value": 99.47642
                  },
                  {
                      "name": "العين",
                      "value": 96.86441
                  },
                  {
                      "name": "الف",
                      "value": 99.17761
                  },
                  {
                      "name": "رات",
                      "value": 98.31427
                  },
                  {
                      "name": "سوريا",
                      "value": 99.59665
                  },
                  {
                      "name": "السوري",
                      "value": 99.863976
                  },
                  {
                      "name": "المتوسط",
                      "value": 99.65125
                  },
                  {
                      "name": "الفرات",
                      "value": 99.45942
                  },
                  {
                      "name": "في",
                      "value": 94.308075
                  },
                  {
                      "name": "شرق",
                      "value": 96.47755
                  },
                  {
                      "name": "السوري",
                      "value": 98.83597
                  },
                  {
                      "name": "الدولي",
                      "value": 95.19851
                  },
                  {
                      "name": "السوري",
                      "value": 99.74615
                  },
                  {
                      "name": "السوري",
                      "value": 98.89154
                  },
                  {
                      "name": "سوريا",
                      "value": 99.668434
                  },
                  {
                      "name": "سوريا",
                      "value": 99.38623
                  },
                  {
                      "name": "سوريا",
                      "value": 99.74614
                  },
                  {
                      "name": "الفرات",
                      "value": 99.45942
                  },
                  {
                      "name": "في",
                      "value": 94.308075
                  },
                  {
                      "name": "شرق",
                      "value": 96.47755
                  },
                  {
                      "name": "السوري",
                      "value": 98.83597
                  },
                  {
                      "name": "الدولي",
                      "value": 95.19851
                  },
                  {
                      "name": "السوري",
                      "value": 99.74615
                  },
                  {
                      "name": "السوري",
                      "value": 98.89154
                  },
                  {
                      "name": "سوريا",
                      "value": 99.668434
                  },
                  {
                      "name": "سوريا",
                      "value": 99.38623
                  },
                  {
                      "name": "سوريا",
                      "value": 99.74614
                  }
              ]
          },
          {
            "name": "LOCATION",
            "data": [
                {
                    "name": "السوري",
                    "value": 99.79636
                },
                {
                    "name": "الربيع",
                    "value": 44.499596
                },
                {
                    "name": "غصن",
                    "value": 359.557022
                },
                {
                    "name": "الزيتون",
                    "value": 72.34434
                },
                {
                    "name": "سوريا",
                    "value": 99.78081
                },
                {
                    "name": "سوريا",
                    "value": 999.68121
                },
                {
                    "name": "نهر",
                    "value": 98.90931
                },
                {
                    "name": "الفرات",
                    "value": 99.845055
                },
                {
                    "name": "حلب",
                    "value": 979.35676
                },
                {
                    "name": "أبيض",
                    "value": 99.47642
                },
                {
                    "name": "العين",
                    "value": 96.86441
                },
                {
                    "name": "الف",
                    "value": 99.17761
                },
                {
                    "name": "رات",
                    "value": 98.31427
                },
                {
                    "name": "سوريا",
                    "value": 99.59665
                },
                {
                    "name": "السوري",
                    "value": 99.863976
                },
                {
                    "name": "المتوسط",
                    "value": 99.65125
                },
                {
                    "name": "الفرات",
                    "value": 99.45942
                },
                {
                    "name": "في",
                    "value": 94.308075
                },
                {
                    "name": "شرق",
                    "value": 96.47755
                },
                {
                    "name": "السوري",
                    "value": 98.83597
                },
                {
                    "name": "الدولي",
                    "value": 95.19851
                },
                {
                    "name": "السوري",
                    "value": 99.74615
                },
                {
                    "name": "السوري",
                    "value": 98.89154
                },
                {
                    "name": "سوريا",
                    "value": 99.668434
                },
                {
                    "name": "سوريا",
                    "value": 99.38623
                },
                {
                    "name": "سوريا",
                    "value": 99.74614
                },
                {
                    "name": "الفرات",
                    "value": 99.45942
                },
                {
                    "name": "في",
                    "value": 94.308075
                },
                {
                    "name": "شرق",
                    "value": 96.47755
                },
                {
                    "name": "السوري",
                    "value": 98.83597
                },
                {
                    "name": "الدولي",
                    "value": 95.19851
                },
                {
                    "name": "السوري",
                    "value": 99.74615
                },
                {
                    "name": "السوري",
                    "value": 98.89154
                },
                {
                    "name": "سوريا",
                    "value": 99.668434
                },
                {
                    "name": "سوريا",
                    "value": 99.38623
                },
                {
                    "name": "سوريا",
                    "value": 99.74614
                }
            ]
        },
          {
              "name": "ORGANIZATION",
              "data": [
                  {
                      "name": "المركز",
                      "value": 99.93741
                  },
                  {
                      "name": "مركز",
                      "value": 99.87666
                  },
                  {
                      "name": "تركيا",
                      "value": 999.659225
                  },
                  {
                      "name": "روسيا",
                      "value": 99.90754
                  },
                  {
                      "name": "طهران",
                      "value": 919.92762
                  },
                  {
                      "name": "الأمس",
                      "value": 66.78722
                  },
                  {
                      "name": "النظام",
                      "value": 99.9618
                  },
                  {
                      "name": "قوات",
                      "value": 96.712616
                  },
                  {
                      "name": "القوات",
                      "value": 99.96278
                  },
                  {
                      "name": "تركيا",
                      "value": 99.8376
                  },
                  {
                      "name": "تركيا",
                      "value": 99.622635
                  },
                  {
                      "name": "الخارجية",
                      "value": 569.90845
                  },
                  {
                      "name": "تركيا",
                      "value": 99.78013
                  },
                  {
                      "name": "تركيا",
                      "value": 99.90249
                  },
                  {
                      "name": "تنظيم",
                      "value": 99.81037
                  },
                  {
                      "name": "تركيا",
                      "value": 99.469475
                  },
                  {
                      "name": "تركيا",
                      "value": 99.01893
                  },
                  {
                      "name": "حلف",
                      "value": 99.89007
                  },
                  {
                      "name": "تركيا",
                      "value": 99.280914
                  },
                  {
                      "name": "فنلندا",
                      "value": 99.78625
                  },
                  {
                      "name": "السويد",
                      "value": 96.94295
                  },
                  {
                      "name": "لحل",
                      "value": 99.07921
                  },
                  {
                      "name": "##ف",
                      "value": 99.23869
                  },
                  {
                      "name": "روسيا",
                      "value": 99.7895
                  },
                  {
                      "name": "أوكرانيا",
                      "value": 92.896614
                  },
                  {
                      "name": "تركيا",
                      "value": 99.54867
                  },
                  {
                      "name": "تركيا",
                      "value": 98.89356
                  },
                  {
                      "name": "تركيا",
                      "value": 97.78266
                  },
                  {
                      "name": "تركيا",
                      "value": 99.47852
                  },
                  {
                      "name": "روسيا",
                      "value": 99.80868
                  },
                  {
                      "name": "حزب",
                      "value": 99.95628
                  },
                  {
                      "name": "حزب",
                      "value": 99.341095
                  },
                  {
                      "name": "حزب",
                      "value": 98.80219
                  },
                  {
                      "name": "الجيش",
                      "value": 81.813835
                  },
                  {
                      "name": "تنظيم",
                      "value": 99.61404
                  },
                  {
                      "name": "الجيش",
                      "value": 75.55129
                  },
                  {
                      "name": "وحدات",
                      "value": 99.10458
                  },
                  {
                      "name": "حزب",
                      "value": 99.947174
                  },
                  {
                      "name": "القوات",
                      "value": 99.89109
                  },
                  {
                      "name": "وحدات",
                      "value": 97.29557
                  },
                  {
                      "name": "حزب",
                      "value": 99.92614
                  },
                  {
                      "name": "حزب",
                      "value": 99.83381
                  },
                  {
                      "name": "تركيا",
                      "value": 99.856964
                  },
                  {
                      "name": "الولايات",
                      "value": 99.95375
                  },
                  {
                      "name": "روسيا",
                      "value": 99.59532
                  },
                  {
                      "name": "القوات",
                      "value": 98.90574
                  },
                  {
                      "name": "قوات",
                      "value": 99.74779
                  },
                  {
                      "name": "لقوات",
                      "value": 98.86798
                  },
                  {
                      "name": "تركيا",
                      "value": 99.46098
                  },
                  {
                      "name": "تركيا",
                      "value": 99.7446
                  },
                  {
                      "name": "حزب",
                      "value": 99.94511
                  },
                  {
                      "name": "حزب",
                      "value": 99.90707
                  },
                  {
                      "name": "النظام",
                      "value": 95.183334
                  },
                  {
                      "name": "تركيا",
                      "value": 96.75131
                  },
                  {
                      "name": "الولايات",
                      "value": 98.262
                  },
                  {
                      "name": "الولايات",
                      "value": 99.96522
                  },
                  {
                      "name": "الولايات",
                      "value": 99.97189
                  },
                  {
                      "name": "تنظيم",
                      "value": 99.84895
                  },
                  {
                      "name": "تنظيم",
                      "value": 99.83569
                  },
                  {
                      "name": "الجيش",
                      "value": 99.94307
                  },
                  {
                      "name": "روسيا",
                      "value": 99.9028
                  },
                  {
                      "name": "طهران",
                      "value": 99.91016
                  },
                  {
                      "name": "الولايات",
                      "value": 99.968094
                  },
                  {
                      "name": "لترك",
                      "value": 99.93333
                  },
                  {
                      "name": "##يا",
                      "value": 99.9096
                  },
                  {
                      "name": "تركيا",
                      "value": 99.82279
                  },
                  {
                      "name": "بحزب",
                      "value": 99.84478
                  },
                  {
                      "name": "حزب",
                      "value": 99.91292
                  },
                  {
                      "name": "الجماعة",
                      "value": 98.16016
                  },
                  {
                      "name": "تركيا",
                      "value": 99.396935
                  },
                  {
                      "name": "روسيا",
                      "value": 92.85108
                  },
                  {
                      "name": "لترك",
                      "value": 99.83827
                  },
                  {
                      "name": "##يا",
                      "value": 99.87238
                  },
                  {
                      "name": "روسيا",
                      "value": 99.233284
                  },
                  {
                      "name": "تركيا",
                      "value": 99.77033
                  },
                  {
                      "name": "تركيا",
                      "value": 99.743965
                  },
                  {
                      "name": "روسيا",
                      "value": 99.68974
                  },
                  {
                      "name": "تركيا",
                      "value": 98.17913
                  },
                  {
                      "name": "تركيا",
                      "value": 99.57175
                  },
                  {
                      "name": "أنقرة",
                      "value": 99.6659
                  },
                  {
                      "name": "طهران",
                      "value": 99.88331
                  },
                  {
                      "name": "تركيا",
                      "value": 99.489975
                  },
                  {
                      "name": "تركيا",
                      "value": 98.96548
                  },
                  {
                      "name": "تركيا",
                      "value": 99.48026
                  },
                  {
                      "name": "أنقرة",
                      "value": 99.6659
                  },
                  {
                      "name": "طهران",
                      "value": 99.88331
                  },
                  {
                      "name": "تركيا",
                      "value": 99.489975
                  },
                  {
                      "name": "تركيا",
                      "value": 98.96548
                  },
                  {
                      "name": "تركيا",
                      "value": 99.48026
                  }
              ]
          },
          {
              "name": "DATE",
              "data": [
                  {
                      "name": "شهور",
                      "value": 899.71881
                  },
                  {
                      "name": "القادم",
                      "value": 99.753944
                  },
                  {
                      "name": "من",
                      "value": 99.89779
                  },
                  {
                      "name": "كانون",
                      "value": 99.972824
                  },
                  {
                      "name": "يناير",
                      "value": 94.427666
                  },
                  {
                      "name": "تشرين",
                      "value": 99.69104
                  },
                  {
                      "name": "أول",
                      "value": 99.69334
                  },
                  {
                      "name": "أكتوبر",
                      "value": 629.37829
                  },
                  {
                      "name": "و",
                      "value": 99.67083
                  },
                  {
                      "name": "فبراير",
                      "value": 999.7538
                  },
                  {
                      "name": "الأيام",
                      "value": 41.398514
                  },
                  {
                      "name": "الماضية",
                      "value": 68.62377
                  }, {
                    "name": "أول",
                    "value": 99.69334
                },
                {
                    "name": "أكتوبر",
                    "value": 629.37829
                },
                {
                    "name": "و",
                    "value": 99.67083
                },
                {
                    "name": "فبراير",
                    "value": 999.7538
                },
                {
                    "name": "الأيام",
                    "value": 41.398514
                },
                {
                    "name": "الماضية",
                    "value": 68.62377
                }
              ]
          },
          {
              "name": "PERSON",
              "data": [
                  {
                      "name": "العن",
                      "value": 999.96336
                  },
                  {
                      "name": "##اني",
                      "value": 999.97524
                  },
                  {
                      "name": "مكي",
                      "value": 999.93372
                  },
                  {
                      "name": "بالله",
                      "value": 56.35969
                  },
                  {
                      "name": "مكي",
                      "value": 99.93098
                  },
                  {
                      "name": "تش",
                      "value": 99.94753
                  },
                  {
                      "name": "##او",
                      "value": 99.968376
                  },
                  {
                      "name": "##ش",
                      "value": 99.964005
                  },
                  {
                    "name": "خليل",
                    "value": 99.976074
                },
                {
                    "name": "لقاء",
                    "value": 99.96614
                },
                {
                    "name": "شير",
                    "value": 78.18147
                },
                {
                    "name": "خليل",
                    "value": 989.71081
                },
                {
                    "name": "مكي",
                    "value": 999.80475
                },
                {
                    "name": "أميركي",
                    "value": 89.370346
                },
                {
                    "name": "لقاء",
                    "value": 99.95458
                },
                {
                    "name": "لقاء",
                    "value": 74.27925
                },
                {
                    "name": "سن",
                    "value": 82.68819
                },
                {
                    "name": "##جار",
                    "value": 77.53189
                },
                {
                    "name": "خليل",
                    "value": 979.91868
                },
                {
                    "name": "ميغ",
                    "value": 96.55426
                },
                {
                    "name": "بوتين",
                    "value": 99.831314
                },
                {
                    "name": "مولود",
                    "value": 99.90581
                }
              ]
          },
          {
            "name": "PERSON",
            "data": [
                {
                    "name": "العن",
                    "value": 999.96336
                },
                {
                    "name": "##اني",
                    "value": 999.97524
                },
                {
                    "name": "مكي",
                    "value": 999.93372
                },
                {
                    "name": "بالله",
                    "value": 56.35969
                },
                {
                    "name": "مكي",
                    "value": 99.93098
                },
                {
                    "name": "تش",
                    "value": 99.94753
                },
                {
                    "name": "##او",
                    "value": 99.968376
                },
                {
                    "name": "##ش",
                    "value": 99.964005
                },
                {
                  "name": "خليل",
                  "value": 99.976074
              },
              {
                  "name": "لقاء",
                  "value": 99.96614
              },
              {
                  "name": "شير",
                  "value": 78.18147
              },
              {
                  "name": "خليل",
                  "value": 989.71081
              },
              {
                  "name": "مكي",
                  "value": 999.80475
              },
              {
                  "name": "أميركي",
                  "value": 89.370346
              },
              {
                  "name": "لقاء",
                  "value": 99.95458
              },
              {
                  "name": "لقاء",
                  "value": 74.27925
              },
              {
                  "name": "سن",
                  "value": 82.68819
              },
              {
                  "name": "##جار",
                  "value": 77.53189
              },
              {
                  "name": "خليل",
                  "value": 979.91868
              },
              {
                  "name": "ميغ",
                  "value": 96.55426
              },
              {
                  "name": "بوتين",
                  "value": 99.831314
              },
              {
                  "name": "مولود",
                  "value": 99.90581
              }
            ]
        }
      ]
    }
  }


}

  
