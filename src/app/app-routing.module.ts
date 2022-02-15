import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './Component/contact/contact.component';
import { HelpComponent } from './Component/help/help.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './Component/product-detail/product-detail.component';
import { ProductsComponent } from './Component/products/products.component';
import { RegisterComponent } from './Component/register/register.component';
import { UserDetailComponent } from './Component/user-detail/user-detail.component';
import { UsersComponent } from './Component/users/users.component';
import { LogoutComponent } from './Component/logout/logout.component';
import { PostComponent } from './Component/post/post.component';
import { AlbumsComponent } from './Component/albums/albums.component';
import { CommentsComponent } from './Component/comments/comments.component';
import { FeedbackComponent } from './Component/feedback/feedback.component';
import { CreateFeedbackComponent } from './Component/create-feedback/create-feedback.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
//Import router formsmodule clientmodule



import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const routes:Routes = [
  {path:'', redirectTo: '/Home', pathMatch:'full'},
  {path:'Home', component:HomeComponent},
  {path:'Products', component:ProductsComponent},
  {path:'ProductDetail/:id', component:ProductDetailComponent},
  {path:'Users', component:UsersComponent},
  {path:'UserDetail/:id',component:UserDetailComponent},
  {path:'Contact', component:ContactComponent},
  {path:'Help', component:HelpComponent},
  {path:'Comments', component:CommentsComponent},
  {path:'Feedback', component:FeedbackComponent},
  {path:'CreateFeedback', component:CreateFeedbackComponent},
  {path:'SignUp', component:SignUpComponent},
  {path:'Login', component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Post',component:PostComponent},
  {path:'Album', component:AlbumsComponent},
  {path:'logout', component:LogoutComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  declarations: [
    ContactComponent,
    HelpComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    ProductsComponent,
    RegisterComponent,
    UserDetailComponent,
    UsersComponent,
    LogoutComponent,
    PostComponent,
    CommentsComponent,
    AlbumsComponent,
    FeedbackComponent,
    CreateFeedbackComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes), HttpClientModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
