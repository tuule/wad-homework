function formatDate(date) {
    const newDate = new Date(date).toLocaleString('default', {
        year: 'numeric', month: 'long', day: 'numeric', hour12: false, hour: '2-digit', minute: '2-digit'
    });
    return newDate;
}

module.exports = {
    formatDate: formatDate
}