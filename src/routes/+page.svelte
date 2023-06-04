<style>
  h1 {
    margin-top: 20px;
  }
  .card-img {
    width: 200px;
    max-width: 25%;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
<h1>이벤트 목록</h1>
{#each events as event}
  {@const date = moment(event.date)}
  <div class="card col-lg-6 d-flex flex-row">
    <div class="card-img">
      <img src="{event.thumbnail}" alt="{event.name}" class="img-fluid rounded-start">
    </div>
    <div class="flex-fill">
      <div class="card-body">
        <h5 class="card-title">{event.name}</h5>
        <p class="card-text">{event.description}</p>
        <p class="card-text">
          <small class="text-muted">
            <i class="bi bi-calendar-event"></i>
            {#if event.date}
              {date.format('Y년 M월 D일 kk:mm')}~
            {:else}
              미정
            {/if}
            <br>
            {#if event.location}
              <i class="bi bi-geo-alt"></i> {event.location}
            {/if}
          </small>
        </p>
        {#if event.link}
          {#if typeof event.link === 'string'}
            <a href="{event.link}" target="_blank" class="btn btn-primary">바로가기</a>
          {:else}
            {#each Object.entries(event.link) as [name, link], i}
              <a href="{link}" target="_blank" class="btn btn-{i === 0 ? 'primary' : 'secondary'}">{name}</a>
            {/each}
          {/if}
        {/if}
      </div>  
    </div>
  </div>
{/each}
<script>
  import events from '../../data.json';
  import moment from 'moment';
  import 'moment/locale/ko';
  moment.locale('ko');
</script>
