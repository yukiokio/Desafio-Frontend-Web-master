# Bora para o último exercício finalmente

## Sobre o desafio

Hoje na Serasa utilizamos várias tecnologias e queremos sempre inovar e melhorar, e com isso queremos que você navegue na [área logada do site da Serasa](https://www.serasa.com.br/area-cliente), e após descreva quais tecnologias, frameworks, padrões de código e arquiteturas, enfim, o que você achar que faz mais sentido utilizarmos e porque. Não é necessário que você tenha experiência com a tecnologia proposta, só queremos saber o que você imagina como arquitetura ideal.

## Sobre o exercício

Na sua arquitetura proposta precisa levar em consideração alguns problemas e desafios que enfrentamos: volumetria, baixo tempo de carregamento das páginas, melhor experiência para o consumidor, além de trabalhar com um time de mais de 20 frontends em um mesmo projeto. Para esse exercício você pode nos entregar um [markdown](../DELIVERY.md) sobre a sua arquitetura, tecnologias e práticas.


## Resolução

Tendo em vista a proposta da Serasa em contribuir com diversos times em paralelos para vários projetos, acredito que o principal ponto a destacar é a utilização da arquitetura *MICROFRONTEND*. Atualmente existem algumas formas de se implementar esta arquitetura aplicando o framework de rotas SingleSPA ou Webpack Module Federation (os mais conhecidos). Entre os dois, o mais indicado seria em optar pelo framework por haver uma comunidade relativamente grande capazes de sustentar com o projeto. 

Entendendo que a base do nosso frontend seja fragmentada em microfrontend, isso nos abre um extenso leque que nos favorecem de diversas formas, conforme as principais melhorias citadas abaixo: 
- A possibilidade de se trabalhar com diversos times em um mesmo projeto, separando os times por módulos;
- Maior facilidade no DevOps, pois diferentemente do sistema monolito, pode haver conflitos no momento de gerenciar várias equipes em um mesmo projeto com repositório único; 
- Possibilidade em utilizar diversos libraries/frameworks no mesmo projeto modularizando-os em fragmentos. Com isso, é possível utilziar React, Vue e Angular na mesma página;
- Cada módulo poderá trabalhar com seu micro serviço no backend, criando ambientes isolados sem afetar os demais módulos. Entre outros...

Com isso em mente, o ideal é empregarmos o uso do NextJS para melhor performance, consumindo seus melhores recursos que o SSR dispõe. Para qualidade de código, a incrementação do uso de testes unitários e de processo, além do uso do Prettier, ESLint e Husky (verificação dos commits que ajuda no Pipeline do CI). Typescript para melhor intellisense e auxílio no debugging, o que aumenta consideravalmente o tempo de desenvolvimento depois de adaptado. 

Em módulos maiores, fazer uso do Redux para gerenciamento e persistências dos estados. O uso do GraphQL e Apollo para diminuições das requisições realizadas no frontend.

Utilizar centro de compressão de arquivos para diminuir o tamanho dos assets. Na imagem abaixo, é representado um exemplo de melhoria em adotar imagens menores nas páginas:

![image](https://user-images.githubusercontent.com/41245525/180559448-230c7887-3d4f-48f9-af08-464a6fc9b70b.png)

(res.: 66 x 66)

Imagem original (res.: 1080 x 1920): https://www.serasa.com.br/assets/ssw-files/2022-06-13/7348de3a8b/default_7348de3a8b.jpg