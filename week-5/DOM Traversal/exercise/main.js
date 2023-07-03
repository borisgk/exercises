const generator = function (source) {
    let generated = {
        proc_id: source.closest("div.processor").attr("id"),
        data_id: source.closest("div.computer").data("id"),
        bus: source.closest("div.computer").find("p.BUS").text()
    }
    return generated
}


$("button.generator").on("click", function() {
    data_gen = generator($(this))
    alert(`Processor ID ${data_gen.proc_id}\nComputer's data-id: ${data_gen.data_id}\nBUS: ${data_gen.bus}`)
})

$("button.validator").on("click", function() {
    // find the generator button
    genButton = $(this).closest("div.computer").find("button.generator")
    data_gen = generator(genButton)

    let mb = $(this).closest("div.computer").find("p.MB").text()

    let qrs = []
    qrs.push($(this).closest("div.computer").find("div.processor").find("span.QR").text())


    alert(`Processor ID ${data_gen.proc_id}\nComputer's data-id: ${data_gen.data_id}\nBUS: ${data_gen.bus}\nMB: ${mb}\nQRS: ${qrs[0]}`)
})