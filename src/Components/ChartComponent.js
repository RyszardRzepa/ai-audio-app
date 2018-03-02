import React from 'react';
import { Line as LineChart } from 'react-chartjs';

const zero = {
  labels: ['', ''],
  datasets: [
    {
      radius: 0,
      fillColor: "#7a59af",
      data: [1.0, 1.0],
    }
  ]
};

const floorTom = {
  labels: Array(100).join(".").split("."),
  datasets: [
    {
      radius: 0,
      fillColor: "#7a59af",
      data: [1.08726016, 1.08676324, 1.08623428, 1.08567123, 1.08507191, 1.08443399, 1.08375501, 1.08303233, 1.08226318, 1.08144459, 1.08057341, 1.07964629, 1.07865967, 1.07760978, 1.07649261, 1.07530391, 1.07403914, 1.07269352, 1.07126195, 1.06973902, 1.06811902, 1.06639586, 1.06456311, 1.06261394, 1.06054112, 1.05833701, 1.05599349, 1.05350199, 1.05085345, 1.04803828, 1.04504636, 1.04186698, 1.03848888, 1.03490014, 1.03108822, 1.02703993, 1.02274138, 1.01817795, 1.01333433, 1.00819444, 1.00274144, 0.9969577, 0.99082484, 0.98432367, 0.97743422, 0.97013576, 0.96240678, 0.95422508, 0.94556777, 0.93641134, 0.92673173, 0.91650444, 0.90570463, 0.89430728, 0.88228738, 0.86962011, 0.85628113, 0.8422469, 0.82749499, 0.81200459, 0.79575693, 0.77873597, 0.76092901, 0.74232755, 0.72292824, 0.70273391, 0.68175492, 0.66001054, 0.6375307, 0.61435792, 0.59054952, 0.56618022, 0.54134513, 0.51616306, 0.49078051, 0.46537606, 0.44016552, 0.41540774, 0.3914113, 0.36854219, 0.34723244, 0.32799016, 0.31141084, 0.29819032, 0.2891396, 0.28520159, 0.28747037, 0.29721297, 0.31589427, 0.34520532, 0.38709553, 0.44380933, 0.51792788, 0.61241648, 0.73067848, 0.87661658, 1.05470251, 1.27005617, 1.52853566, 1.83683944],
    }
  ]
};

const hHat = {
  labels: Array(100).join(".").split("."),
  datasets: [
    {
      radius: 0,
      fillColor: "#7a59af",
      data: [1, 1, 1.0000000000000002, 0.9999999999999999, 1.0000000000000002, 1, 1, 1.0000000000000002, 1.0000000000000002, 1.0000000000000002, 1, 1, 1, 0.9999999999999998, 1, 0.9999999999999999, 1.0000000000000002, 1.0000000000000002, 0.9999999999999999, 1.0000000000000002, 1.0000000000000002, 1, 1, 1, 1, 1, 1, 1.0000000000000002, 1, 1.0000000000000002, 1, 1, 1, 1, 0.9999999999999999, 1, 1.0000000000000002, 1, 0.9999999999999999, 1, 1, 0.9999999999999999, 0.9999999999999999, 1.0000000000000002, 1, 0.9999999999999999, 1, 1, 1.0000000000000002, 0.9999999999999999, 1, 0.9999999999999999, 0.9999999999999999, 0.9999999999999999, 1, 0.9999999999999999, 0.9999999999999998, 1, 1, 1, 1.0000000000000002, 1, 0.9999999999999999, 1, 1, 1, 0.9999999999999999, 0.9999999999999998, 1.0000000000000002, 1, 0.9999999999999998, 1, 0.9999999999999999, 1, 1, 0.9999999999999997, 0.9999999999999997, 0.9999999999999998, 1, 1, 0.9999999999999999, 0.9999999999999998, 0.9999999999999998, 0.9999999999999998, 0.9999999999999999, 1, 0.9999999999999998, 0.9999999999999998, 1, 0.9999999999999998, 0.9999999999999998, 0.9999999999999998, 0.9999999999999998, 0.9999999999999997, 0.9999999999999998, 0.9999999999999999, 0.9999999999999998, 0.9999999999999998, 0.9999999999999999, 1],
    }
  ]
};

