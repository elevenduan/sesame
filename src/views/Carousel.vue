<template>
  <div>
    <Carousel>
      <Slider>
        <img src="https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png"
             style="width: 100%; vertical-align: top;"/>
      </Slider>
      <Slider>
        <img src="https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png"
             style="width: 100%; vertical-align: top;"/>
      </Slider>
      <Slider>
        <img src="https://zos.alipayobjects.com/rmsportal/IJOtIlfsYdTyaDTRVrLI.png"
             style="width: 100%; vertical-align: top;"/>
      </Slider>
    </Carousel>
  </div>
</template>
<script>
  import {Carousel} from '@/components/index'

  export default {
    components: {
      Carousel,
      Slider: Carousel.Slider
    }
  }
</script>
