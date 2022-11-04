import './App.css';
import Post from './components/Post';

function App() {
  let data=[
    {
        "id": 1584,
        "user_id": 3136,
        "title": "Abscido quos aurum claudeo corroboro strenuus cilicium aequus via deludo appositus aeneus voluptas currus utilis cum.",
        "body": "Magnam antiquus viduo. Turbo cui quis. Cicuta quasi spero. Nisi arbustum adiuvo. Porro xiphias non. Est dapifer aliquam. Curia paulatim sordeo. Ipsum est calculus. Tristis avoco bellum. Vitium atque strues. Calculus cetera ipsam. Decretum tardus depereo. Urbs minima accusantium. Ventito autus benevolentia. Vereor quia uter. Synagoga adsuesco cogito. Ut aspicio canis. Stips patruus solutio."
    },
    {
        "id": 1583,
        "user_id": 3130,
        "title": "Supellex veritas suscipit addo ascit tristis arma dolorum sublime aestus vero odit creber vivo votum celebrer.",
        "body": "Cibus cicuta arbitro. Apto subvenio aut. Occaecati tremo tabernus. Conculco agnosco uter. Verus chirographum copia. Bis toties substantia. Doloribus coerceo cetera. Denego cunctatio combibo. Creator demulceo angustus. Ascit victoria armarium. Tabesco ustilo advenio. Bonus sed suffoco. Aufero commodo aliqua. Ipsa centum officia. Sodalitas amet voluptatem. Altus dolor angustus."
    },
    {
        "id": 1582,
        "user_id": 3129,
        "title": "Veritas odio turbo adultus ipsa adfero totus tantum.",
        "body": "Nostrum amo suffragium. Vestrum demergo tener. Amo cubo beatus. Admitto vindico amitto. Volaticus arcus ultio. Denuo angustus verbera. Infit eius amo. Censura calculus ambitus. Amor accedo demitto. Vacuus colligo creta. Autem illo denuncio. Utrum utroque vulgaris. Adaugeo urbanus alo. Acsi aliquam odio. Truculenter territo bos. Caute adipiscor infit. Alo non addo. Pectus barba approbo. Iure adeptio venia."
    },
    {
        "id": 1581,
        "user_id": 3126,
        "title": "Casso comis exercitationem esse alii adsidue at teres ventosus cur auxilium paulatim libero id tempore corona venio ipsum conicio.",
        "body": "Combibo colligo caste. Aptus molestias culpa. Alo defetiscor decerno. Maxime autem rem. Cavus patior clibanus. Sumptus dolorum tristis. Cibo quasi tantum. Libero defluo articulus. Ara speculum depopulo. Claro copiose comparo. Hic spiritus aveho. Trepide pectus et. Nesciunt defetiscor capio. Cogo tardus verumtamen. Soluta et beatae. Perspiciatis volo sapiente. Vindico subseco adhuc."
    },
    {
        "id": 1580,
        "user_id": 3125,
        "title": "Sui tenuis bos arguo qui suppellex creator totus conitor.",
        "body": "Appositus ter maxime. Stella similique cibus. Utroque distinctio tot. Communis comptus amplitudo. Tantillus sol condico. Saepe acquiro adamo. Audeo alienus tonsor. Supplanto animi terebro. Contabesco contra alias. Demulceo sunt asperiores. Soluta vae calcar. Centum armarium comminor. Corrigo curatio ocer. Et aer contigo. Aut tepesco vomito. Cras aer asperiores. Corrigo dolores pel. Tam cum enim. Corona debilito suasoria. Sophismata caveo ubi. Utrum vae curia. Accusantium tremo vel."
    },
    {
        "id": 1579,
        "user_id": 3122,
        "title": "Tamisium cattus tibi deporto arbustum aliquam caterva consequuntur adulatio tenuis degusto cornu.",
        "body": "Asperiores denique artificiose. Ater hic vere. Adopto viridis confero. Thermae aetas utrum. Supplanto usitas pauci. Placeat molestias aegrotatio. Adeo conor thermae. Attollo spargo adimpleo. Vigilo vociferor unus. Aduro cupio cuius. Patrocinor ex cuius. Trucido dolorem cito. Suscipio tersus qui. Appello cupiditate crux. Adeptio denego cum. Cattus ullus arto. Usitas vinculum terror. Abscido carcer coniecto. Paens ceno theologus. Alter utor sed. Strenuus summopere patior. Apto abduco compello."
    },
    {
        "id": 1578,
        "user_id": 3117,
        "title": "Arbustum absconditus thymum neque veniam tametsi laborum caterva omnis corrumpo.",
        "body": "Voluptatem volutabrum cupiditate. Capitulus caritas praesentium. Canonicus usus molestiae. Decor vallum similique. Careo corrupti adhuc. Cado desipio terga. Paens depopulo stipes. Trado depono cunctatio. Colloco super sub. Cenaculum qui votum. Vinitor ipsum certe. Sophismata colloco cunabula. Abduco suscipit corrigo. Ascit carcer voluptas. Libero aggero subiungo. Aedificium adnuo acer. Molestiae deinde solus. Voluptatum vos utrimque. Amiculum bene deleniti."
    },
    {
        "id": 1577,
        "user_id": 3115,
        "title": "Civitas canonicus celebrer universe claustrum denique cunae usitas subseco cursim sunt conicio adhaero voro correptius suus avoco vereor.",
        "body": "Natus acies charisma. Denuo subito tremo. Astrum armarium consequatur. Aspicio nisi spoliatio. Baiulus cohibeo est. Tego amita cohibeo. Magnam molestiae conicio. Aliquam necessitatibus armarium. Coniuratio approbo temporibus. Unde ventosus dedico. Atque ter adeptio. In distinctio totus. Catena admitto demulceo. Damnatio nulla compono. Consequatur enim consequatur. Atrox dolorum coniuratio. Capto pauper vitium. Debeo laudantium sopor. Aro desino crastinus."
    },
    {
        "id": 1576,
        "user_id": 3113,
        "title": "Cernuus est umbra conturbo thymbra ater terra tristis coma viriliter defungo qui cuppedia perferendis admoveo.",
        "body": "Spiculum tempus videlicet. Dens inflammatio nam. Demens sonitus cogito. Deduco tantum vestrum. Veritatis barba viriliter. Amplitudo vestigium tergiversatio. Ultio vapulus acerbitas. Unde pecco dolor. Cito subvenio amissio. Ascit concido neque. Rem deleo valens. Modi utrum vilis. Argentum conscendo synagoga. Terror fugit dolores. Cetera verto astrum. Decumbo illo volup. Acer sumo earum."
    },
    {
        "id": 1575,
        "user_id": 3113,
        "title": "Alius carmen custodia vulnero adnuo clamo aliqua solio cunae cum spero temperantia triginta vacuus comparo vulgaris.",
        "body": "Distinctio termes desolo. Complectus minus victus. Apostolus assentator hic. Adsuesco amet demo. Tardus demo ustulo. Suspendo tersus sono. Tempus taceo pecus. Sollers theca demum. Ars et vulnero. Et summopere et. Tum avaritia vix. Curvo timidus consequatur. Armarium qui decor. Aegre non depulso. Et voluptatem usque. Adnuo aut doloribus."
    }
]
  return (
    <div className="App">
     {
      data.map(item=>{
        return <Post key={item.id} title={item.title} body={item.body} userName={"john"} userEmail={"axx@hotmail.com"} userGender={"male"}/>
      })
     }
    </div>
  );
}

export default App;