const bDrum = {
  labels: Array(100).join(".").split("."),
  datasets: [
    {
      radius: 0,
      fillColor: "#7a59af",
      data: [50.50948931481329, 50.2877097164949, 50.05098966670514, 49.79828503004514, 49.528473852312025, 49.24034995906127, 48.93261595756556, 48.6038755791851, 48.2526252918283, 47.87724510393424, 47.47598847213228, 47.04697121429776, 46.58815931797447, 46.0973555209055, 45.57218452551121, 45.0100766923601, 44.40825003874588, 43.76369034713745, 43.07312916418809, 42.33301944382029, 41.53950855723858, 40.68840835810503, 39.77516195202168, 38.79891079592115, 37.75943081041683, 36.65262985693259, 35.47415135760404, 34.21935726072948, 32.883309916124475, 31.46075279159492, 29.946089957534433, 28.333364262204192, 26.61623411555575, 24.787948794496238, 22.890622189068196, 20.97889277054578, 19.06635571919103, 17.16943161364564, 15.307809738825643, 13.50495494474633, 11.788686834773284, 10.191841254315833, 8.753025404236299, 7.517479438829777, 6.538059150610482, 5.708936001852112, 4.890187990011872, 4.091067214093315, 3.322573576994378, 2.5977217142816547, 1.9318457851308672, 1.3429473310311135, 0.852092113474327, 0.483862642487174, 0.26687401626280705, 0.2343617227763618, 0.30863848036164415, 0.38745365595188663, 0.4710645135484675, 0.5597400557235378, 0.6537611239830122, 0.7534204172530197, 0.8590224113557813, 0.9708831596476212, 1.0893299519121573, 1.2147008050823163, 1.3473437553450185, 1.4876159165933127, 1.6358822649541385, 1.7925141031471399, 1.9578871516198761, 2.132379205643279, 2.316367288707994, 2.510224222490093, 2.7143145221858487, 2.928989512959972, 3.154581548394208, 3.391397194918637, 3.6397092269787974, 3.8997472558226605, 4.171686789924797, 4.455636496795437, 4.751623403788701, 5.059575739005299, 5.379303071887716, 5.710473365958337, 6.052586502590655, 6.404943773865697, 6.766612773469307, 7.136387036117737, 7.51273968689738, 7.893770260737274, 8.277143737377141, 8.660020706806456, 9.038977432144026, 9.409914408932206, 9.767951829149956, 10.10731014185636, 10.421173656805955, 10.701534858710202],
    }
  ]
};

const overhead = {
  labels: Array(100).join(".").split("."),
  datasets: [
    {
      radius: 0,
      fillColor: "#7a59af",
      data: [4.731531735880415, 4.753459736135663, 4.776752628638025, 4.801491340617108, 4.82776103616183, 4.855651255902753, 4.885256047692704, 4.916674085286052, 4.950008771499365, 4.985368321741533, 5.022865823119355, 5.062619263542471, 5.10475152435587, 5.149390329002823, 5.196668139048248, 5.2467219875517, 5.299693238247248, 5.35572725723814, 5.414972981917256, 5.477582369546371, 5.54370970532907, 5.613510746850534, 5.687141678382174, 5.764757844704185, 5.8465122297201715, 5.932553640152576, 6.023024548933066, 6.118058546444715, 6.217777340426617, 6.322287236995572, 6.4316750257372854, 6.546003181015647, 6.6653042793668, 6.789574518885627, 6.918766210648444, 7.052779094190686, 7.191450308579886, 7.334542827361599, 7.481732139233618, 7.632590926295857, 7.786571457646994, 7.9429853774057815, 8.100980522304381, 8.259514354127242, 8.417323535653448, 8.572889114495734, 8.72439670628788, 8.869690985887024, 9.006223701306704, 9.130994318479782, 9.240482283967019, 9.330569755447733, 9.396453494066526, 9.432544435983022, 9.432353259967458, 9.388360040412849, 9.305663792357727, 9.1916505491783, 9.040816909309843, 8.8468379247809, 8.602451646005928, 8.29932785865273, 7.927918873955293, 7.477289946142933, 6.934926564358619, 6.286515496371435, 5.515696041686166, 4.70429470537767, 3.9579679550406563, 3.296679407459022, 2.7437937407790867, 2.3265791138530174, 2.076779885216774, 2.031269238035737, 2.23279261577551, 2.7308143463731693, 3.5824815037148268, 4.853720950824995, 6.384557109290005, 7.964307567737053, 9.589411016265233, 11.2551744958278, 12.955579501427456, 14.683059385754833, 16.42824404425916, 18.179667313243918, 19.923431888912685, 21.642825867363413, 23.31788420201694, 24.924887463018436, 26.435789248201083, 27.817562420726347, 29.03145301577517, 30.032129146409844, 30.76671052286011, 31.173662252676337, 31.181534380452664, 30.707526120004122, 29.65585088913602, 27.915875032275878]
    }
  ]
};

