<template>
  <div>
    <div class="data" v-if="showLog">{{JSON.stringify(formData, null, 2)}}</div>
    <!-- 出席 -->
    <ValidationObserver v-slot="{ handleSubmit,invalid }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <div class="q_box" id='attend'>
          <div class="subTitle">首先</div>
          <div class="title">會來嗎</div>
          <ValidationProvider rules="required_attend" v-slot="{ errors }">
            <div class="d-f" >
              <div class="btnBox">
                <input type="radio" value="yes" v-model="formData.attend" id="attend_yes" />
                <div class="btn" @click="onAttend('yes')" v-scroll-to="'#whosFriend'">當然會啦</div>
              </div>
              <div class="btnBox">
                <input type="radio" value="no" v-model="formData.attend" id="attend_no" />
                <div class="btn" @click="onAttend('no')" v-scroll-to="'#attend'">書面申請不能到場</div>
              </div>
            </div>
            <div class="errorMsg">{{ errors[0] }}</div>
          </ValidationProvider>
          <transition name="fade">
            <div class="d-f f-c" v-show="formData.attend=='no'">
              <textarea
              id='resonCantCome'
                v-model="formData.resonCantCome"
                placeholder="你幹嘛不來你為什麼不來哪有那麼重要的事你騙我你幹嘛不來你幹嘛不來幹嘛不來你幹嘛不來你幹嘛不來你為什麼不來哪有那麼重要的事你騙我你幹嘛不來你幹嘛不來幹嘛不來你幹嘛不來你幹嘛不來你為什麼不來哪有那麼重要的事你騙我你幹嘛不來你幹嘛不來幹嘛不來你幹嘛不來"
              ></textarea>
              <h3 class="mt-1 goldTxt">說啊 嗚嗚嗚嗚</h3>
            </div>
          </transition>
          <!-- <textarea name="reason" cols="30" rows="10" v-show="attend=='no'" placeholder="為什麼不來"></textarea> -->
        </div>

        <!-- 誰朋友 -->
        <div class="q_box" id='whosFriend'>
          <div class="subTitle">事關有沒餅</div>
          <div class="title">你認識誰</div>
          <ValidationProvider
            :rules="{required_whosFriend:(formData.attend=='no')?false:true}"
            v-slot="{ errors }"
          >
            <div class="d-f jc-sa">
              <div>
                <input
                  type="radio"
                  value="bridegroom"
                  v-model="formData.whosFriend"
                  @change.stop="formData.friendPeriod=null"
                />
                <div class="preson m1" @click="onWhosFriend('bridegroom')" v-scroll-to="'#friendPeriod'">
                  <div class="innerPic m1"></div>
                </div>
              </div>
              <div>
                <input
                  type="radio"
                  value="bride"
                  v-model="formData.whosFriend"
                  @change.stop="formData.friendPeriod=null"
                />
                <div class="preson m2" @click="onWhosFriend('bride')" v-scroll-to="'#friendPeriod'">
                  <div class="innerPic m2"></div>
                </div>
              </div>
            </div>
            <div class="errorMsg">{{ errors[0] }}</div>
          </ValidationProvider>
        </div>

        <!-- 我們很自由 -->
        <div class="q_box" id='friendPeriod'>
          <div class="subTitle">我們很自由</div>
          <div class="title">想坐哪裡</div>
          <div class="errorMsg" v-show="!formData.whosFriend">↑ 先選一下誰朋友，不然坐外面</div>
          <div v-show="formData.whosFriend">
            <ValidationProvider
              :rules="{required_whichTable:(formData.attend=='no')?false:true}"
              v-slot="{ errors }"
            >
              <div class="d-f">
                <div
                  v-for="(item, index) in friendPeriod"
                  :key="index+formData.whosFriend"
                  class="btnBox"
                >
                  <input
                    type="radio"
                    :value="item"
                    v-model="formData.friendPeriod"
                    @change="formData.otherTableName=''"
                  />
                  <div class="btn" @click="onFriendPeriod(item)" v-scroll-to="'#attendNum'">{{item}}</div>
                </div>
                <div class="space"></div>
              </div>
              <div class="errorMsg">{{ errors[0] }}</div>

              <div v-show="formData.friendPeriod !='其他桌' ">
                <input type="radio" value="其他桌" v-model="formData.friendPeriod" />
                <div class="txtBtn" @click="onFriendPeriod_other()">你忘了我這桌</div>
              </div>
            </ValidationProvider>
          </div>
          <transition name="fade">
            <div v-show="formData.friendPeriod =='其他桌' ">
              <h3 class="goldTxt">那你那桌想叫啥?</h3>
              <input
                type="text"
                v-model="formData.otherTableName"
                placeholder="ex: 表演人員桌，紅包兩萬桌"
                class="longInput"
              />
            </div>
          </transition>
        </div>

        <!-- 幾大幾小幾個吃素 -->
        <div class="q_box" id='attendNum'>
          <div class="subTitle">小的是要坐兒童椅那種小</div>
          <div class="title">幾大幾小幾個吃素</div>
          <div class="d-f">
            <label class="numberInput">
              <ValidationProvider
                :rules="{required_adultNum:(formData.attend=='no')?false:true}"
                v-slot="{ errors }"
              >
                <input
                  type="number"
                  pattern="\d*"
                  v-model.number="formData.adultNum"
                  placeholder="0"
                  @focus="$event.target.select()"
                  @keyup="checkNumber($event,'n2')"
                />
                <div class="txt">大</div>
                <div class="errorMsg">{{ errors[0] }}</div>
              </ValidationProvider>
            </label>
            <label class="numberInput">
              <input
                type="number"
                pattern="\d*"
                v-model.number="formData.childNum"
                placeholder="0"
                ref="n2"
                @keyup="checkNumber($event,'n3')"
                @focus="$event.target.select()"
              />
              <div class="txt">小</div>
            </label>
            <label class="numberInput">
              <input
                type="number"
                pattern="\d*"
                v-model.number="formData.vegetarianNum"
                placeholder="0"
                ref="n3"
                @focus="$event.target.select()"
              />
              <div class="txt">素</div>
            </label>
          </div>
        </div>

        <!-- 江湖資訊-->
        <div class="q_box">
          <div class="subTitle">敢問尊下</div>
          <div class="title">江湖資訊</div>
          <div class="d-f f-c">
            <label class="mt-1 infoWrap">
              <ValidationProvider rules="required" v-slot="{ errors }">
                <div class="txt">俠名</div>
                <input type="text" v-model="formData.name" placeholder="name" class="longInput" />
                <span class="errorMsg mt-1">{{ errors[0] }}</span>
              </ValidationProvider>
            </label>

            <label class="infoWrap">
              <ValidationProvider rules="required|email" v-slot="{ errors }">
                <div class="txt">飛鴿</div>
                <input type="text" v-model="formData.email" placeholder="email" class="longInput" />
                <span class="errorMsg mt-1">{{ errors[0] }}</span>
              </ValidationProvider>
            </label>

            <!-- <label class="infoWrap">
              <ValidationProvider rules="required" v-slot="{ errors }">
                <div class="txt">線索</div>
                <input
                  type="text"
                  v-model="formData.lineid"
                  placeholder="line id"
                  class="longInput"
                />
                <span class="errorMsg mt-1">{{ errors[0] }}</span>
              </ValidationProvider>
            </label> -->

            <div class="txtBtn" v-show="!showAddr" @click="onAdress()">在下非要紙本喜帖不可</div>
            <transition name="fade">
              <div v-show="showAddr" style="width: 100%">
                <label class="infoWrap">
                  <div class="txt">宅邸</div>
                  <input
                    type="text"
                    v-model="formData.address"
                    placeholder="address"
                    class="longInput"
                  />
                </label>
                <div class="txtBtn mt-3" @click="onNoAdress()">沒事我開玩笑的在下環保人</div>
              </div>
            </transition>
          </div>
        </div>

        <!-- 塗鴉牆-->
        <div class="q_box">
          <div class="subTitle">有問必答</div>
          <div class="title">客訴</div>
          <div class="d-f">
            <textarea placeholder="來啊來啊來啊來啊來啊來啊來啊來啊來啊來啊來啊來啊來啊來啊來啊來啊來啊來啊" v-model="formData.words"></textarea>
          </div>
        </div>

        <!-- 送出-->
        <div class="q_box">
          <input type="submit" class="sendBtn btn mx-a" value="確認送出" @click="clickSend=true" />
          <div class="subTitle f14" v-show="!invalid">真的要炸你囉</div>
          <div class="subTitle f14" v-show="invalid&&clickSend">還沒填完你幹嘛，上去檢查啦</div>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: 'WeddingForm',
  data() {
    return {
      isTest: false,
      showAddr: false,
      showLog: true,
      clickSend: false,
      formData: {
        name: '',
        // lineid: '',
        attend: null,
        whosFriend: null,
        friendPeriod: null,
        otherTableName: '',
        adultNum: 1,
        childNum: 0,
        vegetarianNum: 0,
        email: '',
        address: '',
        resonCantCome: '',
        words: '',

      },
      testFormData: {
        name: '游志忠test',
        // lineid: 'ar.chung',
        attend: 'yes',
        whosFriend: 'arChung',
        friendPeriod: '主桌',
        otherTableName: '',
        adultNum: 2,
        childNum: 0,
        vegetarianNum: 1,
        email: 'until5000@gmail.com',
        address: '建國北路',
        resonCantCome: '',
        words: '今天妳要嫁給我',
      },
      coupleData: {
        bridegroom: {
          friendPeriod: ['主桌', '親戚', '青松補習班', '成功高中', '成功大學', '保一總隊', '獅王家品', '其他好捧油'],
        },
        bride: {
          friendPeriod: ['主桌', '親戚', '太平還是集美', '三重高中', '淡江大傳', '愛的大傳所', 'BAND 產品人', '雲沛創新集團', '天使窗口4ni'],
        },
      },
    };
  },
  computed: {
    friendPeriod() {
      if (!this.formData.whosFriend) {
        return null;
      }
      return this.coupleData[this.formData.whosFriend].friendPeriod;
    },
  },
  mounted() {
    this.formData = (this.isTest) ? this.testFormData : this.formData;
    this.showLog = !!(this.isTest);
  },
  methods: {
    onSubmit() {
      this.$emit('sendForm');

      const apiUrl = 'https://script.google.com/macros/s/AKfycbyp2apWfIwHaVRWtce95ipPf_LQnatR8jXYk4PJVoZtFD4iIdQK/exec';

      this.axios.get(apiUrl, {
        params: this.formData,
      }).then((response) => {
        console.log(response);
        this.$emit('sendForm_success');
      }).catch((error) => {
        console.log(error);
        this.$emit('sendForm_error');
      }).then(() => {
        // always executed
      });
    },
    checkNumber(e, item) {
      // const t = e.target;
      console.log(e.target.value);
      let num = Number.parseInt(e.target.value, 10) || 0;
      num = (num > 9) ? 9 : num;
      num = (num < 0) ? 0 : num;
      e.target.value = num;

      console.log(e);
      console.log(item);
      this.$refs[item].focus();
      // const num = Number.parseInt(item.num) || 0;

      // item.num = num > item.stockCount ? item.stockCount : (num < 0 ? 0 : num)
    },

    // from
    onAttend(val) {
      this.formData.attend = val;
      this.$ga.event('attend', 'click', 'label', val);
    },
    onWhosFriend(val) {
      this.formData.whosFriend = val;
      this.$ga.event('whosFriend', 'click', 'label', val);
    },
    onFriendPeriod(val) {
      this.formData.friendPeriod = val;
      this.$ga.event('friendPeriod', 'click', 'label', val);
    },
    onFriendPeriod_other() {
      this.formData.friendPeriod = '其他桌';
      this.$ga.event('other_friendPeriod', 'click', 'label', 'value');
    },
    onAdress() {
      this.showAddr = true;
      this.$ga.event('i_want_paper', 'click', 'label', 'value');
    },
    onNoAdress() {
      this.showAddr = false;
      this.$ga.event('i_dontwant_paper', 'click', 'label', 'value');
    },
  },
};
</script>

<style lang="sass" scoped></style>
