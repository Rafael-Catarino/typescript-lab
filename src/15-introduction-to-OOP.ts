class Computer {
  /**
   * Atributo privado: só pode ser acessado dentro desta classe.
   * Iniciamos como 'false' porque o computador começa desligado.
   */
  private isPoweredOn: boolean = false;

  /**
   * O Construtor do TypeScript permite declarar propriedades diretamente.
   * Ao usar 'public' ou 'private' nos argumentos, o TS cria e inicializa a variável automaticamente.
   */
  constructor(
    public name: string, // Nome é público: pode ser lido/alterado de fora
    private ram: number, // RAM é privada: só alteramos via método upgradeRam
    private cpuCores: number, // Cores da CPU são privados
  ) {}

  // public: Acessível de qualquer lugar.
  // private: Acessível apenas dentro da própria classe onde foi criado.
  // protected: Acessível dentro da própria classe e também nas classes filhas, mas continua invisível para quem está fora (instâncias).

  /**
   * Exibe todas as especificações técnicas do computador no console.
   */
  displayDetails(): void {
    console.log(`Nome.......: ${this.name}`);
    console.log(`RAM........: ${this.ram}GB`);
    console.log(`Núcleos CPU: ${this.cpuCores}`);
    // Uso de operador ternário para exibir um texto amigável em vez de true/false
    console.log(`Status.....: ${this.isPoweredOn ? "Ligado" : "Desligado"}`);
    console.log("-----------------------------");
  }

  /**
   * Liga o computador.
   */
  powerOn(): void {
    this.isPoweredOn = true;
    console.log(`${this.name} agora está LIGADO.`);
  }

  /**
   * Desliga o computador.
   */
  powerOff(): void {
    this.isPoweredOn = false;
    console.log(`${this.name} agora está DESLIGADO.`);
  }

  /**
   * Atualiza a capacidade de RAM dentro de um intervalo válido (0 a 1000).
   * @param amount - Novo tamanho da RAM em GB
   */
  upgradeRam(amount: number): void {
    if (amount >= 0 && amount <= 1000) {
      this.ram = amount;
      console.log(
        `RAM atualizada para ${amount}GB no computador ${this.name}.`,
      );
    } else {
      console.log(
        `Quantidade inválida: ${amount}GB não é permitido para ${this.name}.`,
      );
    }
  }
}

// --- Instanciando (Criando novos objetos) ---
const c1 = new Computer("Speedy", 64, 10);
const c2 = new Computer("Expensive", 32, 5);
const c3 = new Computer("Gamer Pro", 128, 12);

// --- Executando ações ---
c1.powerOn();
c3.powerOn();

// Alterando uma propriedade pública diretamente
c1.name = "Super Speedy";

// Testando a lógica de upgrade de RAM
c1.upgradeRam(1001); // Inválido (cai no else)
c2.upgradeRam(64); // Válido (atualiza o valor)

// --- Exibindo o status final de todos os computadores ---
c1.displayDetails();
c2.displayDetails();
c3.displayDetails();
