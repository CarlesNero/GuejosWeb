import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pc.component.html',
  styleUrl: './pc.component.css',
})
export class PcComponent {
  titulo: string = 'PC';

  SobreMesa = [
    {
      name: 'HP Slim Desktop',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/1065/10658195/1934-hp-slim-desktop-s01-pf2028ns-intel-core-i5-12400-16gb-512gb-ssd.jpg',
    },
    {
      name: 'PcCom Lite Intel',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/1081/10811160/1342-pccom-lite-intel-core-i5-11400f-16gb-1tb-ssd-rtx-3050-negro.jpg',
    },
    {
      name: 'HP OMEN 40L',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/1075/10756908/1516-hp-omen-40l-gt21-1033ns-amd-ryzen-7-7700x-16gb-1tb-ssd-rtx-4070-especificaciones.jpg',
    },
  ];
  Portatiles = [
    {
      name: 'Acer Aspire 3 A315-58',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/1081/10815264/149-acer-aspire-3-a315-58-intel-core-i7-1165g7-16gb-512gb-ssd-156.jpg',
    },
    {
      name: 'PcCom Revolt 4060',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/1067/10674347/1696-pccom-revolt-4060-intel-core-i7-13700h-32gb-1tb-ssd-rtx-4060-156-comprar.jpg',
    },
    {
      name: 'ASUS TUF Gaming F15',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/1065/10658853/1442-asus-tuf-gaming-f15-fx507zc4-hn002-intel-core-i7-12700h-16gb-512gb-ssd-rtx-3050-156.jpg',
    },
  ];
  SillaGaming = [
    {
      name: 'Valk Nyx ',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/1055/10559231/1248-valk-nyx-silla-gaming-de-tela-azul-zafiro.jpg',
    },
    {
      name: 'Owlotech Yale V2',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/21/219315/1926-owlotech-yale-v2-silla-oficina-d8e81a21-6372-4d4e-996f-dcabae7e7eed.jpg',
    },
    {
      name: 'Owlotech Silla de Oficina',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/41/418592/1421-owlotech-silla-de-oficina-stanford-negra.jpg',
    },
  ];
  Monitores = [
    {
      name: 'Alurin CoreVision 24',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/1072/10725624/1238-alurin-corevision-24-fhd-238-led-ips-fullhd-100hz-comprar.jpg',
    },
    {
      name: 'Monitor Ozone DSP24',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/29/291633/1286-ozone-dsp24-240-24-led-fullhd-240hz-hdr-freesync-foto.jpg',
    },
    {
      name: 'Acer Nitro VG0',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/1082/10824918/1329-acer-nitro-vg0-vg270-27-led-ips-fullhd-100hz-freesync.jpg',
    },
  ];
  Teclados = [
    {
      name: 'Trust Ymo II Pack Teclado y Ratón',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/1081/10815375/160-trust-ymo-ii-pack-teclado-y-raton-inalambrico-negro.jpg',
    },
    {
      name: 'Forgeon Clutch',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/1081/10813280/1649-forgeon-clutch-teclado-gaming-wireless-rgb-60-switch-brown-review.jpg',
    },
    {
      name: 'Ozone Tactical',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/34/343438/1343-ozone-tactical-teclado-mini-mecanico-rgb-usb-bluetooth-switch-outemu-red.jpg',
    },
  ];
  Ratones = [
    {
      name: 'Forgeon Perdition',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/43/433873/2961-forgeon-perdition-raton-gaming-rgb-16000dpi-negro-mejor-precio.jpg',
    },
    {
      name: 'Razer Viper Ultimate',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/24/244389/a29.jpg',
    },
    {
      name: 'Logitech G203 Lightsync',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/28/287353/logitech-g203-lightsync-2nd-gen-raton-gaming-8000dpi-rgb-negro.jpg',
    },
  ];
  Microfonos = [
    {
      name: 'MSI Immerse GV60',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/1002/10029951/1821-msi-immerse-gv60-microfono-para-streaming-usb-c-negro.jpg',
    },
    {
      name: 'Forgeon Spell RGB',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/1080/10802401/1914-forgeon-spell-rgb-microfono-de-condensador-usb-review.jpg',
    },
    {
      name: 'Newskill Apholos Pro',
      image:
        'https://thumb.pccomponentes.com/w-530-530/articles/47/475635/1809-newskill-apholos-pro-microfono-gaming-profesional-rgb.jpg',
    },
  ];
}
