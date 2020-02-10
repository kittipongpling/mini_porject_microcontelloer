import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { LocalStorage } from '@ngx-pwa/local-storage';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
  
})

export class Tab1Page implements OnInit{
  public now: Date = new Date();
  public ta;
  public tg;
 
  public timeString;
  
  public status:boolean = false;
  public Sw_time:boolean = false;
  

  public setTimeStart1:string = '--:--';
  public setTimeEnd1:string = '--:--';

  public Sw_time1:boolean = false;

  public gg;
  gaugeType = "arch";
  gaugeValue ;
  gaugeLabel = "อุณหภูมิ";
  gaugeAppendText = "°C";

  tae = "arch";
  tae1 ;
  tae2 = "ความชื้น";
  tae3 = "%";

  
  
  
  constructor(public fd: AngularFireDatabase,
    private localStorage: LocalStorage
    ) {
    this.timenow();
  }
  public timenow() {
    setInterval(() => {
      let time = new Date();
      this.timeString = `${this.zeroPad(time.getHours())}:${this.zeroPad(time.getMinutes())}:${this.zeroPad(time.getSeconds())}`;

    }, 1000);
  }
  private zeroPad(nr, base = 10) {
    var len = (String(base).length - String(nr).length) + 1;
    return len > 0 ? new Array(len).join('0') + nr : nr;
  }
  

  
  
  ngOnInit(){
    this.fd
      .object("/sw/ON-OFF")
      .valueChanges()
      .subscribe((value: boolean) => { //subscribe ติดตามค่า
        console.log(value);
        this.Sw_time = value;
      });
      this.fd
      .object("sw/status")
      .valueChanges()
      .subscribe((value: boolean) => {
        console.log(value);
        this.status = value;
      });
    // this.tae=localStorage.getItem('localdata');
    // console.log(localStorage.getItem('localdata'));
    // console.log(sessionStorage.getItem('sessionData'));
    // ********************************* แสดงค่า ********************
    this.fd
       .object("/temp")
       .valueChanges()
       .subscribe((value) =>{
        this.gaugeValue=value;
        this.ta = value;
        console.log(this.ta);
       })
    this.fd
       .object("/moisture")
       .valueChanges()
       .subscribe((value) =>{
        this.tae1=value;
        this.tg = value;
        console.log(this.tg);
       })

  }
  getuser(){
    localStorage.setItem("kititpong",'');
  }
  public Sw_on1(){ // การกด
    this.fd
      .object("set/time1/sw1")
      .set(this.Sw_time1)
    console.log("SW_1 = "+this.Sw_time1);
  
    this.fd
    .object("set/swall")
    .set(this.Sw_time+","+this.Sw_time1+","+this.Sw_time+","+this.Sw_time+","+this.Sw_time)
    .then(() => {
      
    });
  
  
    }
    public getTimeStart1(time:any) {
    
      this.setTimeStart1 = '';
      let dt = new Date(time);
      // console.log(dt.getHours() + " " + dt.getMinutes());
      console.log(  this.setTimeStart1);
      let timeset = `${this.zero(dt.getHours())}:${this.zero(dt.getMinutes())}`;
      this.setTimeStart1 = timeset;
      this.fd
      .object("set/time1/timeStart1")
      .set(this.setTimeStart1)
      .then(() => {
       // microgear.publish("/ionic/sw1", this.Sw_togle + "");
  
      }); 
      
  
      
  
      console.log(this.setTimeStart1);
    }
    private zero(nr, base = 10) {
      return nr;
      var len = (String(base).length - String(nr).length) + 1;
      //return len > 0 ? new Array(len).join('0') + nr : nr;
    }
  public getTimeEnd1(time:any) {
    let dt = new Date(time);
    // console.log(dt.getHours() + " " + dt.getMinutes());
    console.log(  this.setTimeEnd1);
    let timeset = `${this.zeroPad(dt.getHours())}:${this.zeroPad(dt.getMinutes())}`;
    this.setTimeEnd1 = timeset;
    this.fd
    .object("set/time1/timeEnd1")
    .set(this.setTimeEnd1)
    .then(() => {
     // microgear.publish("/ionic/sw1", this.Sw_togle + "");

    });
    console.log(this.setTimeEnd1);
    // this.fb
    //   .object("set/timeall")
    //   .set(this.setTimeStart1+","+this.setTimeEnd1+","+this.setTimeStart2+","+this.setTimeEnd2+","
    //   +this.setTimeStart3+","+this.setTimeEnd3+","+this.setTimeStart4+","+this.setTimeEnd4)
    //   .then(() => {
    //   });
  }
  

  public Sw_on(){
    this.fd
      .object("/sw/ON-OFF")
      .set(this.Sw_time)
      .then(() => {
        
        this.gg=console.log(this.Sw_time);
        localStorage.setItem("taee",this.gg);
      });
      console.log("SW_ON/OFF = "+this.Sw_time);

      this.fd
      .object("set/swall")
      .set(this.Sw_time+",")
      .then(() => {
      
      });
  }
}