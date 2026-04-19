(function () {
  'use strict';

  function bindTripBookingForm(form) {
    var statusEl = form.querySelector('[data-trip-form-status]');
    var submitBtn = form.querySelector('[type="submit"]');
    var defaultBtnText = submitBtn ? submitBtn.textContent : '';

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (statusEl) {
        statusEl.textContent = '';
        statusEl.className = 'form-status';
      }
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';
      }

      var fd = new FormData(form);
      var payload = {
        tour: String(fd.get('tour') || ''),
        name: String(fd.get('name') || ''),
        email: String(fd.get('email') || ''),
        phone: String(fd.get('phone') || ''),
        travelers: String(fd.get('travelers') || '1'),
        startDate: String(fd.get('startDate') || ''),
        endDate: String(fd.get('endDate') || ''),
        specialRequests: String(fd.get('specialRequests') || '')
      };

      function resetButton() {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = defaultBtnText;
        }
      }

      function mailtoFallback() {
        var subject = encodeURIComponent('Trip inquiry — ' + payload.tour);
        var body = encodeURIComponent(
          'Name: ' + payload.name + '\n' +
          'Email: ' + payload.email + '\n' +
          'Phone: ' + payload.phone + '\n' +
          'Travelers: ' + payload.travelers + '\n' +
          'Preferred start: ' + payload.startDate + '\n' +
          'Preferred end: ' + payload.endDate + '\n' +
          '\nMessage:\n' + payload.specialRequests
        );
        window.location.href =
          'mailto:pamillakayingana@gmail.com?subject=' + subject + '&body=' + body;
      }

      fetch('/api/book-tour', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(function (res) {
          return res.json().then(function (data) {
            return { ok: res.ok, data: data };
          });
        })
        .then(function (result) {
          resetButton();
          if (result.ok && result.data && result.data.success) {
            if (statusEl) {
              statusEl.textContent =
                result.data.message || 'Thank you — we will be in touch soon.';
              statusEl.className = 'form-status form-status--ok';
            }
            form.reset();
            return;
          }
          throw new Error((result.data && result.data.message) || 'Request failed');
        })
        .catch(function () {
          resetButton();
          mailtoFallback();
          if (statusEl) {
            statusEl.textContent =
              'We opened your email app with this inquiry. If it did not open, email pamillakayingana@gmail.com.';
            statusEl.className = 'form-status form-status--ok';
          }
        });
    });
  }

  document.querySelectorAll('[data-trip-booking-form]').forEach(bindTripBookingForm);
})();
