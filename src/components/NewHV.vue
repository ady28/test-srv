<template>
    <div class="m-4">
        <h3 class="text-white">New Hyper-V machine</h3>

        <form-wizard class="text-white mt-3" shape="tab" color="#3498db" finishButtonText="Create server" errorColor="#c55050" @on-complete="createHVMachine">
  
        <template v-slot:step="props">
          <wizard-step :tab="props.tab"
            :transition="props.transition"
            :key="props.tab.title"
            :index="props.index"
            :errorColor="props.errorColor">
          </wizard-step>
      </template>

  
  <tab-content title="Basic settings" :before-change="beforeTab1Switch">
    <div class="card text-white bg-secondary mb-3">
      <div class="card-header">Step 1: Basic settings</div>
      <div class="card-body">
        <form>
          <label for="serverName" class="form-label">Enter a server name and press the "Check server name" button</label>
          <div class="mb-3 input-group">
            <input id="serverName" v-model="serverName" type="text" class="form-control" placeholder="Server name" aria-label="Server name" aria-describedby="button-checkServerName">
            <button v-on:click="checkServerName" class="btn" :class="{'btn-info': cheksnb_btninfo, 'btn-success': cheksnb_btnsuccess}" type="button" id="button-checkServerName" v-bind:disabled="checkServerNameDisable"><span v-if="serverNameBtnLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span v-else>Check server name</span></button>
          </div>
          <label for="serverName" class="form-label">Select a location from the dropdown list</label>
          <select v-model="location" class="form-select" aria-label="Choose location">
            <option selected value="">Select a location</option>
            <option value="DE_VIB">DE_VIB</option>
            <option value="RO_PIT">RO_PIT</option>
            <option value="MX_SLP">MX_SLP</option>
          </select>
        </form>
      </div>
    </div>
  </tab-content>
  <tab-content title="Network settings" :before-change="beforeTab2Switch">
    <div class="card text-white bg-secondary mb-3">
      <div class="card-header">Step 2: Network settings</div>
      <div class="card-body">
        <label class="form-label">Select a network to place the new VM in</label>
        <select v-model="network" class="form-select mb-3" aria-label="Choose network">
          <option value="" selected>Select a network</option>
          <option value="DE_VIB_2001">DE_VIB_2001</option>
          <option value="RO_PIT_1001">RO_PIT_1001</option>
          <option value="MX_SLP_1003">MX_SLP_1003</option>
        </select>
        <label for="serverIP" class="form-label">Enter an IP address and then press the "Check IP address" button if using a static IP</label>
        <div class="mb-3 input-group">
          <div class="input-group-text">
            <div class="form-check form-switch">
              <input v-model="dhcpIPAddress" class="form-check-input" type="checkbox" id="dhcpIPAddress">
              <label class="form-check-label" for="dhcpIPAddress">DHCP IP Address</label>
            </div>
          </div>
          <input id="serverIP" v-model="IPAddress" type="text" class="form-control" placeholder="IP address" aria-label="IP address" aria-describedby="button-checkIPAddress" v-bind:disabled="IPAddressDisable">
          <button v-on:click="checkIPAddress" class="btn" :class="{'btn-info': chekipa_btninfo, 'btn-success': chekipa_btnsuccess}" type="button" id="button-checkIPAddress" v-bind:disabled="checkIPAddressDisable"><span v-if="IPAddressBtnLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span v-else>Check IP address</span></button>
        </div>
      </div>
    </div>
  </tab-content>
  <tab-content title="VMM settings" :before-change="beforeTab3Switch">
    <div class="card text-white bg-secondary mb-3">
      <div class="card-header">Step 3: VMM settings</div>
      <div class="card-body">
        <label class="form-label">Select a VMM hardware profile (this tells VMM what resources to assign to the VM)</label>
        <select v-model="vmmhwprofile" class="form-select mb-3" aria-label="Choose HW profile">
          <option value="" selected>Select a VMM hardware profile</option>
          <option value="2016 GUI Application server">2016 GUI Application server</option>
          <option value="2022 Core DHCP server">2022 Core DHCP server</option>
        </select>
        <label class="form-label">Select a VMM OS profile (this tells VMM what OS image to use from the library)</label>
        <select v-model="vmmosprofile" class="form-select mb-3" aria-label="Choose OS profile">
          <option value="" selected>Select a VMM OS profile</option>
          <option value="2016 GUI">2016 GUI</option>
          <option value="2022 Core">2022 Core</option>
        </select>
        <label class="form-label">Select a Hyper-V server and then press the "Check Hyper-V resources" button</label>
        <div class="mb-3 input-group">
          <select v-model="hvserver" class="form-select" aria-label="Choose OS profile">
            <option value="" selected>Select a Hyper-V server</option>
            <option value="HVVIB02A">HVVIB02A</option>
            <option value="HVPIT02A">HVPIT02A</option>
          </select>
          <button v-on:click="checkHVServerResources" class="btn" :class="{'btn-info': chekhvr_btninfo, 'btn-success': chekhvr_btnsuccess}" v-bind:disabled="checkHVServerResourcesDisable" type="button" id="button-checkHVServer"><span v-if="hvserverBtnLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span v-else>Check Hyper-V resources</span></button>
        </div>
      </div>
    </div>
   </tab-content>
   <tab-content title="Role settings" :before-change="beforeTab4Switch">
    <div class="card text-white bg-secondary mb-3">
      <div class="card-header">Step 4: Role settings</div>
      <div class="card-body">
        <label class="form-label">Select a server role (this tells DSC what settings to apply to the OS)</label>
        <div class="mb-3 input-group">
          <select v-model="serverRole" class="form-select" aria-label="Choose role">
            <option selected value="">Select a server role</option>
            <option value="Application server">Application server</option>
            <option value="DHCP server">DHCP server</option>
          </select>
          <button v-on:click="checkServerRoleResources" class="btn" :class="{'btn-info': cheksrvr_btninfo, 'btn-success': cheksrvr_btnsuccess}" v-bind:disabled="checkServerRoleResourcesDisable" type="button" id="button-checkHVStorage"><span v-if="serverRoleBtnLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span v-else>Check Hyper-V storage</span></button>
        </div>
        <label class="form-label">Select staging</label>
        <select v-model="roleStaging" class="form-select mb-3" aria-label="Choose stagign">
          <option selected value="">Select staging</option>
          <option value="Prod">Prod</option>
          <option value="Test">Test</option>
        </select>
        <label class="form-label">Select backup class</label>
        <select v-model="roleBackupClass" class="form-select mb-3" aria-label="Choose backup class">
          <option selected value="">Select backup class</option>
          <option value="Basic">Basic</option>
          <option value="Gold">Gold</option>
        </select>
      </div>
    </div>
   </tab-content>
   <tab-content title="Summary">
    <div class="card text-white bg-secondary mb-3">
      <div class="card-header">Step 5: Summary</div>
      <div class="card-body">
        
      </div>
    </div>
   </tab-content>



