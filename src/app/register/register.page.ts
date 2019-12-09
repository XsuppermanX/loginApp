import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router,
              private toastAler: ToastController,
              private auth: AuthService) { }

  ngOnInit() {
  }

  register(form: NgForm) {
    this.auth.register(form.value.name, form.value.email, form.value.password).subscribe(data => {
      if (data != null) {
         var v_data = JSON.parse(JSON.stringify(data));
         console.log(v_data);
         if (v_data.iscreate >= 1 ) {
           this.presentToast('Đăng ký thành công');
         } else {
           this.presentToast('Tạo tài khoản không thành công');
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

  close() {
  }

  gotoLogin() {
    this.router.navigateByUrl('/login');
  }

}
