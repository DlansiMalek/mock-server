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
        "text": "Keywords frequency",
        "align": null
      },
      "tooltip": {
        "valueSuffix": ""
      },
      "plotOptions": {
        "bar": {
          "dataLabels": {
            "enabled": false
          }
        }
      },
      "legend": {
        "layout": "vertical",
        "align": "right",
        "verticalAlign": "top",
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
            "value": 1000,
            "id": "1"
          }
        ]
      },
      {
        "name": "حرب",
        "data": [
          {
            "name": "حرب",
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
            "value": 1000,
            "id": "1"
          }
        ]
      },
      {
        "name": "war",
        "data": [
          {
            "name": "war",
            "value": 1000,
            "id": "1"
          }
        ]
      },
      {
        "name": "اقتصاد",
        "data": [
          {
            "name": "اقتصاد",
            "value": 1000,
            "id": "1"
          }
        ]
      }
    ]
  }
  }


}

  
