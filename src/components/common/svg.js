import React from 'react'

class SvgIcon extends React.Component{
	render() {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{position:"absolute",width:0,height:0,visibility:"hidden"}}>
				<defs>
					<symbol viewBox="0 0 60 60" id="eleme">
					<path fill="#3CABFF" fillRule="evenodd" d="M0 9.375A9.374 9.374 0 0 1 9.375 0h41.25A9.374 9.374 0 0 1 60 9.375v41.25A9.374 9.374 0 0 1 50.625 60H9.375A9.374 9.374 0 0 1 0 50.625V9.375zm35.94 30.204c-5.601 3.147-12.645 1.256-15.834-4.217-3.206-5.501-1.303-12.537 4.25-15.713 4.7-2.689 10.51-1.749 14.127 1.941L27.526 27.89a2.81 2.81 0 0 0-1.037 3.854 2.862 2.862 0 0 0 3.887 1.035l15.988-9.166a17.238 17.238 0 0 0-1.222-2.571c-4.777-8.198-15.358-11.007-23.632-6.275-8.275 4.734-11.11 15.217-6.332 23.415 4.77 8.184 15.322 10.997 23.59 6.297.877-.5 1.654-1.037 2.376-1.623l-1.31-2.248a2.868 2.868 0 0 0-3.893-1.028zm10.824-7.39l-1.418-2.425-4.911 2.798 2.835 4.846 2.454-1.399h.002a2.779 2.779 0 0 0 1.038-3.82z">
					</path>
					</symbol>
					<symbol viewBox="0 0 28 33" id="user">
					<path fillRule="evenodd" d="M20.798 19.289c2.636-2.002 4.215-5.091 4.215-8.437 0-5.886-4.845-10.647-10.808-10.647S3.397 4.966 3.397 10.852c0 3.345 1.578 6.433 4.212 8.435l.264-2.678C4.358 18.32 1.591 21.403.168 25.187l1.478.556v-1.579c-1.485.73-1.485.73-1.501 1.079-.054.188-.054.188-.069.278a2.58 2.58 0 0 0-.026.229 9.112 9.112 0 0 0-.019.4c-.008.265-.014.617-.018 1.039-.005.511-.006 1.037-.006 1.451v.027c-.004 1.732 1.41 3.129 3.154 3.129h22.082a3.18 3.18 0 0 0 3.172-3.153l.011-1.305.008-.897.003-.296.001-.083v-.022-.006-.001l.002-.278-.093-.262c-1.385-3.918-4.203-7.122-7.812-8.88l.263 2.678zm-1.911-2.516l-2.045 1.553 2.309 1.125c2.856 1.392 5.106 3.949 6.218 7.093l-.09-.54V26.033l-.001.083-.003.296-.008.897-.011 1.305c0 .01-.011.021-.013.021H3.161c-.007 0 .005.011.005.032v-.031c0-.404.001-.92.006-1.418.004-.4.01-.732.017-.969.004-.121.008-.212.012-.262l-.006.043c-.009.06-.009.06-.058.229-.01.336-.01.336-1.49 1.063H2.74l.385-1.024c1.141-3.035 3.35-5.495 6.131-6.849l2.309-1.124-2.045-1.554c-1.859-1.412-2.964-3.576-2.964-5.92 0-4.129 3.418-7.488 7.649-7.488s7.649 3.359 7.649 7.488c0 2.344-1.106 4.509-2.966 5.921z" className="path1">
					</path>
					</symbol>
					<symbol viewBox="0 0 32 31" id="shop">
					<g fillRule="evenodd">
					  <path d="M28.232 1.822C27.905.728 26.97.152 25.759.152H5.588c-1.252 0-1.867.411-2.397 1.415l-.101.243-.443 1.434-.975 3.154-.002.007C.837 9.101.294 10.854.26 10.956l-.059.259c-.231 1.787.337 3.349 1.59 4.448 1.159 1.017 2.545 1.384 3.865 1.384.07 0 .07 0 .132-.002-.01.001-.01.001.061.002 1.32 0 2.706-.367 3.865-1.384a4.96 4.96 0 0 0 .413-.407l-1.043-.946-1.056.931c1.033 1.171 2.51 1.792 4.21 1.801.04.002.088.004.173.004 1.32 0 2.706-.367 3.865-1.384.148-.13.287-.267.418-.411l-1.044-.944-1.057.93c1.033 1.174 2.511 1.796 4.213 1.806.04.002.088.004.173.004 1.32 0 2.706-.367 3.865-1.384.15-.131.29-.27.422-.416l-1.046-.943-1.058.929c1.033 1.177 2.513 1.801 4.218 1.811.04.002.088.004.173.004 1.32 0 2.706-.367 3.865-1.384 1.206-1.058 1.858-2.812 1.676-4.426-.069-.61-.535-2.207-1.354-4.785l-.109-.342a327.554 327.554 0 0 0-1.295-3.966l-.122-.366.014.043h.004zm-2.684.85l.12.361.318.962c.329.999.658 2.011.965 2.973l.108.338c.719 2.262 1.203 3.92 1.24 4.249.08.711-.233 1.553-.735 1.993-.553.485-1.308.685-2.008.685l-.098-.002c-.987-.007-1.695-.306-2.177-.854l-1.044-1.189-1.06 1.175a2.192 2.192 0 0 1-.188.185c-.553.485-1.308.685-2.008.685l-.098-.002c-.985-.007-1.693-.305-2.174-.852l-1.043-1.185-1.059 1.171c-.058.064-.12.125-.186.183-.553.485-1.308.685-2.008.685l-.098-.002c-.984-.007-1.692-.304-2.173-.85L9.101 12.2l-1.058 1.166a2.248 2.248 0 0 1-.184.181c-.553.485-1.307.685-2.008.685l-.061-.001-.131.001c-.701 0-1.455-.2-2.008-.685-.538-.472-.767-1.102-.654-1.971l-1.396-.18 1.338.44c.043-.13.552-1.775 1.425-4.599l.002-.007.975-3.155.443-1.434-1.345-.415 1.245.658c.054-.102.042-.085-.083-.001-.122.082-.143.086-.009.086H25.763c.053 0-.164-.133-.225-.339l.014.043-.004-.001zM5.528 19.48c.778 0 1.408.63 1.408 1.408v7.424a1.408 1.408 0 1 1-2.816 0v-7.424c0-.778.63-1.408 1.408-1.408z">
					  </path>
					  <path d="M.28 29.72c0-.707.58-1.28 1.277-1.28h28.155a1.28 1.28 0 0 1 .007 2.56H1.561A1.278 1.278 0 0 1 .28 29.72z">
					  </path>
					  <path d="M26.008 19.48c.778 0 1.408.63 1.408 1.408v7.424a1.408 1.408 0 1 1-2.816 0v-7.424c0-.778.63-1.408 1.408-1.408z">
					  </path>
					</g>
					</symbol>
					<symbol viewBox="0 0 28 33" id="location">
					<g fillRule="evenodd">
					  <path d="M20.809 21.6L12.9 29.509h1.616l-7.992-7.992a13.003 13.003 0 0 1-.506-.478c-4.25-4.25-4.25-11.14 0-15.389s11.14-4.25 15.389 0c4.25 4.25 4.25 11.14 0 15.389a10.81 10.81 0 0 1-.543.508l-.056.052zm1.56 1.669c.225-.196.443-.401.656-.613 5.142-5.142 5.142-13.48 0-18.622s-13.48-5.142-18.622 0c-5.142 5.142-5.142 13.48 0 18.622.18.18.364.354.553.522l8.753 8.755 8.661-8.664z" className="path1">
					  </path>
					  <path d="M9.428 16.739a6.063 6.063 0 1 0 8.573-8.575 6.063 6.063 0 0 0-8.573 8.575zm1.616-1.616a3.776 3.776 0 1 1 5.34-5.341 3.776 3.776 0 0 1-5.34 5.341z" className="path2">
					  </path>
					</g>
					</symbol>
					<symbol id="star" viewBox="0 0 32 32">
					<path className="path1" d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z">
					</path>
					</symbol>
					<symbol viewBox="0 0 32 32" id="backtop">
					<g fillRule="evenodd">
					  <circle cx="16" cy="16" r="15" style={{stroke:"#999",strokeWidth:0.6,fill:"none"}} />
					  <line x1="16" y1="10" x2="16" y2="21" style={{stroke:'#999',strokeWidth:0.8}}/>
					  <line x1="10" y1="10" x2="22" y2="10" style={{stroke:'#999',strokeWidth:0.8}}/>
					  <path d="M9.5 18 L16 10 L22.5 18" style={{stroke:'#999',strokeWidth:0.8,fill:'none'}}/>
					  <text x="10" y="27"  style={{fontSize:'6px',fill:'#999',fontWeight:700}}>顶部</text>
					</g>
					</symbol>
					<symbol viewBox="0 0 33 32" id="default">
					<path fill="#3b87c8" d="M13.374 29.064a.94.94 0 0 1-.941-.941V6.476l-7.285 6.899a.942.942 0 0 1-1.299-1.364l8.876-8.424a.94.94 0 0 1 1.59.681v23.855a.94.94 0 0 1-.941.941zM20.904 29.355h-.008a.94.94 0 0 1-.375-.078.943.943 0 0 1-.559-.86V3.944a.94.94 0 1 1 1.882 0v22.287l7.238-6.842a.94.94 0 0 1 1.289 1.366l-8.818 8.338a.943.943 0 0 1-.649.264z">
					</path>
					</symbol>
					<symbol viewBox="0 0 32 32" id="distance">
					<path fill="#2a9bd3" d="M15.884 31.236l-.042.001a.888.888 0 0 1-.59-.224l-7.91-7.91a7.548 7.548 0 0 1-.498-.471 12.752 12.752 0 0 1-3.747-9.045C3.097 6.523 8.824.796 15.888.796s12.791 5.727 12.791 12.791c0 3.532-1.432 6.73-3.747 9.045-.196.196-.409.391-.613.578l-7.813 7.804a.886.886 0 0 1-.589.223l-.035-.001zm0-28.667C9.818 2.59 4.908 7.513 4.908 13.582c0 3.023 1.218 5.762 3.19 7.752l.461.435 7.316 7.316 7.2-7.2q.284-.249.551-.516a10.977 10.977 0 0 0 3.225-7.787c0-6.066-4.905-10.987-10.965-11.013z">
					</path>
					<path fill="#2a9bd3" d="M15.884 18.524a5.707 5.707 0 0 1-4.07-1.732l-.001-.001a5.76 5.76 0 1 1 4.119 1.734h-.05zm-2.817-2.942a3.982 3.982 0 1 0 0-5.626c-.726.717-1.175 1.713-1.175 2.813s.449 2.096 1.175 2.813z"></path>
					</symbol>
					<symbol viewBox="0 0 32 32" id="fengniao">
					<path fill="#27a9e1" d="M5.953 2.793s-.117 1.801.857 3.56c.361.255 10.458 6.218 10.458 6.218L5.953 2.794z"></path>
					<path fill="#b8e5fa" d="M9.604.889s-.333 1.404.069 3.147c.254.307 7.801 8.116 7.801 8.116L9.604.889z"></path>
					<path fill="#0089cf" d="M29.282 14.601l-4.861-.361s-.133-.001-.147-.226h-.002a2.652 2.652 0 0 0-2.978-2.357h-.003l-.011.001-.12.019-.004.001c-.432.075-1.812.374-3.038 1.285 0 0-.167.121-.421.33L2.665 6.043s3.254 8.665 12.207 11.98c-1.6 2.849-7.407 13.48-7.407 13.48l2.446-1.306s.775-2.853 1.884-4.957c.609-.936 1.211-.992 1.498-1.141.291-.151 3.707-.765 6.431-4.339.897-1.166 1.244-2.666 1.723-4.261.28-.061 3.008-.651 3.789-.718 1.068-.092 4.045-.181 4.045-.181z"></path>
					<path fill="#0089cf" d="M7.392 17.849c-1.567-1.368-2.199-3.219-2.035-5.217-.232-.288-.45-.572-.654-.851-.484 2.903.555 4.854 2.176 6.269 1.538 1.342 3.635 1.85 5.466 1.577-1.674.109-3.563-.565-4.953-1.778z"></path>
					<path fill="#0089cf" d="M12.345 19.628h.002zm-7.642-7.846c.204.279.421.563.654.851-.164 1.998.468 3.849 2.035 5.217 1.292 1.128 3.016 1.79 4.597 1.79.12 0 .238-.004.356-.011a6.554 6.554 0 0 1-.975.071c-1.568 0-3.22-.54-4.49-1.648-1.621-1.415-2.66-3.366-2.176-6.269z"></path>
					</symbol>
					<symbol viewBox="0 0 23 32" id="hot">
					<path fill="#f07373" d="M9.859 29.375c-3.489-.771-6.362-3.097-7.187-5.551-.882-2.623-1.029-6.873-.238-9.318l-1.727.037.001.002.001.004.004.01.011.029.038.091c.039.09.086.191.142.3.155.304.349.627.586.955a7.477 7.477 0 0 0 2.711 2.318c.583.153.583.153 1.087-.188.187-.263.187-.263.224-.39.028-.094.041-.176.05-.28.01-.109.016-.238.022-.47.063-2.219.162-3.38.562-4.943a10.05 10.05 0 0 1 .814-2.185c1.433-2.723 4.843-6.053 6.699-7.021l-1.325-.962c-.064.382-.127.992-.131 1.722-.008 1.252.169 2.393.616 3.329.261.547.525.968 1.132 1.862l.23.339c.86 1.281 1.161 1.986 1.069 2.653l-.009.125c.069.517.069.517.781.906.451-.026.451-.026.578-.104.144-.093.144-.093.19-.136.041-.037.079-.077.123-.125.068-.076.153-.178.245-.295.22-.279.458-.615.677-.963.648-1.028 1.045-1.988 1.037-2.845l-.914.009-.706.581c.295.358.809 1.075 1.33 1.936.826 1.363 1.492 2.791 1.898 4.209 1.1 3.845.3 9.288-2.245 11.75a9.652 9.652 0 0 1-1.659 1.29 10.232 10.232 0 0 1-3.471 1.332c-.794.151-1.385.191-2.064.191h-.009a2.75 2.75 0 0 1-.373-.03 6.007 6.007 0 0 1-.585-.115 7.765 7.765 0 0 1-.536-.15l-.578 1.735a9.182 9.182 0 0 0 1.445.341c.221.031.43.048.627.048h.009a12.546 12.546 0 0 0 2.407-.224 12.011 12.011 0 0 0 4.088-1.572c.699-.431 1.358-.94 1.971-1.533 3.098-2.998 4-9.132 2.731-13.567-.455-1.591-1.188-3.161-2.092-4.653-.569-.939-1.134-1.727-1.482-2.15l-1.645-1.998.024 2.588c.004.412-.281 1.1-.756 1.853a9.64 9.64 0 0 1-.569.809 4.528 4.528 0 0 1-.158.195c.028-.027.028-.027.16-.113.122-.075.122-.075.57-.101.71.388.71.388.778.902h-.914l.906.125c.174-1.262-.261-2.281-1.362-3.922l-.235-.347c-.554-.817-.787-1.189-.995-1.624-.306-.642-.444-1.53-.438-2.53a10.566 10.566 0 0 1 .107-1.431L14.44.304l-1.628.85c-2.18 1.138-5.862 4.733-7.471 7.791a11.873 11.873 0 0 0-.967 2.583 19.2 19.2 0 0 0-.511 3.147c-.036.423-.061.839-.079 1.273-.011.281-.019.531-.029.924-.005.191-.01.298-.015.354a.403.403 0 0 1 .019-.077c.027-.099.027-.099.203-.346.492-.332.492-.332 1.112-.157a5.745 5.745 0 0 1-2.54-2.496 3.456 3.456 0 0 1-.093-.197l-.018-.044-.002-.006v.001l.001.002v.002l-.915-2.473-.812 2.51c-.917 2.836-.757 7.485.245 10.463 1.042 3.099 4.442 5.852 8.526 6.754l.395-1.785z"></path>
					</symbol>
					<symbol viewBox="0 0 32 32" id="price">
					<path fill="#e6b61a" d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-2C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"></path><path fill="#e6b61a" d="M23.14 6.06l-5.12 8.65h4.48v1.54h-5.49v2.43h5.49v1.54h-5.49v5.1h-2.02v-5.1H9.53v-1.54h5.46v-2.43H9.53v-1.54h4.45L8.8 6.06h2.24l4.99 8.48 4.93-8.48h2.18z"></path>
					</symbol>
					<symbol viewBox="0 0 33 32" id="rating">
					<path fill="#eba53b" d="M27.087 31.84L16.8 25.553 6.504 31.84l2.824-11.727-9.186-7.878 12.019-.941L16.801.16l4.631 11.134 12.019.941-9.158 7.849zM16.8 23.369l7.407 4.527-2.014-8.471 6.588-5.647-8.659-.696L16.8 5.063l-3.341 8.019-8.659.696 6.588 5.647-2.014 8.471z"></path>
					</symbol>
					<symbol viewBox="0 0 38 32" id="selected">
					<path fill="#3190e8" d="M32.291 2.327c.582-.582 1.455-.582 2.036 0l2.036 2.036c.582.582.582 1.455 0 2.036L13.818 29.09c-.582.582-1.455.582-2.036 0L1.455 18.908c-.582-.582-.582-1.455 0-2.036l2.036-2.036c.582-.582 1.455-.582 2.036 0l7.273 7.273L32.291 2.327z"></path>
					</symbol>
					<symbol viewBox="0 0 32 32" id="speed">
					<path fill="#37c7b7" d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-2C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"></path><path fill="#37c7b7" d="M15 7v11.002l5.678 4.882 1.304-1.517-5.33-4.583.348.758V6.999h-2z"></path>
					</symbol>
					<symbol viewBox="0 0 50 50" id="cart-minus">
					<path fillRule="evenodd" strokeWidth="4" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm0 42C11 42 2 33 2 22S11 2 22 2s20 9 20 20-9 20-20 20z" clipRule="evenodd"></path>
					<path fillRule="evenodd" d="M32 20c1.1 0 2 .9 2 2s-.9 2-2 2H12c-1.1 0-2-.9-2-2s.9-2 2-2h20z" clipRule="evenodd"></path>
					</symbol>
					<symbol viewBox="0 0 50 50" id="cart-add">
					<path fill="none" d="M0 0h44v44H0z"></path>
					<path fillRule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm10 24h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2z" clipRule="evenodd"></path>
					</symbol>
					<symbol viewBox="0 0 24 32" id="cart-remove">
					<path fill="#bbb" fillRule="evenodd" d="M21.5 10h-19c-1.1 0-1.918.896-1.819 1.992l1.638 18.016C2.419 31.104 3.4 32 4.5 32h15c1.1 0 2.081-.896 2.182-1.992l1.637-18.016A1.798 1.798 0 0 0 21.5 10zM8 28H5L4 14h4v14zm6 0h-4V14h4v14zm5 0h-3V14h4l-1 14zm2-24h-2.941l-.353-2.514C17.592.669 16.823 0 15.998 0H8c-.825 0-1.593.668-1.708 1.486L5.94 4H3a3 3 0 0 0-3 3v1h24V7a3 3 0 0 0-3-3zM8.24 2h7.52l.279 2H7.96l.28-2z"></path>
					</symbol>
					<symbol viewBox="0 0 14 16" id="cart">
					<path fill="#FFF" fillRule="evenodd" d="M12.364 2.998H2.088L1.816.687a.455.455 0 0 0-.478-.431L.431.303A.454.454 0 0 0 0 .78l1.256 10.893c.006.293.011 1.325.933 1.325h9.546a.455.455 0 0 0 .455-.454v-.881a.454.454 0 0 0-.455-.455H3.05l-.11-.937h8.606c.998 0 1.889-.724 1.989-1.616l.455-4.04c.1-.893-.628-1.617-1.626-1.617zm-.45 4.245c-.075.669-.317 1.212-1.066 1.212H2.727L2.3 4.812h8.821c.749 0 1.065.543.99 1.212l-.197 1.219zM2.416 15.79a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9.092 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
					</symbol>
					<symbol viewBox="0 0 58 58" id="cart-icon">
					<defs>
					  <filter id="a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><path id="b" d="M7.614 4.051c-1.066.086-1.452-.398-1.752-1.584C5.562 1.28.33 5.88.33 5.88l3.71 19.476c0 .148-1.56 7.515-1.56 7.515-.489 2.19.292 4.27 3.56 4.32 0 0 36.917.017 36.92.047 1.979-.012 2.981-.995 3.013-3.039.03-2.043-1.045-2.978-2.987-2.993L8.83 31.192s.86-3.865 1.077-3.865c0 0-5.788.122 32.065-1.956.606-.033 2.018-.764 2.298-1.848 1.113-4.317 4.008-13.26 4.458-15.64.932-4.925 2.061-8.558-4.28-7.405 0 0-35.768 3.487-36.833 3.573z"/>
					</defs>
					<g fill="none" fillRule="evenodd" filter="url(#a)" transform="translate(3 2)">
					  <g transform="translate(5.038 7.808)"><mask id="c" fill="#fff"><use xlinkHref="#b"/></mask><use fill="#FFF" xlinkHref="#b"/><path fill="#2073C1" d="M53.962 7.774l-5.701 19.305-40.78 1.574z" opacity=".1" mask="url(#c)"/></g><path stroke="#FFF" strokeWidth="6" d="M9.374 18.722S7.868 11.283 7.323 8.71C6.778 6.136 5.86 5.33 3.978 4.52 2.096 3.713.367 2.286.367 2.286" strokeLinecap="round"/><circle cx="46" cy="51" r="4" fill="#FFF"/><circle cx="12" cy="51" r="4" fill="#FFF"/>
					</g>
					</symbol>
					<symbol viewBox="0 0 14 14" id="arrow-left">
					<path d="M0 0 L8 7 L0 14"  stroke="#fff" strokeWidth="1" fill="none"/>
					</symbol>
					<symbol viewBox="0 0 1024 1024" id="res-well"><path fill="#7ED321" fillRule="evenodd" d="M512 0C229.376 0 0 229.376 0 512s229.376 512 512 512 512-229.376 512-512S794.624 0 512 0zM247.808 402.432c0-36.864 39.936-93.184 93.184-93.184s93.184 56.32 93.184 93.184c0 11.264-9.216 20.48-20.48 20.48-11.264 0-20.48-9.216-20.48-20.48 0-16.384-24.576-52.224-52.224-52.224-27.648 0-52.224 35.84-52.224 52.224 0 11.264-9.216 20.48-20.48 20.48-11.264 0-20.48-9.216-20.48-20.48zM512 800.768c-132.096 0-239.616-96.256-239.616-215.04 0-11.264 9.216-20.48 20.48-20.48 11.264 0 20.48 9.216 20.48 20.48 0 96.256 89.088 174.08 198.656 174.08 109.568 0 198.656-77.824 198.656-174.08 0-11.264 9.216-20.48 20.48-20.48 11.264 0 20.48 9.216 20.48 20.48 0 117.76-107.52 215.04-239.616 215.04zm243.712-377.856c-11.264 0-20.48-9.216-20.48-20.48 0-17.408-24.576-52.224-52.224-52.224-28.672 0-52.224 34.816-52.224 52.224 0 11.264-9.216 20.48-20.48 20.48-11.264 0-20.48-9.216-20.48-20.48 0-36.864 39.936-93.184 93.184-93.184s93.184 56.32 93.184 93.184c0 11.264-9.216 20.48-20.48 20.48z"></path></symbol>
					<symbol viewBox="0 0 1024 1024" id="res-bad"><path fill="#D0021B" fillRule="evenodd" d="M512 0C230.326 0 0 230.326 0 512s230.573 512 512 512 512-230.326 512-512S793.674 0 512 0zM240.694 373.755l158.735-56.285 15.306 46.164L256 419.919l-15.306-46.164zm440.409 384.123c-10.122 0-20.49-10.122-25.674-20.49-10.122-10.122-61.47-25.674-148.366-25.674-86.896 0-138.245 15.306-148.366 25.674 0 10.122-10.122 20.49-25.674 20.49s-25.674-10.122-25.674-25.674c0-71.591 174.041-71.591 194.53-71.591 20.489 0 194.53 0 194.53 71.591 10.122 10.368 0 25.674-15.306 25.674zM768 419.919l-163.672-61.47 15.306-46.164 158.735 56.285-10.368 51.348-.001.001z"></path></symbol>
					<symbol viewBox="0 0 122 122" id="avatar-default"><path fill="#DCDCDC" fillRule="evenodd" d="M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"></path></symbol>
					<symbol viewBox="0 0 655 1024" id="mobile"><path d="M0 122.501v778.998C0 968.946 55.189 1024 123.268 1024h408.824c68.52 0 123.268-54.846 123.268-122.501V122.501C655.36 55.054 600.171 0 532.092 0H123.268C54.748 0 0 54.846 0 122.501zM327.68 942.08c-22.622 0-40.96-18.338-40.96-40.96s18.338-40.96 40.96-40.96 40.96 18.338 40.96 40.96-18.338 40.96-40.96 40.96zM81.92 163.84h491.52V819.2H81.92V163.84z"></path></symbol>
					<symbol viewBox="0 0 1024 1024" id="arrow-right" className="icon"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" className="selected"></path></symbol>
					<symbol viewBox="0 0 40 40" id="order"><path d="M31.5 3h-23C6 3 4 5.1 4 7.7v24.7C4 34.9 6 37 8.5 37h23c2.5 0 4.5-2.1 4.5-4.7V7.7C36 5.1 34 3 31.5 3zM11.8 28.2c-1.1 0-2-.9-2-2.1 0-1.1.9-2.1 2-2.1s2 .9 2 2.1c0 1.2-.9 2.1-2 2.1zm0-6.1c-1.1 0-2-.9-2-2.1 0-1.1.9-2.1 2-2.1s2 .9 2 2.1c0 1.1-.9 2.1-2 2.1zm0-6.2c-1.1 0-2-.9-2-2.1 0-1.1.9-2.1 2-2.1s2 .9 2 2.1c0 1.2-.9 2.1-2 2.1zm5.1 11.9h13.5v-2.6H16.9v2.6zm0-6.5h13.5v-2.6H16.9v2.6zm0-6.6h13.5v-2.6H16.9v2.6z"></path></symbol>
					<symbol viewBox="0 0 40 40" id="point"><path d="M34.6 7.1c0-1.1-1-2.1-2.1-2.1h-24c-1.1 0-2 1-2.1 2.1l-1.6 25C4.6 34.3 6.3 36 8.5 36h24c2.2 0 3.9-1.7 3.7-3.9l-1.6-25zm-5.9 6.1c-.2 4.6-3.7 8.2-8.3 8.2-4.6 0-8.2-3.7-8.4-8.3-.3-.2-.5-.6-.5-1 0-.7.6-1.2 1.3-1.2s1.3.6 1.3 1.2c0 .5-.3.9-.7 1.1.2 3.8 3.2 6.8 7.1 6.8 3.9 0 6.8-3.1 7-6.9-.4-.2-.6-.6-.6-1.1 0-.7.6-1.2 1.3-1.2s1.3.6 1.3 1.2c-.2.6-.4 1-.8 1.2z"></path></symbol>
					<symbol viewBox="0 0 40 40" id="vip"><path d="M7 33.4c0 1.1.9 1.6 2 1.6h22c1.1 0 2-.5 2-1.6V31H7v2.4z"></path><path d="M32.1 14.3c-.6 2.3-2.6 4-5.1 4-2.9 0-5.3-2.3-5.3-5.2v-.2c-.5.2-1 .3-1.6.3-.6 0-1.1-.1-1.7-.3v.2c0 2.9-2.4 5.2-5.3 5.2-2.5 0-4.6-1.7-5.1-4.1-.5.4-1.2.6-1.8.6-.3 0-.5.1-.8 0L7.2 29h26l1.7-14.2c-.3.1-.5.1-.8.1-.8 0-1.5-.2-2-.6z" className="st0"></path><ellipse cx="20.1" cy="8.2" rx="3.2" ry="3.2"></ellipse><ellipse cx="6.4" cy="10.5" rx="2.4" ry="2.4"></ellipse><ellipse cx="33.8" cy="10.5" rx="2.4" ry="2.4"></ellipse></symbol>
					<symbol viewBox="0 0 40 40" id="download"><path d="M30 5H10c-2.8 0-5 2.2-5 5v20c0 2.8 2.2 5 5 5h20c2.8 0 5-2.2 5-5V10c0-2.8-2.2-5-5-5zm-3.9 22.7c-.1.2-.3.4-.6.5-4.3 2.8-10.1 1.6-13-2.8-2.8-4.3-1.6-10.2 2.8-13 4.3-2.8 10.2-1.6 13 2.8.2.2.3.5.4.8.1.2 0 .5-.2.7l-8.8 5.7c-.2.2-.6.1-.7-.2l-.5-.7c-.4-.6-.2-1.5.4-1.9l5.6-3.6c.2-.2.3-.5.2-.7l-.1-.1c-2.2-1.8-5.4-2.1-7.9-.4-3.1 2-4 6.1-2 9.2 2 3.1 6.1 4 9.2 2 .6-.4 1.3-.2 1.7.4l.3.7c.1.2.4.5.2.6zm3.1-4.4l-.9.6c-.2.2-.6.1-.7-.2L26.5 22c-.2-.2-.1-.6.2-.7l1.8-1.1c.2-.2.6-.1.7.2l.6.9c.3.6.1 1.5-.6 2z"></path></symbol>
					<symbol viewBox="0 0 40 40" id="service"><g id="service_XMLID_1_"><path id="service_XMLID_6_" d="M32.2 9.5c-.2-.7-.1-.7-.4-.9-1.7-1.2-5.3.2-6.7 1.9-.8-3.8-3.8-6.1-4.7-5.9-.9-.2-4 2.1-4.8 5.9-1.3-1.7-5-3.1-6.7-1.9-.1.1-.5.6-.5.7C5.4 20.7 15 24.6 19 25.7v8.7c0 .7.3 1.2 1 1.2s1-.5 1-1.2v-8.6c4-1 14.2-4.8 11.2-16.3z"></path><path id="service_XMLID_7_" d="M6 25c-.9 0-1.6.7-1.6 1.5.1.8.7 1.5 1.6 1.5 3.1 0 6.5 1.5 8.5 3.7.3.3.7.6 1.1.6.4 0 .7-.1 1-.4.6-.6.6-1.6.1-2.3C14.1 26.8 10 25 6 25z"></path><path id="service_XMLID_8_" d="M34.6 25c-4 0-8.1 1.9-10.7 4.6-.6.6-.5 1.6.1 2.2.3.3.7.4 1 .4.4 0 .8-.3 1.1-.6 2-2.1 5.3-3.7 8.4-3.7h.1c.8 0 1.5-.7 1.5-1.5 0-.7-.7-1.4-1.5-1.4z"></path></g><path d="M0 0h40v40H0z" className="st1"></path></symbol>
					<symbol viewBox="0 0 120 120" id="select"><circle cx="60" cy="60" r="60"></circle><path fill="#FFF" d="M63.84 84.678a1.976 1.976 0 0 1-.387.545l-7.975 7.976a1.996 1.996 0 0 1-2.829-.005L24.172 64.716a2.005 2.005 0 0 1-.005-2.828l7.976-7.976a1.996 1.996 0 0 1 2.828.005l19.015 19.015L91.498 35.42a1.991 1.991 0 0 1 2.823 0l7.976 7.977c.784.784.78 2.043 0 2.823L63.84 84.678z"></path></symbol>
					<symbol xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 72 72" id="sdk_icon_zhifubao@2x"><defs><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36z" id="sdk_icon_zhifubao@2x_a"></path></defs><g fill="none" fillRule="evenodd"><mask id="sdk_icon_zhifubao@2x_b" fill="#fff"><use xlinkHref="#sdk_icon_zhifubao@2x_a"></use></mask><use fill="#00A1E9" xlinkHref="#sdk_icon_zhifubao@2x_a"></use><path d="M33 21v-5h7v5h14v3H40v4h12c-.202.048-.408 3.223-2 7-1.32 4.134-2.683 6.15-2 6l23.6 8c-.2-.285-.848 2.3-2 4-.775 2.013-2 5-2 5L44 46c.237.162-3.79 4.674-8 7-4.002 1.645-8.717 2.88-14 1-4.93-.56-8.554-3.867-8-10 .693-6.083 7.138-8.19 13-8 4.739-.19 14.796 3.29 15 3-.204.29.642-1.628 2-4 .283-2.015.518-3.777 0-4H22v-3h11v-4H20v-3h13zm-7 30c-7.407 0-9-3.593-9-6 0-2.761 1.576-5.57 8-6 6.484-.383 15.2 4.436 15 4 .2.436-6.238 8-14 8z" fill="#FFF" mask="url(#sdk_icon_zhifubao@2x_b)"></path></g></symbol>
					<symbol viewBox="0 0 72 72" id="weixin"><g fill="none" fillRule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36z" fill="#45C144"></path><path d="M29 40l-4-8c-.262-.292-.288-.398 0-1 .594-.228.743-.174 1 0l4 4c1.5 1.098 1.5 1.098 3 0l21-10c-3.668-4.964-10.11-8-17-8-12.33 0-22 8.12-22 18 0 5.6 2.91 10.518 7 14 1 .8 1.068.537 1 1 .068.185-.954 4.042-1 4-.027.316-.097.495 0 1-.097.075.225.4 1 0-.22.4 5-3 5-3 1.4.6 5.8 1 9 1 11.533 0 21.2-7.85 21-18 .2-2.899-.692-5.756-2-8L31 41c-1.5.5-2-1-2-1z" fill="#FFF"></path></g></symbol>
					<symbol viewBox="0 0 46 46" id="human"><path fill="#ff7b52" d="M33.291 37.774c-.25.097-.504.175-.765.233-6.427 1.444-5.954-3.968-6-3.953 10.457-5.053 10.348-13.466 10-16.216-16.15-.041-22.943-7.063-22.943-7.063s-.176 1.733-2.933 4.996c-2.756 3.262-5.236 4.09-5.132 4.113.54 13.9 12.246 14.242 12.246 14.242-.762 4.662-4.357 4.33-4.357 4.33s-6.38.213-11.173-7.446c-.85-1.359-1.02-2.864-1.166-4.579-.217-2.542.14-4.643.312-7.2.271-4.064.96-6.269.96-6.269S7.13 0 21.4 0s17.828 12.508 17.828 12.508l-.035.074c.533.763.984 1.997 1.356 3.36A3.483 3.483 0 0 1 45 19.281v7.257a3.484 3.484 0 0 1-3.325 3.472c-2.009 4.537-6.657 12.185-15.241 12.457C26.023 44.485 24.269 46 22.168 46c-2.407 0-4.357-1.988-4.357-4.44 0-2.453 1.95-4.44 4.357-4.44 1.955 0 3.609 1.311 4.16 3.118 1.447.13 4.044-.094 6.963-2.464zM18.216 27.018s.99 3.08 3.705 3.08 3.807-1.875 3.807-2.906c.467-1.135 1.348-.541 1.482-.071.134.47-.763 4.67-5.24 4.67s-5.205-4.358-5.205-4.358.033-.97.702-.97c.669 0 .749.555.749.555zm10.052-2.332c.963 0 1.743-1.192 1.743-2.664 0-1.471-.78-2.664-1.743-2.664-.963 0-1.743 1.193-1.743 2.664 0 1.472.78 2.664 1.743 2.664zm-12.723 0c.962 0 1.743-1.192 1.743-2.664 0-1.471-.78-2.664-1.743-2.664-.963 0-1.743 1.193-1.743 2.664 0 1.472.78 2.664 1.743 2.664z"></path></symbol>
					<symbol viewBox="0 0 46 46" id="phone"><path fill="#6ac20b" d="M15.433 30.568c9.342 9.342 17.708 12.15 18.871 12.316 1.163.167 3.07.542 5.837-2.225 3.24-3.24 3.566-4.94 1.783-6.724-1.783-1.783-6.212-4.48-7.416-5.176-1.206-.696-2.228-.472-3.097.133-.868.605-1.87 1.375-2.798 2.047-.927.671-2.087.955-3.332.167-1.245-.79-3.35-2.27-5.735-4.652-2.384-2.384-3.863-4.49-4.651-5.735-.789-1.245-.505-2.405.167-3.332.671-.928 1.441-1.93 2.046-2.798.605-.869.828-1.89.134-3.097-.696-1.204-3.394-5.633-5.177-7.416-1.783-1.783-3.484-1.457-6.724 1.783-2.766 2.766-2.391 4.674-2.226 5.837.167 1.164 2.976 9.53 12.318 18.872"></path></symbol>
					<symbol viewBox="0 0 126 126" id="expired"><path fill="#9B9B9B" fillRule="evenodd" d="M63 125.5c34.518 0 62.5-27.982 62.5-62.5S97.518.5 63 .5.5 28.482.5 63s27.982 62.5 62.5 62.5zM15.156 66.678l-3.073-1.258 2.868-1.674.248-3.31 2.478 2.21 3.225-.79-1.335 3.04 1.746 2.825-3.302-.33-2.147 2.533-.704-3.245zm4.07-24.55l-2.03-2.625 3.32-.015 1.87-2.744 1.04 3.153 3.187.93-2.677 1.964.1 3.32-2.695-1.94-3.124 1.122 1.01-3.163zm15.8-19.223l-.446-3.29 2.883 1.646 2.99-1.44-.674 3.25 2.294 2.4-3.3.363-1.573 2.924-1.363-3.027-3.267-.592 2.457-2.233zm23.296-8.75l1.258-3.072 1.674 2.868 3.31.248-2.21 2.478.79 3.225-3.04-1.335-2.825 1.746.33-3.302-2.533-2.147 3.245-.704zm24.55 4.072l2.625-2.032.015 3.32 2.744 1.87-3.153 1.04-.93 3.188-1.964-2.677-3.32.1 1.94-2.695-1.122-3.124 3.163 1.01zm27.972 39.095l3.073 1.258-2.868 1.674-.248 3.31-2.478-2.21-3.225.79 1.335-3.04-1.746-2.825 3.302.33 2.147-2.533.704 3.245zm-4.07 24.55l2.03 2.625-3.32.015-1.87 2.744-1.04-3.153-3.187-.93 2.677-1.964-.1-3.32 2.695 1.94 3.124-1.122-1.01 3.163zm-15.8 19.223l.446 3.29-2.883-1.646-2.99 1.44.674-3.25-2.294-2.4 3.3-.363 1.573-2.924 1.363 3.027 3.267.592-2.457 2.233zm-23.296 8.75l-1.258 3.072-1.674-2.868-3.31-.248 2.21-2.478-.79-3.225 3.04 1.335 2.825-1.746-.33 3.302 2.533 2.147-3.245.704zm-24.55-4.072l-2.625 2.032-.015-3.32-2.744-1.87 3.153-1.04.93-3.188 1.964 2.677 3.32-.1-1.94 2.695 1.122 3.124-3.163-1.01zM74.257 41.7a23.764 23.764 0 0 0-22.17.092 23.767 23.767 0 0 0-12.508 18.646l.995.1a22.767 22.767 0 0 1 11.983-17.863 22.764 22.764 0 0 1 21.238-.088l.462-.887zm11.387 22.436A22.764 22.764 0 0 1 74.313 82.1a22.767 22.767 0 0 1-21.5.696l-.44.897a23.767 23.767 0 0 0 22.44-.727A23.764 23.764 0 0 0 86.64 64.214l-.997-.078zM63 122.5C30.14 122.5 3.5 95.86 3.5 63S30.14 3.5 63 3.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5zm14.127-71.148l1.14 1.975 3.388-1.956-1.14-1.974-3.388 1.956zm2.704-3.14l-1.055-1.83-3.388 1.956 1.056 1.83 3.388-1.957zm.237 8.232l3.388-1.956-1.14-1.974-3.388 1.956 1.14 1.974zm-6.89-8.715a24.73 24.73 0 0 0-.892-1.453 7.288 7.288 0 0 0-.79-.985c.31-.104.617-.227.924-.367a6.52 6.52 0 0 0 .842-.46c.13-.093.226-.12.285-.08.06.04.066.128.017.267a.653.653 0 0 0-.032.378c.03.113.09.253.187.42l.85 1.475 3.39-1.956a39.962 39.962 0 0 0-1.01-1.677c-.25-.383-.472-.665-.67-.847a13.33 13.33 0 0 0 1.857-.767c.19-.09.313-.107.374-.05.062.057.064.148.007.273-.09.2-.128.356-.117.47.01.114.06.247.147.4l.792 1.37c.24-.157.48-.318.718-.483a9.91 9.91 0 0 0 .673-.513l1.02 1.766c-.26.095-.52.204-.78.327-.262.123-.525.243-.79.36l4.655 8.063c.234-.17.46-.333.675-.486.217-.153.43-.318.643-.496l.912 1.58c-.21.085-.434.177-.672.278-.238.1-.534.243-.888.43-.354.185-.79.423-1.307.712a205.733 205.733 0 0 0-3.876 2.238c-.516.307-.943.567-1.28.78-.34.215-.615.402-.828.562-.212.16-.408.31-.586.45l-.912-1.58c.638-.24 1.29-.533 1.958-.882l-4.668-8.085a20.893 20.893 0 0 0-1.67 1.186l-1.02-1.767a21.623 21.623 0 0 0 1.862-.854zm14.762 2.285l3.387-1.956-2.124-3.68-3.388 1.956 2.124 3.68zm-1.45-10.332l-3.387 1.956 1.956 3.387 3.387-1.956-1.956-3.387zm2.11 11.67c.274.634.514 1.305.717 2.01.204.704.36 1.408.47 2.11.11.704.167 1.4.17 2.093a10.19 10.19 0 0 1-.17 1.94c-.51-.15-1.18-.14-2.008.024.213-.974.312-1.88.298-2.723a10.595 10.595 0 0 0-.37-2.558c-.23-.865-.573-1.77-1.028-2.72a48.398 48.398 0 0 0-1.714-3.208l-2.7-4.676a25.767 25.767 0 0 0-.875-1.42 21.753 21.753 0 0 0-.85-1.186c.525-.21 1.043-.45 1.554-.717.51-.267 1.112-.6 1.805-1a60.923 60.923 0 0 0 1.893-1.136 17.45 17.45 0 0 0 1.502-1.047c.137.364.325.787.565 1.267.24.48.517.99.83 1.53l7.535 13.054a6.1 6.1 0 0 1 .46.94.97.97 0 0 1-.036.756c-.115.25-.347.527-.698.832-.35.304-.864.688-1.54 1.15a3.186 3.186 0 0 0-.647-.858 4.97 4.97 0 0 0-1.038-.717 13.81 13.81 0 0 0 1.096-.55c.264-.152.45-.295.555-.43a.502.502 0 0 0 .108-.437 2.097 2.097 0 0 0-.243-.566l-2.172-3.762-3.47 2.004zm-1.954 7.223a6.16 6.16 0 0 0-1.466-.69 6.537 6.537 0 0 0-1.563-.332l.69-1.59a14.604 14.604 0 0 1 3.05.817l-.71 1.794zm-4.033-.027a2.137 2.137 0 0 0-.287.51 6.12 6.12 0 0 0-.26.872 23.78 23.78 0 0 0-.283 1.452c-.1.594-.225 1.34-.37 2.237a3.37 3.37 0 0 0-.92-.078 5.34 5.34 0 0 0-1.096.19 8.492 8.492 0 0 0 .812-2.41c.15-.843.175-1.782.077-2.816.39.034.75.034 1.08 0a8.61 8.61 0 0 0 1.06-.182c.14-.044.227-.04.26.017.03.056.007.126-.074.21zm-17.506-5.745c.68-.392 1.22-.72 1.624-.98.405-.26.798-.538 1.182-.834l1.044 1.81c-.426.19-.86.4-1.3.626a40.64 40.64 0 0 0-1.66.917l5.015 8.688c.21.36.354.684.435.97.082.285.043.584-.118.9-.16.313-.468.676-.924 1.086-.455.41-1.11.918-1.962 1.52a10.17 10.17 0 0 0-.84-.83 7.863 7.863 0 0 0-1.12-.836 20.7 20.7 0 0 0 1.457-.813c.36-.226.625-.43.797-.612.172-.183.262-.346.27-.49a.783.783 0 0 0-.117-.444l-4.68-8.105-4.448 2.568c-.846.488-1.512.886-2 1.195-.485.31-.936.6-1.35.877l-1.03-1.788c.236-.1.472-.204.706-.31.234-.108.484-.234.75-.38a93.69 93.69 0 0 0 2.035-1.132l4.45-2.568a106.39 106.39 0 0 0-1.3-2.202c-.33-.54-.576-.92-.74-1.138.35-.13.72-.29 1.105-.486.387-.194.696-.378.93-.55.192-.147.346-.176.462-.086.117.09.133.205.048.346a.79.79 0 0 0-.08.56c.044.186.098.335.162.446l1.2 2.08zm-1.79 11.537a25.633 25.633 0 0 0-1.934-1.475 35.97 35.97 0 0 0-2.03-1.31l1.267-1.644a38.25 38.25 0 0 1 2.034 1.195c.68.428 1.346.9 1.993 1.412l-1.33 1.822zm-12.53-7.01c.706.293 1.41.608 2.11.942.702.334 1.376.693 2.022 1.078l-1.13 2.12a56.81 56.81 0 0 0-2.01-1.152 41.097 41.097 0 0 0-2.06-1.044l1.067-1.945zM63 118.25c30.514 0 55.25-24.736 55.25-55.25S93.514 7.75 63 7.75 7.75 32.486 7.75 63 32.486 118.25 63 118.25zm-2.237-47.53c.262-.058.562-.097.9-.118.34-.02.753-.04 1.24-.063.52-.025 1.176-.163 1.964-.415.788-.25 1.72-.646 2.794-1.184 1.077-.536 2.303-1.235 3.682-2.096a87.9 87.9 0 0 0 4.634-3.133 10.2 10.2 0 0 0 .24 1.4c.098.378.23.74.394 1.09a321.96 321.96 0 0 1-4.068 2.362 69.403 69.403 0 0 1-3.052 1.65c-.88.445-1.643.802-2.29 1.074s-1.236.483-1.768.633c-.533.15-1.03.256-1.492.32-.462.063-.954.107-1.476.13-.62.046-1.087.126-1.4.24-.31.117-.536.344-.674.682-.123.33-.22.74-.286 1.232a18.89 18.89 0 0 0-.144 1.62 7.14 7.14 0 0 0-1.164-.31 9.118 9.118 0 0 0-1.23-.136c.132-.575.256-1.07.374-1.49.118-.42.23-.785.338-1.096.106-.31.212-.575.318-.793.105-.22.214-.407.326-.564l-3.66-6.34c-.582.337-1.08.634-1.495.892-.415.257-.75.498-1.01.722l-.972-1.684c.293-.132.648-.3 1.066-.505.42-.203.83-.42 1.23-.653a31.8 31.8 0 0 0 1.27-.775c.433-.277.775-.516 1.028-.718.14.4.292.778.46 1.134.17.355.413.81.733 1.364l3.193 5.53zm-15.907-.43l-2.712-4.7-5.425 3.133c-1.456.84-2.783 1.63-3.983 2.368-1.2.74-2.125 1.344-2.778 1.813l-1.237-2.14c.307-.14.708-.335 1.202-.583.494-.25 1.055-.54 1.684-.876a143.593 143.593 0 0 0 4.375-2.429 153.71 153.71 0 0 0 4.442-2.648c1.175-.734 2.054-1.315 2.638-1.745.15.357.367.813.652 1.37a42.88 42.88 0 0 0 1.05 1.915l1.848 3.2a32.46 32.46 0 0 0 1.93 2.96l-2.057 1.188-.72-1.247-9.395 5.424 3.072 5.32c.224.39.415.68.574.875.158.195.345.304.562.327.216.023.5-.045.853-.202.353-.157.838-.405 1.455-.743.876-.47 1.734-.942 2.577-1.42a68.054 68.054 0 0 0 2.465-1.465c.754-.453 1.335-.84 1.743-1.158.407-.318.686-.66.836-1.023.15-.364.185-.81.104-1.334a26.6 26.6 0 0 0-.45-2.124c.843.437 1.734.523 2.67.26.206 1.026.324 1.854.354 2.483.03.628-.083 1.184-.34 1.665-.258.48-.698.943-1.32 1.386-.623.443-1.495.988-2.617 1.636l-2.545 1.47c-.908.524-1.758.996-2.55 1.417-1.063.558-1.902.97-2.517 1.23-.615.264-1.123.368-1.524.313-.402-.055-.75-.274-1.045-.657-.297-.385-.652-.937-1.068-1.658l-3.444-5.965a27.726 27.726 0 0 0-1.155-1.855c-.337-.49-.602-.835-.793-1.04.37-.157.762-.342 1.176-.553.414-.212.79-.425 1.13-.64.185-.125.32-.144.41-.056.087.088.085.214-.005.377a.624.624 0 0 0-.105.394c.015.12.082.286.202.494l.384.665 9.396-5.424zM10.402 63c0-29.05 23.55-52.598 52.598-52.598 29.05 0 52.598 23.55 52.598 52.598 0 29.05-23.55 52.598-52.598 52.598-29.05 0-52.598-23.55-52.598-52.598z"></path></symbol>
					<symbol viewBox="0 0 1080 261" id="shopback"><defs><path d="M0 0h1080v260H0z"/><filter width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feOffset dy="-1" in="SourceAlpha" result="shadowOffsetOuter1"/><feColorMatrix in="shadowOffsetOuter1" values="0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 1 0"/></filter></defs><g fill="none" fillRule="evenodd" transform="translate(0 1)"><use fill="#FFF" xlinkHref="#b"/><path fill="#F6F6F6" d="M230 44h533v46H230z"/><rect width="172" height="172" x="30" y="44" fill="#F6F6F6" rx="4"/><path fill="#F6F6F6" d="M230 118h369v30H230zM230 182h323v30H230zM812 115h238v39H812zM808 184h242v30H808zM917 48h133v37H917z"/></g></symbol>
				</defs>
			</svg>
		);
	}
}

export default SvgIcon;