const snare = {
  labels: Array(100).join(".").split("."),
  datasets: [
    {
      radius: 0,
      fillColor: "#7a59af",
      data: [0.5098176638868259, 0.5107663076353042, 0.5117762249914717, 0.512851359165792, 0.5139959051839093, 0.5152143257053022, 0.5165113678000159, 0.5178920807365635, 0.5193618348363531, 0.5209263414522061, 0.5225916741307174, 0.524364291020336, 0.5262510585890566, 0.5282592767175092, 0.5303967052349351, 0.5326715919670186, 0.5350927023657289, 0.5376693507921418, 0.5404114335235995, 0.5433294635563952, 0.5464346072743472, 0.5497387230520548, 0.5532544018590804, 0.5569950099276996, 0.560974733541945, 0.5652086259992335, 0.5697126567876626, 0.5745037630117689, 0.5795999030868468, 0.5850201127064094, 0.5907845630686097, 0.5969146213249107, 0.6034329131874027, 0.6103633875992617, 0.6177313833351525, 0.6255636973540192, 0.6338886546747062, 0.6427361794840541, 0.6521378671162276, 0.6621270564595938, 0.6727389022517772, 0.6840104466126731, 0.6959806890370165, 0.7086906539200873, 0.72218345451949, 0.7365043520594052, 0.751700808457687, 0.7678225308964464, 0.7849215061586373, 0.8030520223112375, 0.8222706749238083, 0.8426363545625472, 0.8642102117865651, 0.8870555952859984, 0.9112379581305973, 0.936824726330945, 0.9638851230394274, 0.9924899407194558, 1.0227112524723705, 1.0546220524126697, 1.088295813501815, 1.1238059495641397, 1.1612251662871056, 1.2006246838204246, 1.242073311098046, 1.2856363491726162, 1.3313742976269967, 1.3793413344587522, 1.429583535661099, 1.4821367959793492, 1.5370244069279482, 1.5942542420219763, 1.6538154922087418, 1.7156748865668106, 1.7797723243431471, 1.846015834178533, 1.914275764761971, 1.984378097969125, 2.0560967605656244, 2.1291447935523413, 2.2031642189232485, 2.277714421687371, 2.3522588401229543, 2.426149728985809, 2.4986107283325114, 2.568716934230061, 2.635372126325087, 2.6972827603781164, 2.7529282806839386, 2.8005272469492115, 2.8379987017213937, 2.8629181267676787, 2.872467248652017, 2.8633768537492568, 2.8318616594773616, 2.7735461598171858, 2.6833802171788994, 2.5555430070447955, 2.3833337339394363, 2.1590473241668344]
    }
  ]
};

