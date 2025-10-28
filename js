const $ = s => document.querySelector(s);
const form = $('#formMatricula');
const msg = $('#msg');

$('#copyPix').onclick = async () => {
  await navigator.clipboard.writeText($('#pixKey').value);
  alert('Chave PIX copiada!');
};

$('#copyPayment').onclick = async () => {
  await navigator.clipboard.writeText($('#paymentLink').value);
  alert('Link copiado!');
};

$('#openPayment').onclick = () => window.open($('#paymentLink').value, '_blank');

form.addEventListener('submit', e => {
  e.preventDefault();
  const nome = $('#nome').value.trim();
  const cpf = $('#cpf').value.trim();
  const conhecimento = $('#conhecimento').value;
  const email = $('#email').value.trim();

  if (!nome || !cpf || !conhecimento || !$('#concordo').checked) {
    return alert('Preencha todos os campos e aceite os termos.');
  }

  const texto = encodeURIComponent(
    `📘 *Nova matrícula — Instituto Digital Moisés Avelino*\n\n` +
    `👤 *Nome:* ${nome}\n` +
    `🪪 *CPF:* ${cpf}\n` +
    `📧 *E-mail:* ${email || 'não informado'}\n` +
    `🎓 *Nível:* ${conhecimento}\n\n` +
    `💳 *Pagamento:* R$ 200,00 via PIX (71993209015) ou cartão.\n` +
    `✅ Concorda com os termos de matrícula.`
  );

  window.open(`https://wa.me/5571993209015?text=${texto}`, '_blank');
  alert('Abrindo WhatsApp para enviar matrícula...');
  form.reset();
});

/* Modal de conteúdo */
const modal = $('#modalConteudo');
$('#btnConteudo').onclick = () => modal.style.display = 'block';
$('.close').onclick = () => modal.style.display = 'none';
window.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };
