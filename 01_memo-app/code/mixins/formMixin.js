export default {
  methods: {
    formValid() {
      if (!this.title || !this.text) {
        console.log('入力欄が空白');
        this.titleValid = this.title.length > 0 ? false : true;
        this.textValid = this.text.length > 0 ? false : true;
        return false;
      }
      return true;
    },
    formInputCheck(e) {
      if(this.titleValid) {
        this.titleValid = this.title.length > 0 ? false : true;
      }
      if(this.textValid) {
        this.textValid = this.text.length > 0 ? false : true;
      }
    },
    formClear() {
      this.title = '';
      this.text = '';
    }
  }
}
