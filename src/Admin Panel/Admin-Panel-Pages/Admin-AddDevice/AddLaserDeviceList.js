import React, { useEffect, useRef, useState } from "react";
import "./AddLaserDeviceList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPlus } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/react-fontawesome";
import { CgProfile } from "react-icons/cg";
import { BsFillPersonFill } from "react-icons/bs";
import { RiStickyNoteLine } from "react-icons/ri";
// import { TbCircle1Filled } from "react-icons/tb";
// import {faCircle1  } from "react-icons/fa";

function AddLaserDeviceList() {

    return (

        <div>
            <div className="customer_profile">
                <div className="content">
                    <div className="row">
                        <div className="col-md-3">
                            {/* <div>
                                <div>
                                    
                                    <span># Bender and Sons</span>
                                    <button
                                        class="btn order-drp dropdown-toggle "
                                        type="button"
                                        id="dropdownMenuButton2"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                     ></button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                        <li>
                                            a
                                        </li>
                                        <li>
                                            b
                                        </li>
                                        <li>
                                            c
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* <ul className='card1' role="tablist">
                                <div className="row d-flex">
                                    <div className="col-4 mt-1">
                                <span classNmae="c1icon"><CgProfile />&nbsp;&nbsp; </span>
                                </div>
                                <div className="col-4 mt-1">
                                <a data-group="profile"  className="c1t" href="https://ixiono.com/crm/admin/clients/client/114?group=profile">
                                     Profile
                                </a>
                                </div>
                                </div>
                                <hr />
                                <div className="row">
                                <a data-group="contacts" href="https://ixiono.com/crm/admin/clients/client/114?group=contacts">
                                    <span><BsFillPersonFill /> &nbsp;&nbsp; Contacts </span>
                                </a>
                                <span><FontAwesomeIcon icon={faCircle1} /></span>
                                </div>
                                <hr />
                                <a data-group="notes" href="https://ixiono.com/crm/admin/clients/client/114?group=notes">
                                    <span><RiStickyNoteLine /> &nbsp;&nbsp; Notes</span>
                                </a>
                            </ul> */}
                            <div>
                            <div>
                                <span className="ch mt-0"><b>#2 Berder and sons</b>
                                <button
                                    class="btn order-drp dropdown-toggle "
                                    type="button"
                                    id="dropdownMenuButton2"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                ></button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                        <li>
                                            a
                                        </li>
                                        <li>
                                            b
                                        </li>
                                        <li>
                                            c
                                        </li>
                                    </ul>
                                    </span>
                                    </div>
                                    </div>
                                <div className="panel-body padding-9 mt-3" style={{ background: '#ffffff' }}>

                                    <ul className="nav navbar-pills navbar-pills-flat nav-tabs nav-stacked customer-tabs" role="tablist">
                                        <li className="active customer_tab_profile">
                                            <a data-group="profile" href="https://ixiono.com/crm/admin/clients/client/114?group=profile">
                                                {/* <i className="fa fa-user-circle menu-icon" aria-hidden="true"></i> */}
                                                <span classNmae="c1icon"><CgProfile />&nbsp;&nbsp; </span>
                                                Profile </a>
                                        </li>
<hr/>
                                        <li className="customer_tab_contacts">
                                            <a data-group="contacts" href="https://ixiono.com/crm/admin/clients/client/114?group=contacts">
                                                {/* <i className="fa fa-users menu-icon" aria-hidden="true"></i> */}
                                                <span><BsFillPersonFill /> &nbsp;&nbsp; Contacts </span>
                                                <span className="badge1">1</span>
                                            </a>
                                        </li>
                                        <hr/>

                                        <li className="customer_tab_notes">
                                            <a data-group="notes" href="https://ixiono.com/crm/admin/clients/client/114?group=notes">
                                                {/* <i className="fa fa-sticky-note-o menu-icon" aria-hidden="true"></i> */}
                                                <span><RiStickyNoteLine /> &nbsp;&nbsp; Notes</span>
                                                <span className="badge2">1</span>
                                                </a>
                                        </li>
                                    </ul>
                                </div>
                        </div>
                        <div className="heading col-md-9 mt-1">
                            <div>
                                <h4 className='Profile'>Profile</h4>
                                <i className="bi bi-1-circle"></i>
                            </div>
                            <div className="panel_s mt-3">
                                <div className="panel-body">
                                    <input type="hidden" name="isedit" defaultValue />
                                    <input type="hidden" name="userid" defaultValue={114} />
                                    <div className="clearfix" />
                                    <div>
                                        <div className="tab-content">
                                            <h4 className="customer-profile-group-heading"></h4>
                                            <div className="row mt-1">
                                                <form action="https://ixiono.com/crm/admin/clients/client/114" className="client-form" autoComplete="off" method="post" acceptCharset="utf-8" noValidate="novalidate">
                                                    <input type="hidden" name="csrf_token_name" defaultValue="ecc87d73aba9882ae80b07e8d2fd90ec" />
                                                    <div className="additional"/>
                                                    <div className="col-md-12 mt-1">
                                                        <div className="horizontal-scrollable-tabs mt-1">
                                                            <div className="scroller arrow-left" style={{ display: 'none' }}><i className="fa fa-angle-left" /></div>
                                                            <div className="scroller arrow-right" style={{ display: 'none' }}><i className="fa fa-angle-right" /></div>
                                                            <div className="horizontal-tabs mt-0">
                                                                <ul className="nav nav-tabs profile-tabs row customer-profile-tabs nav-tabs-horizontal" role="tablist">
                                                                    <li role="presentation" className="active">
                                                                        <a href="https://ixiono.com/crm/admin/clients/client/114#contact_info" aria-controls="contact_info" role="tab" data-toggle="tab" style={{ fontFamily: 'Roboto', fontSize: '14px', fontWeight: 600, color: '#4E7AED' }}>
                                                                            Customer Details </a>
                                                                    </li>
                                                                    <li role="presentation">
                                                                        <a href="https://ixiono.com/crm/admin/clients/client/114#billing_and_shipping" aria-controls="billing_and_shipping" role="tab" data-toggle="tab" style={{ fontFamily: 'Roboto', fontSize: '14px', fontWeight: 600, color: '#1E293B' }}>
                                                                            Billing &amp; Shipping </a>
                                                                    </li>
                                                                    <li role="presentation">
                                                                        <a href="https://ixiono.com/crm/admin/clients/client/114#customer_admins" aria-controls="customer_admins" role="tab" data-toggle="tab" style={{ fontFamily: 'Roboto', fontSize: '14px', fontWeight: 600, color: '#1E293B' }}>
                                                                            Customer Admins</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <hr/>
                                                        </div>
                                                        <div className="tab-content mt-2">
                                                            <div role="tabpanel" className="tab-pane active" id="contact_info">
                                                                <div className="row mt-2">
                                                                    <div className="col-md-12 " id="client-show-primary-contact-wrapper">
                                                                        <div className=" checkbox-info mt-1">
                                                                            <input type="checkbox" name="show_primary_contact" defaultValue={1} id="show_primary_contact" />
                                                                            <label htmlFor="show_primary_contact">
                                                                                <h6 className='checkdata'>Show primary contact full name on Invoices, Estimates, Payments, Credit Notes</h6></label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-8">

                                                                        <div className="form-group" app-field-wrapper="company">
                                                                            <label htmlFor="company" className="control-label" style={{ fontWeight: 500 }}> <small className="req text-danger">* </small>Company</label>
                                                                            <input type="text" id="company" name="company" className="form-control" placeholder=" Bender and Sons" />
                                                                        </div>
                                                                        <div id="company_exists_info" className="hide" />
                                                                        <div className="form-group" app-field-wrapper="vat">
                                                                            <label htmlFor="vat" className="control-label"
                                                                                style={{ fontWeight: 500 }}>VAT Number</label>
                                                                            <input type="text" id="vat" name="vat"
                                                                                className="form-control" />
                                                                        </div>
                                                                        <div className="form-group" app-field-wrapper="phonenumber">
                                                                            <label htmlFor="phonenumber" className="control-label" style={{ fontWeight: 500 }}>Phone</label>
                                                                            <input type="text" id="phonenumber" name="phonenumber" className="form-control" placeholder="9768768578" />
                                                                        </div>

                                                                        <div className="form-group" app-field-wrapper="website">
                                                                            <label htmlFor="website" className="control-label"
                                                                                style={{ fontWeight: 500 }}>Website</label>
                                                                            <div className="input-group lg-3">
                                                                                <input type="text" id="website" name="website" className="form-control webicon" placeholder="demo.com" />
                                                                                <button className="gicon"><FontAwesomeIcon icon={faGlobe} /></button>
                                                                        </div>
                                                                        </div>

                                                                        <div className="form-group" app-field-wrapper="groups">
                                                                            <label htmlFor="groups" className="control-label" 
                                                                            style={{ fontWeight: 500 }}>Groups</label>
                                                                            <div className="input-group lg-3">
                                                                            <select id="groups" name="groups" className="form-select"
                                                                                data-none-selected-text="Nothing selected" data-width="100%" data-live-search=""
                                                                                tabIndex={-98}><option value={0}>High budget, low Budget</option>
                                                                                <option value={1}>Afghanistan</option>
                                                                                <option value={2}>Aland Islands</option>
                                                                                <option value={3}>Albania</option>
                                                                                </select>
                                                                                <button className="picon"><FontAwesomeIcon icon={faPlus} /></button>
                                                                                </div>
                                                                                </div>

                                                                    
                                                                        {/* <div className="form-group" app-field-wrapper="groups">
                                                                            <label htmlFor="groups" className="control-label"
                                                                             style={{ fontWeight: 500 }}>Groups</label>
                                                                            <div className="dropdown bootstrap-select bs3" style={{ width: '100%' }}>

                                                                                <div className="input-group lg-3">
                                                                                    <select id="groups" name="groups" className="form-control"

                                                                                        data-none-selected-text="Nothing selected" data-width="100%" data-live-search="true"
                                                                                        tabIndex={-98}><option value={0}>High Budget, Low Budget</option>
                                                                                        <option value={1}>NA</option>
                                                                                        <option value={2}>High Budget, Low Budget</option>
                                                                                    </select>
                                                                                    <button className="picon"><FontAwesomeIcon icon={faPlus} /></button>
                                                                                </div>
                                                                                <div className="dropdown-menu open">
                                                                                    <div className="bs-searchbox">
                                                                                        <input type="search" className="form-control"
                                                                                            autoComplete="off" role="combobox" aria-label="Search"
                                                                                            aria-controls="bs-select-5" aria-autocomplete="list" />
                                                                                    </div>
                                                                                    <div className="inner open" role="listbox" id="bs-select-5"
                                                                                        tabIndex={-1}><ul className="dropdown-menu inner "
                                                                                            role="presentation" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div> */}
                                                                    </div>
                                                                
                                                                    <div className='row d-flex'>
                                                                        <div className="col-lg-4 cur1">
                                                                            <div className="form-group" app-field-wrapper="groups">
                                                                                <label htmlFor="groups" className="control-label" style={{ fontWeight: 500 }}>? Currency</label>
                                                                                <div className="dropdown bootstrap-select bs3" style={{ width: '100%' }}>
                                                                                    <select id="groups" name="groups" className="selectpicker"
                                                                                        data-none-selected-text="Nothing selected" data-width="100%" data-live-search="true"
                                                                                        tabIndex={-98}><option value={0}>High Budge, /Low Budget</option>
                                                                                        <option value={1}>NA</option>
                                                                                        <option value={2}>High Budget, Low Budget</option>
                                                                                    </select>

                                                                                    <div className="dropdown-menu open">
                                                                                        <div className="bs-searchbox">
                                                                                            <input type="search" className="form-control"
                                                                                                autoComplete="off" role="combobox" aria-label="Search"
                                                                                                aria-controls="bs-select-4" aria-autocomplete="list" />
                                                                                        </div>
                                                                                        <div className="inner open" role="listbox" id="bs-select-5"
                                                                                            tabIndex={-1}><ul className="dropdown-menu inner "
                                                                                                role="presentation" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4 cur1">
                                                                            <div className="form-group k-default" app-field-wrapper="Default Language">
                                                                                <label htmlFor="groups" className="control-label" style={{ fontWeight: 500 }}>Default Language</label>
                                                                                <div className="dropdown bootstrap-select bs3" style={{ width: '100%' }}>
                                                                                    <select id="default Language" name="default Language" className="selectpicker"
                                                                                        data-none-selected-text="Nothing selected" data-width="100%" data-live-search="true"
                                                                                        tabIndex={-98}><option value={0}>System Default</option>
                                                                                        <option value={1}>NA</option>
                                                                                        <option value={2}>High Budget, Low Budget</option>
                                                                                    </select>

                                                                                    <div className="dropdown-menu open">
                                                                                        <div className="bs-searchbox">
                                                                                            <input type="search" className="form-control"
                                                                                                autoComplete="off" role="combobox" aria-label="Search"
                                                                                                aria-controls="bs-select-4" aria-autocomplete="list" />
                                                                                        </div>
                                                                                        <div className="inner open" role="listbox" id="bs-select-5"
                                                                                            tabIndex={-1}><ul className="dropdown-menu inner "
                                                                                                role="presentation" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    {/* <div className="form-group" app-field-wrapper="groups">
                                                                            <div className="row-lg-10 d-flex">
                                                                                <div className="col-sm-5">
                                                                                    <label htmlFor="groups" className="control-label"
                                                                                        style={{ fontWeight: 600 }}><span>$ <span> </span>Currency</span></label>
                                                                                    <select class="form-select" aria-label="Default select example">
                                                                                        <span className="input-group-text" id="basic-addon2">@</span>
                                                                                        <option selected>Open this select menu </option>
                                                                                        <option value="1">One</option>
                                                                                        <option value="2">Two</option>
                                                                                        <option value="3">Three</option>
                                                                                    </select>
                                                                                </div>
                                                                                <div className="col-sm-5">
                                                                                    <label htmlFor="groups" className="control-label"
                                                                                        style={{ fontWeight: 600 }}>Default Language</label>
                                                                                    <select class="form-select" aria-label="Default select example">
                                                                                        <span className="input-group-text" id="basic-addon2">@</span>
                                                                                        <option selected>Open this select menu </option>
                                                                                        <option value="1">One</option>
                                                                                        <option value="2">Two</option>
                                                                                        <option value="3">Three</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div> */}

                                                                    <div className="col-md-8">
                                                                        <div className="form-group" app-field-wrapper="address">
                                                                            <label htmlFor="address" className="control-label" style={{ fontWeight: 500 }}>Address</label>
                                                                            <textarea id="address" name="address" className="form-control" rows={4} placeholder="5721 Stanton Shoal Apt. 266" />
                                                                        </div>
                                                                        <div className="form-group" app-field-wrapper="city">
                                                                            <label htmlFor="city" className="control-label" style={{ fontWeight: 500 }}>City</label>
                                                                            <input type="text" id="city" name="city" className="form-control" placeholder="BlockShire" />
                                                                        </div>
                                                                        <div className="form-group" app-field-wrapper="state">
                                                                            <label htmlFor="state" className="control-label" style={{ fontWeight: 500 }}>State</label>
                                                                            <input type="text" id="state" name="state" className="form-control" placeholder="Texas" />
                                                                        </div>
                                                                        <div className="form-group" app-field-wrapper="zip">
                                                                            <label htmlFor="zip"
                                                                            className="control-label" style={{ fontWeight: 500 }}>Zip Code</label>
                                                                            <input type="text" id="zip" name="zip" className="form-control" placeholder="50532" />
                                                                        </div>
                                                                        <div className="form-group" app-field-wrapper="country">
                                                                            <label htmlFor="country" className="control-label" style={{ fontWeight: 500 }}>Country</label>
                                                                            {/* <div className="dropdown bootstrap-select bs3" style={{ width: '100%' }}> */}
                                                                            <select id="country" name="country" className="form-select"
                                                                                data-none-selected-text="Nothing selected" data-width="100%" data-live-search="true"
                                                                                tabIndex={-98}><option value />
                                                                                <option value={1}>Afghanistan</option>
                                                                                <option value={2}>Aland Islands</option>
                                                                                <option value={3}>Albania</option>
                                                                                <option value={4}>Algeria</option>
                                                                                <option value={5}>American Samoa</option>
                                                                                <option value={6}>Andorra</option>
                                                                                <option value={7}>Angola</option>
                                                                                <option value={8}>Anguilla</option>
                                                                                <option value={9}>Antarctica</option>
                                                                                <option value={10}>Antigua and Barbuda</option>
                                                                                <option value={11}>Argentina</option>
                                                                                <option value={12}>Armenia</option>
                                                                                <option value={13}>Aruba</option>
                                                                                <option value={14}>Australia</option>
                                                                                <option value={15}>Austria</option>
                                                                                <option value={16}>Azerbaijan</option>
                                                                                <option value={17}>Bahamas</option>
                                                                                <option value={18}>Bahrain</option>
                                                                                <option value={19}>Bangladesh</option>
                                                                                <option value={20}>Barbados</option>
                                                                                <option value={21}>Belarus</option>
                                                                                <option value={22}>Belgium</option>
                                                                                <option value={23}>Belize</option>
                                                                                <option value={24}>Benin</option>
                                                                                <option value={25}>Bermuda</option>
                                                                                <option value={26}>Bhutan</option>
                                                                                <option value={27}>Bolivia</option>
                                                                                <option value={28}>Bonaire, Sint Eustatius and Saba</option>
                                                                                <option value={29}>Bosnia and Herzegovina</option>
                                                                                <option value={30}>Botswana</option>
                                                                                <option value={31}>Bouvet Island</option>
                                                                                <option value={32}>Brazil</option>
                                                                                <option value={33}>British Indian Ocean Territory</option>
                                                                                <option value={34}>Brunei</option>
                                                                                <option value={35}>Bulgaria</option>
                                                                                <option value={36}>Burkina Faso</option>
                                                                                <option value={37}>Burundi</option>
                                                                                <option value={38}>Cambodia</option>
                                                                                <option value={39}>Cameroon</option>
                                                                                <option value={40}>Canada</option>
                                                                                <option value={41}>Cape Verde</option>
                                                                                <option value={42}>Cayman Islands</option>
                                                                                <option value={43}>Central African Republic</option>
                                                                                <option value={44}>Chad</option>
                                                                                <option value={45}>Chile</option>
                                                                                <option value={46}>China</option>
                                                                                <option value={47}>Christmas Island</option>
                                                                                <option value={48}>Cocos (Keeling) Islands</option>
                                                                                <option value={49}>Colombia</option>
                                                                                <option value={50}>Comoros</option>
                                                                                <option value={51}>Congo</option>
                                                                                <option value={52}>Cook Islands</option>
                                                                                <option value={53}>Costa Rica</option>
                                                                                <option value={54}>Cote d'ivoire (Ivory Coast)</option>
                                                                                <option value={55}>Croatia</option>
                                                                                <option value={56}>Cuba</option>
                                                                                <option value={57}>Curacao</option>
                                                                                <option value={58}>Cyprus</option>
                                                                                <option value={59}>Czech Republic</option>
                                                                                <option value={60}>Democratic Republic of the Congo</option>
                                                                                <option value={61}>Denmark</option><option value={62}>Djibouti</option>
                                                                                <option value={63}>Dominica</option>
                                                                                <option value={64}>Dominican Republic</option>
                                                                                <option value={65}>Ecuador</option>
                                                                                <option value={66}>Egypt</option>
                                                                                <option value={67}>El Salvador</option>
                                                                                <option value={68}>Equatorial Guinea</option>
                                                                                <option value={69}>Eritrea</option>
                                                                                <option value={70}>Estonia</option>
                                                                                <option value={71}>Ethiopia</option>
                                                                                <option value={72}>Falkland Islands (Malvinas)</option>
                                                                                <option value={73}>Faroe Islands</option><option
                                                                                    value={74}>Fiji</option>
                                                                                <option value={75}>Finland</option>
                                                                                <option value={76}>France</option>
                                                                                <option value={77}>French Guiana</option>
                                                                                <option value={78}>French Polynesia</option>
                                                                                <option value={79}>French Southern Territories</option>
                                                                                <option value={80}>Gabon</option>
                                                                                <option value={81}>Gambia</option>
                                                                                <option value={82}>Georgia</option>
                                                                                <option value={83}>Germany</option>
                                                                                <option value={84}>Ghana</option>
                                                                                <option value={85}>Gibraltar</option>
                                                                                <option value={86}>Greece</option>
                                                                                <option value={87}>Greenland</option>
                                                                                <option value={88}>Grenada</option>
                                                                                <option value={89}>Guadaloupe</option>
                                                                                <option value={90}>Guam</option>
                                                                                <option value={91}>Guatemala</option>
                                                                                <option value={92}>Guernsey</option>
                                                                                <option value={93}>Guinea</option>
                                                                                <option value={94}>Guinea-Bissau</option>
                                                                                <option value={95}>Guyana</option>
                                                                                <option value={96}>Haiti</option>
                                                                                <option value={97}>Heard Island and McDonald Islands</option>
                                                                                <option value={98}>Honduras</option><option value={99}>Hong Kong</option>
                                                                                <option value={100}>Hungary</option>
                                                                                <option value={101}>Iceland</option>
                                                                                <option value={102}>India</option>
                                                                                <option value={103}>Indonesia</option>
                                                                                <option value={104}>Iran</option>
                                                                                <option value={105}>Iraq</option>
                                                                                <option value={106}>Ireland</option>
                                                                                <option value={107}>Isle of Man</option>
                                                                                <option value={108}>Israel</option>
                                                                                <option value={109}>Italy</option>
                                                                                <option value={110}>Jamaica</option>
                                                                                <option value={111}>Japan</option>
                                                                                <option value={112}>Jersey</option>
                                                                                <option value={113}>Jordan</option>
                                                                                <option value={114}>Kazakhstan</option>
                                                                                <option value={115}>Kenya</option>
                                                                                <option value={116}>Kiribati</option>
                                                                                <option value={117}>Kosovo</option>
                                                                                <option value={118}>Kuwait</option>
                                                                                <option value={119}>Kyrgyzstan</option>
                                                                                <option value={120}>Laos</option>
                                                                                <option value={121}>Latvia</option>
                                                                                <option value={122}>Lebanon</option>
                                                                                <option value={123}>Lesotho</option>
                                                                                <option value={124}>Liberia</option>
                                                                                <option value={125}>Libya</option>
                                                                                <option value={126}>Liechtenstein</option>
                                                                                <option value={127}>Lithuania</option>
                                                                                <option value={128}>Luxembourg</option>
                                                                                <option value={129}>Macao</option>
                                                                                <option value={131}>Madagascar</option>
                                                                                <option value={132}>Malawi</option>
                                                                                <option value={133}>Malaysia</option>
                                                                                <option value={134}>Maldives</option>
                                                                                <option value={135}>Mali</option>
                                                                                <option value={136}>Malta</option>
                                                                                <option value={137}>Marshall Islands</option>
                                                                                <option value={138}>Martinique</option>
                                                                                <option value={139}>Mauritania</option>
                                                                                <option value={140}>Mauritius</option>
                                                                                <option value={141}>Mayotte</option>
                                                                                <option value={142}>Mexico</option>
                                                                                <option value={143}>Micronesia</option>
                                                                                <option value={144}>Moldava</option>
                                                                                <option value={145}>Monaco</option>
                                                                                <option value={146}>Mongolia</option>
                                                                                <option value={147}>Montenegro</option>
                                                                                <option value={148}>Montserrat</option>
                                                                                <option value={149}>Morocco</option>
                                                                                <option value={150}>Mozambique</option>
                                                                                <option value={151}>Myanmar (Burma)</option>
                                                                                <option value={152}>Namibia</option>
                                                                                <option value={153}>Nauru</option>
                                                                                <option value={154}>Nepal</option>
                                                                                <option value={155}>Netherlands</option>
                                                                                <option value={156}>New Caledonia</option>
                                                                                <option value={157}>New Zealand</option>
                                                                                <option value={158}>Nicaragua</option>
                                                                                <option value={159}>Niger</option>
                                                                                <option value={160}>Nigeria</option>
                                                                                <option value={161}>Niue</option>
                                                                                <option value={162}>Norfolk Island</option>
                                                                                <option value={163}>North Korea</option>
                                                                                <option value={130}>North Macedonia</option>
                                                                                <option value={164}>Northern Mariana Islands</option>
                                                                                <option value={165}>Norway</option>
                                                                                <option value={166}>Oman</option>
                                                                                <option value={167}>Pakistan</option>
                                                                                <option value={168}>Palau</option>
                                                                                <option value={169}>Palestine</option>
                                                                                <option value={170}>Panama</option>
                                                                                <option value={171}>Papua New Guinea</option>
                                                                                <option value={172}>Paraguay</option>
                                                                                <option value={173}>Peru</option>
                                                                                <option value={174}>Philippines</option>
                                                                                <option value={175}>Pitcairn</option>
                                                                                <option value={176}>Poland</option>
                                                                                <option value={177}>Portugal</option>
                                                                                <option value={178}>Puerto Rico</option>
                                                                                <option value={179}>Qatar</option>
                                                                                <option value={180}>Reunion</option>
                                                                                <option value={181}>Romania</option>
                                                                                <option value={182}>Russia</option>
                                                                                <option value={183}>Rwanda</option>
                                                                                <option value={184}>Saint Barthelemy</option>
                                                                                <option value={185}>Saint Helena</option>
                                                                                <option value={186}>Saint Kitts and Nevis</option>
                                                                                <option value={187}>Saint Lucia</option>
                                                                                <option value={188}>Saint Martin</option>
                                                                                <option value={189}>Saint Pierre and Miquelon</option>
                                                                                <option value={190}>Saint Vincent and the Grenadines</option>
                                                                                <option value={191}>Samoa</option>
                                                                                <option value={192}>San Marino</option>
                                                                                <option value={193}>Sao Tome and Principe</option>
                                                                                <option value={194}>Saudi Arabia</option>
                                                                                <option value={195}>Senegal</option>
                                                                                <option value={196}>Serbia</option>
                                                                                <option value={197}>Seychelles</option>
                                                                                <option value={198}>Sierra Leone</option>
                                                                                <option value={199}>Singapore</option>
                                                                                <option value={200}>Sint Maarten</option>
                                                                                <option value={201}>Slovakia</option>
                                                                                <option value={202}>Slovenia</option>
                                                                                <option value={203}>Solomon Islands</option>
                                                                                <option value={204}>Somalia</option>
                                                                                <option value={205}>South Africa</option>
                                                                                <option value={206}>South Georgia and the South Sandwich Islands</option>
                                                                                <option value={207}>South Korea</option><option value={208}>South Sudan</option>
                                                                                <option value={209}>Spain</option><option value={210}>Sri Lanka</option>
                                                                                <option value={211}>Sudan</option><option value={212}>Suriname</option>
                                                                                <option value={213}>Svalbard and Jan Mayen</option>
                                                                                <option value={214}>Swaziland</option>
                                                                                <option value={215}>Sweden</option>
                                                                                <option value={216}>Switzerland</option>
                                                                                <option value={217}>Syria</option>
                                                                                <option value={218}>Taiwan</option>
                                                                                <option value={219}>Tajikistan</option>
                                                                                <option value={220}>Tanzania</option>
                                                                                <option value={221}>Thailand</option>
                                                                                <option value={222}>Timor-Leste (East Timor)</option>
                                                                                <option value={223}>Togo</option>
                                                                                <option value={224}>Tokelau</option>
                                                                                <option value={225}>Tonga</option>
                                                                                <option value={226}>Trinidad and Tobago</option>
                                                                                <option value={227}>Tunisia</option>
                                                                                <option value={228}>Turkey</option>
                                                                                <option value={229}>Turkmenistan</option>
                                                                                <option value={230}>Turks and Caicos Islands</option>
                                                                                <option value={231}>Tuvalu</option>
                                                                                <option value={232}>Uganda</option>
                                                                                <option value={233}>Ukraine</option>
                                                                                <option value={234}>United Arab Emirates</option>
                                                                                <option value={235}>United Kingdom</option>
                                                                                <option value={236} selected>United States</option>
                                                                                <option value={237}>United States Minor Outlying Islands</option>
                                                                                <option value={238}>Uruguay</option>
                                                                                <option value={239}>Uzbekistan</option>
                                                                                <option value={240}>Vanuatu</option>
                                                                                <option value={241}>Vatican City</option>
                                                                                <option value={242}>Venezuela</option>
                                                                                <option value={243}>Vietnam</option>
                                                                                <option value={244}>Virgin Islands, British</option>
                                                                                <option value={245}>Virgin Islands, US</option>
                                                                                <option value={246}>Wallis and Futuna</option>
                                                                                <option value={247}>Western Sahara</option>
                                                                                <option value={248}>Yemen</option>
                                                                                <option value={249}>Zambia</option>
                                                                                <option value={250}>Zimbabwe</option>
                                                                            </select>

                                                                            {/* <div className="dropdown-menu open">
                                                                                <div className="bs-searchbox">
                                                                                    <input type="search" className="form-control"
                                                                                        autoComplete="off" role="combobox" aria-label="Search"
                                                                                        aria-controls="bs-select-5" aria-autocomplete="list" />
                                                                                </div>
                                                                                <div className="inner open" role="listbox" id="bs-select-5"
                                                                                    tabIndex={-1}>
                                                                                    <ul className="dropdown-menu inner "
                                                                                        role="presentation" />
                                                                                </div>
                                                                            </div> */}
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <div role="tabpanel" className="tab-pane" id="customer_admins">
                                                                <a href="https://ixiono.com/crm/admin/clients/client/114#"
                                                                    data-toggle="modal" data-target="#customer_admins_assign"
                                                                    className="btn btn-info mbot30">Assign admin</a>
                                                                <div id="DataTables_Table_0_wrapper"
                                                                    className="dataTables_wrapper form-inline dt-bootstrap no-footer app_dt_empty">
                                                                    <div className="row" />
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                        <div className="dataTables_length" id="DataTables_Table_0_length">
                                                                            <label>
                                                                                <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0"
                                                                                className="form-control input-sm">
                                                                                <option value={10}>10</option>
                                                                                <option value={25}>25</option>
                                                                                <option value={50}>50</option>
                                                                                <option value={100}>100</option>
                                                                                <option value={-1}>All</option>
                                                                            </select>
                                                                            </label>
                                                                            </div>
                                                                        <div className="dt-buttons btn-group">
                                                                            <button className="btn btn-default buttons-collection btn-default-dt-options"
                                                                                tabIndex={0} aria-controls="DataTables_Table_0" type="button"
                                                                                aria-haspopup="true" aria-expanded="false"><span>Export</span>
                                                                            </button> </div></div><div className="col-md-6">
                                                                            <div id="DataTables_Table_0_filter" className="dataTables_filter">
                                                                                <label><div className="input-group">
                                                                                    <span className="input-group-addon">
                                                                                        <span className="fa fa-search" /></span>
                                                                                    <input type="search" className="form-control input-sm"
                                                                                        placeholder="Search..." aria-controls="DataTables_Table_0" />
                                                                                </div></label></div></div><div id="DataTables_Table_0_processing"
                                                                                    className="dataTables_processing panel panel-default" style={{ display: 'none' }}>
                                                                            <div className="dt-loader" /></div></div><div className="table-responsive">
                                                                        <table className="table dt-table dt-inline dataTable no-footer"
                                                                            id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
                                                                            <thead>
                                                                                <tr role="row"><th className="sorting sorting_asc" tabIndex={0}
                                                                                    aria-controls="DataTables_Table_0" rowSpan={1}
                                                                                    colSpan={1} aria-sort="ascending"
                                                                                    aria-label="Staff Member activate to sort column descending">Staff Member</th>
                                                                                    <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0"
                                                                                        rowSpan={1} colSpan={1} aria-label="Date Assigned activate to sort column ascending">Date Assigned</th><th className="sorting not-export"
                                                                                            tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1}
                                                                                            colSpan={1} aria-label="Options activate to sort column ascending">Options</th></tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr className="odd">
                                                                                    <td valign="top" colSpan={3}
                                                                                        className="dataTables_empty">No entries found</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table></div>
                                                                    <div className="row"><div className="col-md-4">
                                                                        <div className="dataTables_info" id="DataTables_Table_0_info"
                                                                            role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div>
                                                                    </div></div><div className="row"><div id="colvis" />
                                                                        <div id className="dt-page-jump" /><div className="dataTables_paginate paging_simple_numbers"
                                                                            id="DataTables_Table_0_paginate"><ul className="pagination">
                                                                                <li className="paginate_button previous disabled" id="DataTables_Table_0_previous">
                                                                                    <a href="https://ixiono.com/crm/admin/clients/client/114#"
                                                                                        aria-controls="DataTables_Table_0" data-dt-idx={0} tabIndex={0}>Previous</a>
                                                                                </li><li className="paginate_button next disabled" id="DataTables_Table_0_next">
                                                                                    <a href="https://ixiono.com/crm/admin/clients/client/114#"
                                                                                        aria-controls="DataTables_Table_0" data-dt-idx={1}
                                                                                        tabIndex={0}>Next</a></li></ul></div></div></div>
                                                            </div> */}
                                                            {/* <div role="tabpanel" className="tab-pane" id="billing_and_shipping">
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div className="row">
                                                                            <div className="col-md-6">
                                                                                <h4 className="no-mtop">Billing Address <a href="https://ixiono.com/crm/admin/clients/client/114#" className="pull-right billing-same-as-customer"><small className="font-medium-xs">Same as Customer Info</small></a></h4>
                                                                                <hr />
                                                                                <div className="form-group" app-field-wrapper="billing_street">
                                                                                    <label htmlFor="billing_street" className="control-label"
                                                                                        style={{ fontWeight: 600 }}>Street</label><textarea
                                                                                        id="billing_street" name="billing_street"
                                                                                        className="form-control" rows={4} defaultValue={""} /></div>
                                                                                <div className="form-group" app-field-wrapper="billing_city">
                                                                                    <label htmlFor="billing_city" className="control-label"
                                                                                        style={{ fontWeight: 600 }}>City</label><input type="text"
                                                                                            id="billing_city" name="billing_city" className="form-control" defaultValue /></div>
                                                                                <div className="form-group" app-field-wrapper="billing_state">
                                                                                    <label htmlFor="billing_state" className="control-label"
                                                                                        style={{ fontWeight: 600 }}>State</label><input type="text" id="billing_state" name="billing_state" className="form-control" defaultValue />
                                                                                </div> <div className="form-group" app-field-wrapper="billing_zip">
                                                                                    <label htmlFor="billing_zip" className="control-label"
                                                                                        style={{ fontWeight: 600 }}>Zip Code</label><input type="text"
                                                                                            id="billing_zip" name="billing_zip" className="form-control" defaultValue /></div>                                                <div className="form-group" app-field-wrapper="billing_country"><label htmlFor="billing_country" className="control-label" style={{ fontWeight: 600 }}>Country</label><div className="dropdown bootstrap-select bs3" style={{ width: '100%' }}><select id="billing_country" name="billing_country" className="selectpicker" data-none-selected-text="Nothing selected" data-width="100%" data-live-search="true" tabIndex={-98}><option value /><option value={1}>Afghanistan</option><option value={2}>Aland Islands</option><option value={3}>Albania</option><option value={4}>Algeria</option><option value={5}>American Samoa</option><option value={6}>Andorra</option><option value={7}>Angola</option><option value={8}>Anguilla</option><option value={9}>Antarctica</option><option value={10}>Antigua and Barbuda</option><option value={11}>Argentina</option><option value={12}>Armenia</option><option value={13}>Aruba</option><option value={14}>Australia</option><option value={15}>Austria</option><option value={16}>Azerbaijan</option><option value={17}>Bahamas</option><option value={18}>Bahrain</option><option value={19}>Bangladesh</option><option value={20}>Barbados</option><option value={21}>Belarus</option><option value={22}>Belgium</option><option value={23}>Belize</option><option value={24}>Benin</option><option value={25}>Bermuda</option><option value={26}>Bhutan</option><option value={27}>Bolivia</option><option value={28}>Bonaire, Sint Eustatius and Saba</option><option value={29}>Bosnia and Herzegovina</option><option value={30}>Botswana</option><option value={31}>Bouvet Island</option><option value={32}>Brazil</option><option value={33}>British Indian Ocean Territory</option><option value={34}>Brunei</option><option value={35}>Bulgaria</option><option value={36}>Burkina Faso</option>
                                                                                                <option value={37}>Burundi</option>
                                                                                                <option value={38}>Cambodia</option>
                                                                                                <option value={39}>Cameroon</option>
                                                                                                <option value={40}>Canada</option>
                                                                                                <option value={41}>Cape Verde</option>
                                                                                                <option value={42}>Cayman Islands</option>
                                                                                                <option value={43}>Central African Republic</option>
                                                                                                <option value={44}>Chad</option><option value={45}>Chile</option>
                                                                                                <option value={46}>China</option>
                                                                                                <option value={47}>Christmas Island</option>
                                                                                                <option value={48}>Cocos (Keeling) Islands</option>
                                                                                                <option value={49}>Colombia</option>
                                                                                                <option value={50}>Comoros</option>
                                                                                                <option value={51}>Congo</option>
                                                                                                <option value={52}>Cook Islands</option>
                                                                                                <option value={53}>Costa Rica</option>
                                                                                                <option value={54}>Cote d'ivoire (Ivory Coast)</option>
                                                                                                <option value={55}>Croatia</option>
                                                                                                <option value={56}>Cuba</option>
                                                                                                <option value={57}>Curacao</option>
                                                                                                <option value={58}>Cyprus</option>
                                                                                                <option value={59}>Czech Republic</option>
                                                                                                <option value={60}>Democratic Republic of the Congo</option>
                                                                                                <option value={61}>Denmark</option>
                                                                                                <option value={62}>Djibouti</option>
                                                                                                <option value={63}>Dominica</option>
                                                                                                <option value={64}>Dominican Republic</option>
                                                                                                <option value={65}>Ecuador</option>
                                                                                                <option value={66}>Egypt</option>
                                                                                                <option value={67}>El Salvador</option>
                                                                                                <option value={68}>Equatorial Guinea</option>
                                                                                                <option value={69}>Eritrea</option>
                                                                                                <option value={70}>Estonia</option>
                                                                                                <option value={71}>Ethiopia</option>
                                                                                                <option value={72}>Falkland Islands (Malvinas)</option>
                                                                                                <option value={73}>Faroe Islands</option>
                                                                                                <option value={74}>Fiji</option>
                                                                                                <option value={75}>Finland</option>
                                                                                                <option value={76}>France</option>
                                                                                                <option value={77}>French Guiana</option>
                                                                                                <option value={78}>French Polynesia</option>
                                                                                                <option value={79}>French Southern Territories</option>
                                                                                                <option value={80}>Gabon</option>
                                                                                                <option value={81}>Gambia</option>
                                                                                                <option value={82}>Georgia</option>
                                                                                                <option value={83}>Germany</option>
                                                                                                <option value={84}>Ghana</option>
                                                                                                <option value={85}>Gibraltar</option>
                                                                                                <option value={86}>Greece</option>
                                                                                                <option value={87}>Greenland</option>
                                                                                                <option value={88}>Grenada</option>
                                                                                                <option value={89}>Guadaloupe</option>
                                                                                                <option value={90}>Guam</option>
                                                                                                <option value={91}>Guatemala</option>
                                                                                                <option value={92}>Guernsey</option>
                                                                                                <option value={93}>Guinea</option>
                                                                                                <option value={94}>Guinea-Bissau</option>
                                                                                                <option value={95}>Guyana</option>
                                                                                                <option value={96}>Haiti</option>
                                                                                                <option value={97}>Heard Island and McDonald Islands</option>
                                                                                                <option value={98}>Honduras</option>
                                                                                                <option value={99}>Hong Kong</option>
                                                                                                <option value={100}>Hungary</option>
                                                                                                <option value={101}>Iceland</option>
                                                                                                <option value={102}>India</option>
                                                                                                <option value={103}>Indonesia</option>
                                                                                                <option value={104}>Iran</option>
                                                                                                <option value={105}>Iraq</option>
                                                                                                <option value={106}>Ireland</option>
                                                                                                <option value={107}>Isle of Man</option>
                                                                                                <option value={108}>Israel</option>
                                                                                                <option value={109}>Italy</option>
                                                                                                <option value={110}>Jamaica</option>
                                                                                                <option value={111}>Japan</option>
                                                                                                <option value={112}>Jersey</option>
                                                                                                <option value={113}>Jordan</option>
                                                                                                <option value={114}>Kazakhstan</option>
                                                                                                <option value={115}>Kenya</option>
                                                                                                <option value={116}>Kiribati</option>
                                                                                                <option value={117}>Kosovo</option>
                                                                                                <option value={118}>Kuwait</option>
                                                                                                <option value={119}>Kyrgyzstan</option>
                                                                                                <option value={120}>Laos</option>
                                                                                                <option value={121}>Latvia</option>
                                                                                                <option value={122}>Lebanon</option>
                                                                                                <option value={123}>Lesotho</option>
                                                                                                <option value={124}>Liberia</option>
                                                                                                <option value={125}>Libya</option>
                                                                                                <option value={126}>Liechtenstein</option>
                                                                                                <option value={127}>Lithuania</option>
                                                                                                <option value={128}>Luxembourg</option>
                                                                                                <option value={129}>Macao</option>
                                                                                                <option value={131}>Madagascar</option>
                                                                                                <option value={132}>Malawi</option>
                                                                                                <option value={133}>Malaysia</option>
                                                                                                <option value={134}>Maldives</option>
                                                                                                <option value={135}>Mali</option>
                                                                                                <option value={136}>Malta</option>
                                                                                                <option value={137}>Marshall Islands</option>
                                                                                                <option value={138}>Martinique</option>
                                                                                                <option value={139}>Mauritania</option>
                                                                                                <option value={140}>Mauritius</option>
                                                                                                <option value={141}>Mayotte</option>
                                                                                                <option value={142}>Mexico</option>
                                                                                                <option value={143}>Micronesia</option>
                                                                                                <option value={144}>Moldava</option>
                                                                                                <option value={145}>Monaco</option>
                                                                                                <option value={146}>Mongolia</option>
                                                                                                <option value={147}>Montenegro</option>
                                                                                                <option value={148}>Montserrat</option>
                                                                                                <option value={149}>Morocco</option>
                                                                                                <option value={150}>Mozambique</option>
                                                                                                <option value={151}>Myanmar (Burma)</option>
                                                                                                <option value={152}>Namibia</option>
                                                                                                <option value={153}>Nauru</option>
                                                                                                <option value={154}>Nepal</option>
                                                                                                <option value={155}>Netherlands</option>
                                                                                                <option value={156}>New Caledonia</option>
                                                                                                <option value={157}>New Zealand</option>
                                                                                                <option value={158}>Nicaragua</option>
                                                                                                <option value={159}>Niger</option>
                                                                                                <option value={160}>Nigeria</option>
                                                                                                <option value={161}>Niue</option>
                                                                                                <option value={162}>Norfolk Island</option>
                                                                                                <option value={163}>North Korea</option>
                                                                                                <option value={130}>North Macedonia</option>
                                                                                                <option value={164}>Northern Mariana Islands</option>
                                                                                                <option value={165}>Norway</option>
                                                                                                <option value={166}>Oman</option>
                                                                                                <option value={167}>Pakistan</option>
                                                                                                <option value={168}>Palau</option>
                                                                                                <option value={169}>Palestine</option>
                                                                                                <option value={170}>Panama</option>
                                                                                                <option value={171}>Papua New Guinea</option>
                                                                                                <option value={172}>Paraguay</option>
                                                                                                <option value={173}>Peru</option>
                                                                                                <option value={174}>Philippines</option>
                                                                                                <option value={175}>Pitcairn</option>
                                                                                                <option value={176}>Poland</option>
                                                                                                <option value={177}>Portugal</option>
                                                                                                <option value={178}>Puerto Rico</option>
                                                                                                <option value={179}>Qatar</option>
                                                                                                <option value={180}>Reunion</option
                                                                                                ><option value={181}>Romania</option>
                                                                                                <option value={182}>Russia</option>
                                                                                                <option value={183}>Rwanda</option>
                                                                                                <option value={184}>Saint Barthelemy</option>
                                                                                                <option value={185}>Saint Helena</option>
                                                                                                <option value={186}>Saint Kitts and Nevis</option>
                                                                                                <option value={187}>Saint Lucia</option>
                                                                                                <option value={188}>Saint Martin</option>
                                                                                                <option value={189}>Saint Pierre and Miquelon</option>
                                                                                                <option value={190}>Saint Vincent and the Grenadines</option>
                                                                                                <option value={191}>Samoa</option>
                                                                                                <option value={192}>San Marino</option>
                                                                                                <option value={193}>Sao Tome and Principe</option>
                                                                                                <option value={194}>Saudi Arabia</option>
                                                                                                <option value={195}>Senegal</option>
                                                                                                <option value={196}>Serbia</option>
                                                                                                <option value={197}>Seychelles</option>
                                                                                                <option value={198}>Sierra Leone</option>
                                                                                                <option value={199}>Singapore</option>
                                                                                                <option value={200}>Sint Maarten</option>
                                                                                                <option value={201}>Slovakia</option>
                                                                                                <option value={202}>Slovenia</option>
                                                                                                <option value={203}>Solomon Islands</option>
                                                                                                <option value={204}>Somalia</option>
                                                                                                <option value={205}>South Africa</option>
                                                                                                <option value={206}>South Georgia and the South Sandwich Islands</option>
                                                                                                <option value={207}>South Korea</option>
                                                                                                <option value={208}>South Sudan</option>
                                                                                                <option value={209}>Spain</option>
                                                                                                <option value={210}>Sri Lanka</option>
                                                                                                <option value={211}>Sudan</option>
                                                                                                <option value={212}>Suriname</option>
                                                                                                <option value={213}>Svalbard and Jan May</option>
                                                                                                <option value={214}>Swaziland</option>
                                                                                                <option value={215}>Sweden</option>
                                                                                                <option value={216}>Switzerland</option>
                                                                                                <option value={217}>Syria</option>
                                                                                                <option value={218}>Taiwan</option>
                                                                                                <option value={219}>Tajikistan</option>
                                                                                                <option value={220}>Tanzania</option>
                                                                                                <option value={221}>Thailand</option>
                                                                                                <option value={222}>Timor-Leste (East Timor)</option>
                                                                                                <option value={223}>Togo</option>
                                                                                                <option value={224}>Tokelau</option>
                                                                                                <option value={225}>Tonga</option>
                                                                                                <option value={226}>Trinidad and Tobago</option>
                                                                                                <option value={227}>Tunisia</option>
                                                                                                <option value={228}>Turkey</option>
                                                                                                <option value={229}>Turkmenistan</option>
                                                                                                <option value={230}>Turks and Caicos Islands</option>
                                                                                                <option value={231}>Tuvalu</option>
                                                                                                <option value={232}>Uganda</option>
                                                                                                <option value={233}>Ukraine</option>
                                                                                                <option value={234}>United Arab Emirates</option>
                                                                                                <option value={235}>United Kingdom</option>
                                                                                                <option value={236}>United States</option>
                                                                                                <option value={237}>United States Minor Outlying Islands</option>
                                                                                                <option value={238}>Uruguay</option>
                                                                                                <option value={239}>Uzbekistan</option>
                                                                                                <option value={240}>Vanuatu</option>
                                                                                                <option value={241}>Vatican City</option>
                                                                                                <option value={242}>Venezuela</option>
                                                                                                <option value={243}>Vietnam</option>
                                                                                                <option value={244}>Virgin Islands, British</option>
                                                                                                <option value={245}>Virgin Islands, US</option>
                                                                                                <option value={246}>Wallis and Futuna</option>
                                                                                                <option value={247}>Western Sahara</option>
                                                                                                <option value={248}>Yemen</option>
                                                                                                <option value={249}>Zambia</option>
                                                                                                <option value={250}>Zimbabwe</option>
                                                                                            </select><button type="button"
                                                                                                className="btn dropdown-toggle btn-default bs-placeholder"
                                                                                                data-toggle="dropdown" role="combobox"
                                                                                                aria-owns="bs-select-6" aria-haspopup="listbox"
                                                                                                aria-expanded="false" data-id="billing_country"
                                                                                                title="Nothing selected"><div className="filter-option">
                                                                                                        <div className="filter-option-inner">
                                                                                                            <div className="filter-option-inner-inner">Nothing selected</div>
                                                                                                        </div> </div><span className="bs-caret"><span className="caret" />
                                                                                                    </span></button><div className="dropdown-menu open">
                                                                                                    <div className="bs-searchbox">
                                                                                                        <input type="search" className="form-control"
                                                                                                            autoComplete="off" role="combobox" aria-label="Search"
                                                                                                            aria-controls="bs-select-6" aria-autocomplete="list" />
                                                                                                    </div><div className="inner open" role="listbox" i
                                                                                                        d="bs-select-6" tabIndex={-1}><ul className="dropdown-menu inner "
                                                                                                            role="presentation" /></div></div></div></div>                   </div>
                                                                            <div className="col-md-6">
                                                                                <h4 className="no-mtop">
                                                                                    <i className="fa fa-question-circle"
                                                                                        data-toggle="tooltip"
                                                                                        data-title="Do not fill shipping address information if you won't use shipping address on customer invoices" />
                                                                                    Shipping Address <a href="https://ixiono.com/crm/admin/clients/client/114#"
                                                                                        className="pull-right customer-copy-billing-address">
                                                                                        <small className="font-medium-xs">Copy Billing Address</small></a>
                                                                                </h4>
                                                                                <hr />
                                                                                <div className="form-group" app-field-wrapper="shipping_street">
                                                                                    <label htmlFor="shipping_street" className="control-label" style={{ fontWeight: 600 }}>Street</label><textarea id="shipping_street" name="shipping_street" className="form-control" rows={4} defaultValue={""} /></div>
                                                                                <div className="form-group" app-field-wrapper="shipping_city"><label htmlFor="shipping_city" className="control-label" style={{ fontWeight: 600 }}>City</label><input type="text" id="shipping_city" name="shipping_city" className="form-control" defaultValue /></div>
                                                                                <div className="form-group" app-field-wrapper="shipping_state"><label htmlFor="shipping_state" className="control-label" style={{ fontWeight: 600 }}>State</label><input type="text" id="shipping_state" name="shipping_state" className="form-control" defaultValue /></div>                                                <div className="form-group" app-field-wrapper="shipping_zip"><label htmlFor="shipping_zip" className="control-label" style={{ fontWeight: 600 }}>Zip Code</label><input type="text" id="shipping_zip" name="shipping_zip" className="form-control" defaultValue /></div>                                                <div className="form-group" app-field-wrapper="shipping_country"><label htmlFor="shipping_country" className="control-label" style={{ fontWeight: 600 }}>Country</label><div className="dropdown bootstrap-select bs3" style={{ width: '100%' }}><select id="shipping_country" name="shipping_country" className="selectpicker" data-none-selected-text="Nothing selected" data-width="100%"
                                                                                    data-live-search="true" tabIndex={-98}><option value /><option value={1}>Afghanistan</option><option value={2}>Aland Islands</option><option value={3}>Albania</option><option value={4}>Algeria</option><option value={5}>American Samoa</option><option value={6}>Andorra</option><option value={7}>Angola</option><option value={8}>Anguilla</option><option value={9}>Antarctica</option><option value={10}>Antigua and Barbuda</option><option value={11}>Argentina</option><option value={12}>Armenia</option><option value={13}>Aruba</option><option value={14}>Australia</option><option value={15}>Austria</option><option value={16}>Azerbaijan</option><option value={17}>Bahamas</option><option value={18}>Bahrain</option><option value={19}>Bangladesh</option><option value={20}>Barbados</option><option value={21}>Belarus</option><option value={22}>Belgium</option><option value={23}>Belize</option><option value={24}>Benin</option><option value={25}>Bermuda</option><option value={26}>Bhutan</option><option value={27}>Bolivia</option><option value={28}>Bonaire, Sint Eustatius and Saba</option><option value={29}>Bosnia and Herzegovina</option><option value={30}>Botswana</option><option value={31}>Bouvet Island</option><option value={32}>Brazil</option><option value={33}>British Indian Ocean Territory</option><option value={34}>Brunei</option><option value={35}>Bulgaria</option><option value={36}>Burkina Faso</option><option value={37}>Burundi</option><option value={38}>Cambodia</option><option value={39}>Cameroon</option><option value={40}>Canada</option><option value={41}>Cape Verde</option><option value={42}>Cayman Islands</option><option value={43}>Central African Republic</option><option value={44}>Chad</option><option value={45}>Chile</option><option value={46}>China</option><option value={47}>Christmas Island</option><option value={48}>Cocos (Keeling) Islands</option><option value={49}>Colombia</option><option value={50}>Comoros</option><option value={51}>Congo</option><option value={52}>Cook Islands</option><option value={53}>Costa Rica</option><option
                                                                                        value={54}>Cote d'ivoire (Ivory Coast)</option><option value={55}>Croatia</option><option value={56}>Cuba</option><option value={57}>Curacao</option><option value={58}>Cyprus</option><option value={59}>Czech Republic</option><option value={60}>Democratic Republic of the Congo</option><option value={61}>Denmark</option><option value={62}>Djibouti</option><option value={63}>Dominica</option><option value={64}>Dominican Republic</option><option value={65}>Ecuador</option><option value={66}>Egypt</option><option value={67}>El Salvador</option><option value={68}>Equatorial Guinea</option><option value={69}>Eritrea</option><option value={70}>Estonia</option><option value={71}>Ethiopia</option><option value={72}>Falkland Islands (Malvinas)</option><option value={73}>Faroe Islands</option><option value={74}>Fiji</option><option value={75}>Finland</option><option value={76}>France</option><option value={77}>French Guiana</option><option value={78}>French Polynesia</option><option value={79}>French Southern Territories</option><option value={80}>Gabon</option><option value={81}>Gambia</option><option value={82}>Georgia</option><option value={83}>Germany</option><option value={84}>Ghana</option><option value={85}>Gibraltar</option><option value={86}>Greece</option><option value={87}>Greenland</option><option value={88}>Grenada</option><option value={89}>Guadaloupe</option><option value={90}>Guam</option><option value={91}>Guatemala</option><option value={92}>Guernsey</option><option value={93}>Guinea</option><option value={94}>Guinea-Bissau</option><option value={95}>Guyana</option><option value={96}>Haiti</option><option value={97}>Heard Island and McDonald Islands</option><option value={98}>Honduras</option><option value={99}>Hong Kong</option><option value={100}>Hungary</option><option value={101}>Iceland</option><option value={102}>India</option><option value={103}>Indonesia</option><option value={104}>Iran</option><option value={105}>Iraq</option><option value={106}>Ireland</option><option value={107}>Isle of Man</option><option value={108}>Israel</option><option value={109}>Italy</option><option value={110}>Jamaica</option>
                                                                                    <option value={111}>Japan</option><option value={112}>Jersey</option><option value={113}>Jordan</option><option value={114}>Kazakhstan</option><option value={115}>Kenya</option><option value={116}>Kiribati</option><option value={117}>Kosovo</option><option value={118}>Kuwait</option><option value={119}>Kyrgyzstan</option><option value={120}>Laos</option><option value={121}>Latvia</option><option value={122}>Lebanon</option><option value={123}>Lesotho</option><option value={124}>Liberia</option><option value={125}>Libya</option><option value={126}>Liechtenstein</option><option value={127}>Lithuania</option><option value={128}>Luxembourg</option><option value={129}>Macao</option><option value={131}>Madagascar</option><option value={132}>Malawi</option><option value={133}>Malaysia</option><option value={134}>Maldives</option><option value={135}>Mali</option><option value={136}>Malta</option><option value={137}>Marshall Islands</option><option value={138}>Martinique</option><option value={139}>Mauritania</option><option value={140}>Mauritius</option><option value={141}>Mayotte</option><option value={142}>Mexico</option><option value={143}>Micronesia</option><option value={144}>Moldava</option><option value={145}>Monaco</option><option value={146}>Mongolia</option><option value={147}>Montenegro</option><option value={148}>Montserrat</option><option value={149}>Morocco</option><option value={150}>Mozambique</option><option value={151}>Myanmar (Burma)</option><option value={152}>Namibia</option><option value={153}>Nauru</option><option value={154}>Nepal</option><option value={155}>Netherlands</option>
                                                                                    <option value={156}>New Caledonia</option><option value={157}>New Zealand</option><option value={158}>Nicaragua</option><option value={159}>Niger</option><option value={160}>Nigeria</option><option value={161}>Niue</option><option value={162}>Norfolk Island</option><option value={163}>North Korea</option><option value={130}>North Macedonia</option><option value={164}>Northern Mariana Islands</option><option value={165}>Norway</option><option value={166}>Oman</option><option value={167}>Pakistan</option><option value={168}>Palau</option><option value={169}>Palestine</option><option value={170}>Panama</option><option value={171}>Papua New Guinea</option><option value={172}>Paraguay</option><option value={173}>Peru</option><option value={174}>Philippines</option><option value={175}>Pitcairn</option><option value={176}>Poland</option><option value={177}>Portugal</option><option value={178}>Puerto Rico</option><option value={179}>Qatar</option><option value={180}>Reunion</option><option value={181}>Romania</option><option value={182}>Russia</option><option value={183}>Rwanda</option><option value={184}>Saint Barthelemy</option><option value={185}>Saint Helena</option><option value={186}>Saint Kitts and Nevis</option><option value={187}>Saint Lucia</option><option value={188}>Saint Martin</option><option value={189}>Saint Pierre and Miquelon</option><option value={190}>Saint Vincent and the Grenadines</option><option value={191}>Samoa</option><option value={192}>San Marino</option><option value={193}>Sao Tome and Principe</option><option value={194}>Saudi Arabia</option><option value={195}>Senegal</option><option value={196}>Serbia</option><option value={197}>Seychelles</option><option value={198}>Sierra Leone</option><option value={199}>Singapore</option><option value={200}>Sint Maarten</option><option value={201}>Slovakia
                                                                                    </option><option value={202}>Slovenia</option><option value={203}>Solomon Islands</option><option value={204}>Somalia</option><option value={205}>South Africa</option><option value={206}>South Georgia and the South Sandwich Islands</option><option value={207}>South Korea</option><option value={208}>South Sudan</option><option value={209}>Spain</option><option value={210}>Sri Lanka</option><option value={211}>Sudan</option><option value={212}>Suriname</option><option value={213}>Svalbard and Jan Mayen</option><option value={214}>Swaziland</option><option value={215}>Sweden</option><option value={216}>Switzerland</option><option value={217}>Syria</option><option value={218}>Taiwan</option><option value={219}>Tajikistan</option><option value={220}>Tanzania</option><option value={221}>Thailand</option><option value={222}>Timor-Leste (East Timor)</option><option value={223}>Togo</option><option value={224}>Tokelau</option><option value={225}>Tonga</option><option value={226}>Trinidad and Tobago</option><option value={227}>Tunisia</option><option value={228}>Turkey</option><option value={229}>Turkmenistan</option><option value={230}>Turks and Caicos Islands</option><option value={231}>Tuvalu</option><option value={232}>Uganda</option><option value={233}>Ukraine</option><option value={234}>United Arab Emirates</option><option value={235}>United Kingdom</option><option value={236}>United States</option><option value={237}>United States Minor Outlying Islands</option><option value={238}>
                                                                                        Uruguay</option><option value={239}>Uzbekistan</option><option value={240}>Vanuatu</option><option value={241}>Vatican City</option><option value={242}>Venezuela</option><option value={243}>Vietnam</option><option value={244}>Virgin Islands, British</option><option value={245}>Virgin Islands, US</option><option value={246}>Wallis and Futuna</option><option value={247}>Western Sahara</option><option value={248}>Yemen</option><option value={249}>Zambia</option><option value={250}>Zimbabwe</option></select><button type="button" className="btn dropdown-toggle btn-default bs-placeholder" data-toggle="dropdown" role="combobox" aria-owns="bs-select-7" aria-haspopup="listbox" aria-expanded="false" data-id="shipping_country" title="Nothing selected"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Nothing selected</div></div> </div><span className="bs-caret"><span className="caret" /></span></button><div className="dropdown-menu open"><div className="bs-searchbox"><input type="search" className="form-control" autoComplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-7" aria-autocomplete="list" /></div><div className="inner open" role="listbox" id="bs-select-7" tabIndex={-1}><ul className="dropdown-menu inner " role="presentation" /></div></div></div></div>                   </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div> */}
                                                        </div>
                                                    </div><div className="savebutton" style={{ float: 'right', marginRight: '2rem' }}>
                                                        <button type="submit" className="btn btn-info">Save</button>
                                                    </div>
                                                </form></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-bottom-pusher" />
                </div>
            </div>

            <div id="lead_reminder_modal" />
            <div id="lightboxOverlay" className="lightboxOverlay" style={{ display: 'none' }} />
            <div id="lightbox" className="lightbox" style={{ display: 'none' }}>
                <div className="lb-outerContainer">
                    <div className="lb-container">
                        <img className="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" />
                        <div className="lb-nav">
                            <a className="lb-prev" href="https://ixiono.com/crm/admin/clients/client/114" />
                            <a className="lb-next" href="https://ixiono.com/crm/admin/clients/client/114" /></div>
                        <div className="lb-loader"><a className="lb-cancel" /></div>
                    </div>
                </div>
                <div className="lb-dataContainer">
                    <div className="lb-data">
                        <div className="lb-details">
                            <span className="lb-caption" /><span className="lb-number" />
                        </div>
                        <div className="lb-closeContainer">
                            <a className="lb-close" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddLaserDeviceList;