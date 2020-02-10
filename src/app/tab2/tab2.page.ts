import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  public timeString;
  public status;

  public Sw_time;

  public setTimeStart1:string = '--:--';
  public setTimeEnd1:string = '--:--';
  public Sw_time1:boolean = false;

  public setTimeStart2:any = '--:--';
  public setTimeEnd2:any = '--:--';
  public Sw_time2:boolean = false;
  
  public setTimeStart3:any = '--:--';
  public setTimeEnd3:any = '--:--';
  public Sw_time3:boolean = false;

  public setTimeStart4:any = '--:--';
  public setTimeEnd4:any = '--:--';
  public Sw_time4:boolean = false;

public tae;
 
  constructor(public fd: AngularFireDatabase) {
    this.timenow();
    
    
  }
  public timenow() {
    setInterval(() => {
      let time = new Date();
      this.timeString = `${this.zero(time.getHours())}:${this.zero(time.getMinutes())}:${this.zero(time.getSeconds())}`;

    }, 1000);
  }
  private zero(nr, base = 10) {
    var len = (String(base).length - String(nr).length) + 1;
    return len > 0 ? new Array(len).join('0') + nr : nr;
  }
  ngOnInit(){

    this.tae=localStorage.getItem('gg');
    // localStorage.setItem("localdata",'localstorage');
    // sessionStorage.setItem("sessionData",'sessiostorage');

    // console.log('localdata');
    // console.log('sessionData');

// *******************************************************************************
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
// *************************************************************************************
////////////////////////////////////////////////////////////////////////////////////////////////////
   ////////////////// ตัวที่ 1
   this.fd
   .object("set/time1/timeStart1")
   .valueChanges()
   .subscribe((value: any) => {
     console.log(value);
     this.setTimeStart1 = value;
   });
   this.fd
   .object("set/time1/timeEnd1")
   .valueChanges()
   .subscribe((value: any) => {
     console.log(value);
     this.setTimeEnd1 = value;
   });
   this.fd
   .object("set/time1/sw1")
   .valueChanges()
   .subscribe((value: boolean) => {
     console.log(value);
     this.Sw_time1 = value;
   });
   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// ตัวที่ 2
this.fd
.object("set/time2/timeStart2")
.valueChanges()
.subscribe((value: any) => {
  console.log(value);
  this.setTimeStart2 = value;
});
this.fd
.object("set/time2/timeEnd2")
.valueChanges()
.subscribe((value: any) => {
  console.log(value);
  this.setTimeEnd2 = value;
});
this.fd
.object("set/time2/sw2")
.valueChanges()
.subscribe((value: boolean) => {
  console.log(value);
  this.Sw_time2 = value;
});
/////////////////////////////////////////////////////////////////////////////////
////////////////////////ตัวที่3
this.fd
.object("set/time3/timeStart3")
.valueChanges()
.subscribe((value: any) => {
  console.log(value);
  this.setTimeStart3 = value;
});
this.fd
.object("set/time3/timeEnd3")
.valueChanges()
.subscribe((value: any) => {
  console.log(value);
  this.setTimeEnd3 = value;
});
this.fd
.object("set/time3/sw3")
.valueChanges()
.subscribe((value: boolean) => {
  console.log(value);
  this.Sw_time3 = value;
});
///////////////////////////////////////////////////////
///////////////////////ตัวที่4
this.fd
.object("set/time4/timeStart4")
.valueChanges()
.subscribe((value: any) => {
  console.log(value);
  this.setTimeStart4 = value;
});
this.fd
.object("set/time4/timeEnd4")
.valueChanges()
.subscribe((value: any) => {
  console.log(value);
  this.setTimeEnd4 = value;
});
this.fd
.object("set/time4/sw4")
.valueChanges()
.subscribe((value: boolean) => {
  console.log(value);
  this.Sw_time4 = value;
});
////////////////////////////

  }
 
    public Sw_on1(){ // การกด
      this.fd
        .object("set/time1/sw1")
        .set(this.Sw_time1)
        .then(() => {
          
  
        });
      console.log("SW_1 = "+this.Sw_time1);
  
      this.fd
      .object("set/swall")
      .set(this.Sw_time+","+this.Sw_time1+","+this.Sw_time2+","+this.Sw_time3+","+this.Sw_time4)
      .then(() => {
        
      });
    }
    public Sw_on2(){
      this.fd
        .object("set/time2/sw2")
        .set(this.Sw_time2)
        .then(() => {
         // microgear.publish("/ionic/sw1", this.Sw_togle + "");
  
        });
  
      console.log("SW_2 = "+this.Sw_time2);
      this.fd
      .object("set/swall")
      .set(this.Sw_time+","+this.Sw_time1+","+this.Sw_time2+","+this.Sw_time3+","+this.Sw_time4)
      .then(() => {
       
      });
    }
    public Sw_on3(){
      this.fd
      .object("set/time3/sw3")
      .set(this.Sw_time3)
      .then(() => {
       // microgear.publish("/ionic/sw1", this.Sw_togle + "");
  
      });
      console.log("SW_3 = "+this.Sw_time3);
      this.fd
      .object("set/swall")
      .set(this.Sw_time+","+this.Sw_time1+","+this.Sw_time2+","+this.Sw_time3+","+this.Sw_time4)
      .then(() => {
     
      });
    }
    public Sw_on4(){
      this.fd
      .object("set/time4/sw4")
      .set(this.Sw_time4)
      .then(() => {
       // microgear.publish("/ionic/sw1", this.Sw_togle + "");
  
      });
      console.log("SW4 = "+this.Sw_time4);
      this.fd
      .object("set/swall")
      .set(this.Sw_time+","+this.Sw_time1+","+this.Sw_time2+","+this.Sw_time3+","+this.Sw_time4)
      .then(() => {
       
      });
    }
    public Sw_on(){
      this.fd
        .object("/sw/ON-OFF")
        .set(this.Sw_time)
        .then(() => {
          
  
        });
        console.log("SW_ON/OFF = "+this.Sw_time);
  
        this.fd
        .object("set/swall")
        .set(this.Sw_time+","+this.Sw_time1+","+this.Sw_time2+","+this.Sw_time3+","+this.Sw_time4)
        .then(() => {
        
        });
    }





    public getTimeStart1(time:any) {
    
      this.setTimeStart1 = '';
      let dt = new Date(time);
      // console.log(dt.getHours() + " " + dt.getMinutes());
      console.log(  this.setTimeStart1);
      let timeset = `${this.zeroPad(dt.getHours())}:${this.zeroPad(dt.getMinutes())}`;
      this.setTimeStart1 = timeset;
      this.fd
      .object("set/time1/timeStart1")
      .set(this.setTimeStart1)
      .then(() => {
       // microgear.publish("/ionic/sw1", this.Sw_togle + "");
  
      }); 
      
  
      this.fd
        .object("set/timeall")
        .set(this.setTimeStart1+","+this.setTimeEnd1+","+this.setTimeStart2+","+this.setTimeEnd2+","
        +this.setTimeStart3+","+this.setTimeEnd3+","+this.setTimeStart4+","+this.setTimeEnd4)
        .then(() => {
        });
  
      console.log(this.setTimeStart1);
    }
    public getTimeStart2(time:any) {
      let dt = new Date(time);
      // console.log(dt.getHours() + " " + dt.getMinutes());
      console.log(  this.setTimeStart2);
      let timeset = `${this.zeroPad(dt.getHours())}:${this.zeroPad(dt.getMinutes())}`;
      this.setTimeStart2 = timeset;
      this.fd
      .object("set/time2/timeStart2")
      .set(this.setTimeStart2)
      .then(() => {
       // microgear.publish("/ionic/sw1", this.Sw_togle + "");
  
      });
      console.log(this.setTimeStart2);
      this.fd
        .object("set/timeall")
        .set(this.setTimeStart1+","+this.setTimeEnd1+","+this.setTimeStart2+","+this.setTimeEnd2+","
        +this.setTimeStart3+","+this.setTimeEnd3+","+this.setTimeStart4+","+this.setTimeEnd4)
        .then(() => {
        });
    }
  
  
    public getTimeStart3(time:any) {
      let dt = new Date(time);
      // console.log(dt.getHours() + " " + dt.getMinutes());
      console.log(  this.setTimeStart3);
      let timeset = `${this.zeroPad(dt.getHours())}:${this.zeroPad(dt.getMinutes())}`;
      this.setTimeStart3 = timeset;
      this.fd
      .object("set/time3/timeStart3")
      .set(this.setTimeStart3)
      .then(() => {
       // microgear.publish("/ionic/sw1", this.Sw_togle + "");
  
      });
      console.log(this.setTimeStart3);
      this.fd
        .object("set/timeall")
        .set(this.setTimeStart1+","+this.setTimeEnd1+","+this.setTimeStart2+","+this.setTimeEnd2+","
        +this.setTimeStart3+","+this.setTimeEnd3+","+this.setTimeStart4+","+this.setTimeEnd4)
        .then(() => {
        });
    }
    public getTimeStart4(time:any) {
      let dt = new Date(time);
      // console.log(dt.getHours() + " " + dt.getMinutes());
      console.log(  this.setTimeStart4);
      let timeset = `${this.zeroPad(dt.getHours())}:${this.zeroPad(dt.getMinutes())}`;
      this.setTimeStart4 = timeset;
      this.fd
      .object("set/time4/timeStart4")
      .set(this.setTimeStart4)
      .then(() => {
       // microgear.publish("/ionic/sw1", this.Sw_togle + "");
  
      });
      console.log(this.setTimeStart4);
      this.fd
        .object("set/timeall")
        .set(this.setTimeStart1+","+this.setTimeEnd1+","+this.setTimeStart2+","+this.setTimeEnd2+","
        +this.setTimeStart3+","+this.setTimeEnd3+","+this.setTimeStart4+","+this.setTimeEnd4)
        .then(() => {
        });
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
      this.fd
        .object("set/timeall")
        .set(this.setTimeStart1+","+this.setTimeEnd1+","+this.setTimeStart2+","+this.setTimeEnd2+","
        +this.setTimeStart3+","+this.setTimeEnd3+","+this.setTimeStart4+","+this.setTimeEnd4)
        .then(() => {
        });
    }
    public getTimeEnd2(time:any) {
      let dt = new Date(time);
      // console.log(dt.getHours() + " " + dt.getMinutes());
      console.log(  this.setTimeEnd2);
      let timeset = `${this.zeroPad(dt.getHours())}:${this.zeroPad(dt.getMinutes())}`;
      this.setTimeEnd2 = timeset;
      this.fd
      .object("set/time2/timeEnd2")
      .set(this.setTimeEnd2)
      .then(() => {
       // microgear.publish("/ionic/sw1", this.Sw_togle + "");
  
      });
      console.log(this.setTimeEnd2);
      this.fd
        .object("set/timeall")
        .set(this.setTimeStart1+","+this.setTimeEnd1+","+this.setTimeStart2+","+this.setTimeEnd2+","
        +this.setTimeStart3+","+this.setTimeEnd3+","+this.setTimeStart4+","+this.setTimeEnd4)
        .then(() => {
        });
    }
    public getTimeEnd3(time:any) {
      let dt = new Date(time);
      // console.log(dt.getHours() + " " + dt.getMinutes());
      console.log(  this.setTimeEnd3);
      let timeset = `${this.zeroPad(dt.getHours())}:${this.zeroPad(dt.getMinutes())}`;
      this.setTimeEnd3 = timeset;
      this.fd
      .object("set/time3/timeEnd3")
      .set(this.setTimeEnd3)
      .then(() => {
       // microgear.publish("/ionic/sw1", this.Sw_togle + "");
  
      });
      console.log(this.setTimeEnd3);
      this.fd
        .object("set/timeall")
        .set(this.setTimeStart1+","+this.setTimeEnd1+","+this.setTimeStart2+","+this.setTimeEnd2+","
        +this.setTimeStart3+","+this.setTimeEnd3+","+this.setTimeStart4+","+this.setTimeEnd4)
        .then(() => {
        });
    }
    public getTimeEnd4(time:any) {
      let dt = new Date(time);
      // console.log(dt.getHours() + " " + dt.getMinutes());
      console.log(  this.setTimeEnd4);
      let timeset = `${this.zeroPad(dt.getHours())}:${this.zeroPad(dt.getMinutes())}`;
      this.setTimeEnd4 = timeset;
      this.fd
      .object("set/time4/timeEnd4")
      .set(this.setTimeEnd4)
      .then(() => {
       // microgear.publish("/ionic/sw1", this.Sw_togle + "");
  
      });
      console.log(this.setTimeEnd4);
      this.fd
        .object("set/timeall")
        .set(this.setTimeStart1+","+this.setTimeEnd1+","+this.setTimeStart2+","+this.setTimeEnd2+","
        +this.setTimeStart3+","+this.setTimeEnd3+","+this.setTimeStart4+","+this.setTimeEnd4)
        .then(() => {
        });
    }
  
  
    private zeroPad(nr, base = 10) {
      return nr;
      var len = (String(base).length - String(nr).length) + 1;
      //return len > 0 ? new Array(len).join('0') + nr : nr;
    }
}