</form-wizard>
    </div>
</template>

<script>
import {FormWizard, TabContent, WizardStep} from 'vue3-form-wizard'
import 'vue3-form-wizard/dist/style.css'
    export default {
        name: 'NewHV',
        components: {FormWizard,TabContent,WizardStep},
        data: function() {
            return {
                serverName: "",
                serverNameBtnLoading: false,
                serverNameOK: false,
                checkServerNameDisable: true,
                cheksnb_btninfo: true,
                cheksnb_btnsuccess: false,
                location: "",
                network: "",
                dhcpIPAddress: false,
                IPAddress: "",
                IPAddressBtnLoading: false,
                IPAddressDisable: false,
                IPAddressOK: false,
                checkIPAddressDisable: true,
                chekipa_btninfo: true,
                chekipa_btnsuccess: false,
                vmmhwprofile: "",
                vmmosprofile: "",
                hvserver: "",
                hvserverBtnLoading: false,
                hvserverOK: false,
                checkHVServerResourcesDisable: true,
                chekhvr_btninfo: true,
                chekhvr_btnsuccess: false,
                serverRole: "",
                serverRoleBtnLoading: false,
                serverRoleOK: false,
                checkServerRoleResourcesDisable: true,
                cheksrvr_btninfo: true,
                cheksrvr_btnsuccess: false,
                roleStaging: "",
                roleBackupClass: ""
            }
        },
        methods: {
            beforeTab1Switch() {
                if(!this.serverNameOK || this.location == "") {
                    return false
                }
                return true;
            },
            beforeTab2Switch() {
                if(!this.IPAddressOK || this.network == "") {
                    return false
                }
                return true;
            },
            beforeTab3Switch() {
                if(!this.hvserverOK || this.vmmhwprofile == "" || this.vmmosprofile == "") {
                    return false
                }
                return true;
            },
            beforeTab4Switch() {
                if(!this.serverRoleOK || this.roleStaging == "" || this.roleBackupClass == "" ) {
                    return false
                }
                return true;
            },
            createHVMachine() {
              this.$router.push({name: 'overviewpage'})
            },
            async checkServerName() {
                this.serverNameBtnLoading = true
                await new Promise(r => setTimeout(r, 3000))
                if(this.serverName != "") {
                    this.serverNameOK = true
                }
                else {
                    this.serverNameOK = false
                }
                this.serverNameBtnLoading = false
            },
            async checkIPAddress() {
              this.IPAddressBtnLoading = true
              await new Promise(r => setTimeout(r, 3000))
              if(this.IPAddress != "") {
                this.IPAddressOK = true
              }
              else {
                this.IPAddressOK = false
              }
              this.IPAddressBtnLoading = false
            },
            async checkHVServerResources() {
              if(this.vmmhwprofile != "") {
                this.hvserverBtnLoading = true
                await new Promise(r => setTimeout(r, 3000))
                if(this.hvserver != "") {
                  this.hvserverOK = true
                }
                else {
                  this.hvserverOK = false
                }
                this.hvserverBtnLoading = false
              }
            },
            async checkServerRoleResources() {
                this.serverRoleBtnLoading = true
                await new Promise(r => setTimeout(r, 3000))
                if(this.serverRole != "") {
                    this.serverRoleOK = true
                }
                else {
                    this.serverRoleOK = false
                }
                this.serverRoleBtnLoading = false
            },
        },
        watch: {
            serverName: function() {
                this.serverName = this.serverName.toUpperCase();
                this.serverNameOK = false;
                if(this.serverName != "") {
                    this.checkServerNameDisable = false
                }
                else {
                    this.checkServerNameDisable = true
                }
            },
            serverNameOK: function() {
                if(this.serverNameOK) {
                    this.cheksnb_btninfo = false
                    this.cheksnb_btnsuccess = true
                    this.checkServerNameDisable = true
                }
                else {
                    this.cheksnb_btninfo = true
                    this.cheksnb_btnsuccess = false
                    this.checkServerNameDisable = false
                }
            },
            IPAddress: function() {
              if(this.dhcpIPAddress) {
                this.IPAddressOK = true
              } else {
                this.IPAddressOK = false;
              }
              if(this.IPAddress != "") {
                this.checkIPAddressDisable = false
              }
              else {
                this.checkIPAddressDisable = true
              }
            },
            IPAddressOK: function() {
                if(this.IPAddressOK) {
                    this.chekipa_btninfo = false
                    this.chekipa_btnsuccess = true
                    this.checkIPAddressDisable = true
                }
                else {
                    this.chekipa_btninfo = true
                    this.chekipa_btnsuccess = false
                    if(this.IPAddress != "") {
                      this.checkIPAddressDisable = false
                    }
                    else {
                      this.checkIPAddressDisable = true
                    }
                }
            },
            dhcpIPAddress: function() {
              if(this.dhcpIPAddress == true) {
                this.IPAddress = ""
                this.IPAddressDisable = true
                this.IPAddressOK = true
              }
              else {
                this.IPAddressOK = false
                this.IPAddressDisable = false
              }
            },
            location: function() {
              this.hvserver = ""
              this.network = ""
            },
            network: function() {
              this.IPAddress = ""
            },
            vmmhwprofile: function() {
              this.vmmosprofile = ""
              this.hvserverOK = false
            },
            hvserver: function() {
              this.hvserverOK = false;
              if(this.hvserver != "") {
                this.checkHVServerResourcesDisable = false
              }
              else {
                this.checkHVServerResourcesDisable = true
              }
            },
            hvserverOK: function() {
                if(this.hvserverOK) {
                    this.chekhvr_btninfo = false
                    this.chekhvr_btnsuccess = true
                    this.checkHVServerResourcesDisable = true
                }
                else {
                    this.chekhvr_btninfo = true
                    this.chekhvr_btnsuccess = false
                    this.checkHVServerResourcesDisable = false
                }
            },
            serverRole: function() {
                this.serverRoleOK = false;
                if(this.serverRole != "") {
                    this.checkServerRoleResourcesDisable = false
                }
                else {
                    this.checkServerRoleResourcesDisable = true
                }
            },
            serverRoleOK: function() {
                if(this.serverRoleOK) {
                    this.cheksrvr_btninfo = false
                    this.cheksrvr_btnsuccess = true
                    this.checkServerRoleResourcesDisable = true
                }
                else {
                    this.cheksrvr_btninfo = true
                    this.cheksrvr_btnsuccess = false
                    this.checkServerRoleResourcesDisable = false
                }
            },
        },
    }
</script>
<style>
.stepTitle{
    color:white
};
</style>