const bassD = {
  labels: Array(100).join(".").split("."),
  datasets: [
    {
      radius: 0,
      fillColor: "#7a59af",
      data: [21.38727081663771, 21.44921949219339, 21.51299974778674, 21.578438099847435, 21.64531071905516, 21.71333493458728, 21.782159487476594, 21.851353358294958, 21.920392970509496, 21.988647543764127, 22.055362340585788, 22.11963951511133, 22.18041623281881, 22.236439685293835, 22.28623857305046, 22.328090571543203, 22.359985229829324, 22.379581676822962, 22.38416042553843, 22.370568469802816, 22.3351567591042, 22.27370901379907, 22.181360702870705, 22.052506847584016, 21.880697134199274, 21.658516614526118, 21.377450041277775, 21.027727622244058, 20.598149679070577, 20.07588735818127, 19.446256157749087, 18.69245859952464, 17.795291880881, 16.732815782804284, 15.611726564358754, 14.569886856452394, 13.632761927743077, 12.83018798542871, 12.197019528654431, 11.7738673784945, 11.60793978135875, 11.754000658656683, 12.275460976922258, 13.245621369593747, 14.74908658853875, 16.52600884139614, 18.23713851919207, 19.853995134816408, 21.34301161870101, 22.66477096538603, 23.773135368842198, 24.614253111847788, 25.125426480369047, 25.2338217111938, 24.854999414013612, 23.891240996910184, 22.57752201412227, 21.223112247774402, 19.83132336344743, 18.406477762746675, 16.95408062777028, 15.481017373211767, 13.995780060748341, 12.508726816077012, 11.03237884031917, 9.581760233348685, 8.174786556920427, 6.8327088716391, 5.580620896689688, 4.448037979452115, 3.4695577402075353, 2.685613593889609, 2.143333867541925, 1.8975209529628825, 2.011766886342687, 2.559723961581672, 3.6265514966463677, 5.310562722709328, 7.414710588735734, 9.677337851675846, 12.11167415884577, 14.732202489035926, 17.554793363292504, 20.596854844135997, 23.877500295302333, 27.417736128879618, 31.240672055006144, 35.37175667553783, 39.83904163232622, 44.673477938676754, 49.90924859565557, 55.584142130513854, 61.73997230091333, 68.42304989528404, 75.68471333721047, 83.58192568231557, 92.17794659342539, 101.54308900939158, 111.75557150245159, 122.90247876840435]
    }
  ]
};

const rackTom = {
  labels: Array(100).join(".").split("."),
  datasets: [
    {
      radius: 0,
      fillColor: "#7a59af",
      data: [1, 1, 1.0000000000000002, 0.9999999999999999, 1.0000000000000002, 1, 1, 1.0000000000000002, 1.0000000000000002, 1.0000000000000002, 1, 1, 1, 0.9999999999999998, 1, 0.9999999999999999, 1.0000000000000002, 1.0000000000000002, 0.9999999999999999, 1.0000000000000002, 1.0000000000000002, 1, 1, 1, 1, 1, 1, 1.0000000000000002, 1, 1.0000000000000002, 1, 1, 1, 1, 0.9999999999999999, 1, 1.0000000000000002, 1, 0.9999999999999999, 1, 1, 0.9999999999999999, 0.9999999999999999, 1.0000000000000002, 1, 0.9999999999999999, 1, 1, 1.0000000000000002, 0.9999999999999999, 1, 0.9999999999999999, 0.9999999999999999, 0.9999999999999999, 1, 0.9999999999999999, 0.9999999999999998, 1, 1, 1, 1.0000000000000002, 1, 0.9999999999999999, 1, 1, 1, 0.9999999999999999, 0.9999999999999998, 1.0000000000000002, 1, 0.9999999999999998, 1, 0.9999999999999999, 1, 1, 0.9999999999999997, 0.9999999999999997, 0.9999999999999998, 1, 1, 0.9999999999999999, 0.9999999999999998, 0.9999999999999998, 0.9999999999999998, 0.9999999999999999, 1, 0.9999999999999998, 0.9999999999999998, 1, 0.9999999999999998, 0.9999999999999998, 0.9999999999999998, 0.9999999999999998, 0.9999999999999997, 0.9999999999999998, 0.9999999999999999, 0.9999999999999998, 0.9999999999999998, 0.9999999999999999, 1]
    }
  ]
};

const options = {
  scaleShowLabels: false,
  pointDot: false,
};

export default class ChartComponent extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      channel: props.channel,
      mixed: props.mixed
    }
  }

  componentWillReceiveProps(nextProps) { 
    this.setState({
      channel: nextProps.channel,
      mixed: nextProps.mixed
    })
  }
  
  render() {
    var width = window.innerWidth - 200;

    let chartData = zero
    if (this.state.mixed) {
      switch(this.state.channel){
        case '1':
          chartData = floorTom
        break;
        case '2':
          chartData = hHat
          break;
        case '3':
          chartData = bDrum
          break;
        case '4':
          chartData = overhead
          break;
        case '5':
          chartData = snare
          break;
        case '6':
          chartData = bassD
          break;
        case '7':
          chartData = rackTom
          break;
      }
    }
    
    return (
      <div>
        <div className="yAxis">
          <div className="charts">
            <LineChart
              className='chart1'
              data={chartData}
              options={options}
              width={width}
              height="300"
            />
          </div>
        </div>
      </div>
    )
  }
}