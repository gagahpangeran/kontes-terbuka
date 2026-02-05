var iklan_title = 'Pemnas UB 2025';
var iklan_desc = 'PEMNAS UB 2025 adalah lomba yang diadakan Universitas Brawijaya. Tahun ini, penyisihan akan diadakan 8 November 2025 dan semifinal-final pada tanggal 22-23 November 2025.';
var iklan_link = 'https://pemnas.ub.ac.id/';

$(document).on('turbolinks:load', function() {
  if ($('#iklan-lomba').length !== 0) {
    $('#judul-iklan')[0].innerHTML = iklan_title;
    $('#desc-iklan')[0].innerHTML = iklan_desc;
    if (iklan_title === '') {
      $('#iklan-lomba img').hide();
    } else {
      $('#iklan-lomba img').prop('alt', iklan_title);
    }

    $('#iklan-lomba').click(function() {
      window.open(iklan_link, '_blank');
    });
  }
});
