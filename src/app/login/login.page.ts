import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth: AuthService,
              private modalController: ModalController,
              private toastAler: ToastController,
              private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.auth.login(form.value.email, form.value.password).subscribe(data => {
      if (data != null) {
         var v_data = JSON.parse(JSON.stringify(data));
         console.log(v_data.islogin);
         if (v_data.islogin >= 1 ) {
           this.presentToast('Đăng nhập thành công');
           this.router.navigateByUrl('/home');
         } else {
           this.presentToast('Sai email hoặc mật khẩu');
         }

      }
    });
  }

  async presentToast(message: any) {
    const toast = await this.toastAler.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'black'
    });
    toast.present();
  }


  register() {
    this.router.navigateByUrl('/register');
  }

  Close() {
    this.modalController.dismiss();
  }

}
